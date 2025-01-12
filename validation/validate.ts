import {getCompareFunction} from "./compare.ts";
import {Combinator, isRule, isRuleSet, Rule, RuleSet} from "./types.ts";

// Pre-generate rule evaluation functions
const compileRule = (rule: Rule) => {
  const evaluateRule = getCompareFunction(rule.operator);

  return (answers: Record<string, string>) => {
    const compareValue = rule.valueSource
      ? answers[rule.valueSource] // from another answer
      : rule.value; // from a literal value
    const valid = evaluateRule(answers[rule.id], compareValue);

    return {
      id: rule.id,
      valid,
      message: valid && isRuleSet(rule) ? undefined : (<RuleSet>rule).message,
    };
  };
};

const compileCombinator = (combinator: Combinator) => {
  const compiledRules = combinator.rules.map((ruleOrCombinator) => {
    if (isRule(ruleOrCombinator)) {
      return compileRule(ruleOrCombinator);
    }
    return compileCombinator(ruleOrCombinator);
  });

  return (answers: Record<string, string>) => {
    const valid =
      combinator.combinator === "and"
        ? compiledRules.every((rule) => rule(answers).valid)
        : compiledRules.some((rule) => rule(answers).valid);

    return {
      id: combinator.id,
      valid,
      message:
        valid && isRuleSet(combinator)
          ? undefined
          : (<RuleSet>combinator).message,
    };
  };
};

// Pre-generate rule set (combination) evaluation functions
const compileRuleSet = (ruleSet: RuleSet) => {
  return isRule(ruleSet) ? compileRule(ruleSet) : compileCombinator(ruleSet);
};

// Factory function to create a validator from rules data
export const createValidator = (validations: RuleSet[]) => {
  const compiledRuleset = validations.map((ruleSet) => compileRuleSet(ruleSet));

  return (id: string, answers: Record<string, string>) => {
    // Find the first rule that fails
    const results = compiledRuleset
      .map((ruleFunction) => ruleFunction?.(answers))
      .filter((result) => result.id === id && result.valid === false)[0];

    return results ?? {id, valid: true};
  };
};
