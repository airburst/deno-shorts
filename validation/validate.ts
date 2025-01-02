import {getCompareFunction} from "./compare.ts";
import {Rule, RuleSet} from "./types.ts";

// Pre-generate rule evaluation functions
const compileRule = (rule: Rule) => {
  const compareFunc = getCompareFunction(rule.operator);

  return (answers: Record<string, string>) => {
    // Derive value to compare against, from
    // another answer, or a literal
    const actualValue = rule.valueSource
      ? answers[rule.valueSource]
      : rule.value;

    return compareFunc(answers[rule.id], actualValue);
  };
};

// Pre-generate rule set (combination) evaluation functions
const compileRuleSet = (ruleSet: RuleSet) => {
  const compiledRules = ruleSet.rules.map(compileRule);

  return (answers: Record<string, string>) => {
    const valid =
      ruleSet.combinator === "and"
        ? compiledRules.every((rule) => rule(answers))
        : compiledRules.some((rule) => rule(answers));

    return {
      id: ruleSet.id,
      valid,
      message: valid ? undefined : ruleSet.message,
    };
  };
};

// Factory function to create a validator from rules data
export const createValidator = (validations: RuleSet[]) => {
  const compiledRuleset = validations.map((ruleSet) => compileRuleSet(ruleSet));

  return (id: string, answers: Record<string, string>) => {
    // Find the first rule that fails
    const results = compiledRuleset
      .map((ruleFunction) => ruleFunction(answers))
      .filter((result) => result.id === id && result.valid === false)[0];

    return results ?? {id, valid: true};
  };
};
