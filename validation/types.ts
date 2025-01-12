export type CompareOperator = "eq" | "lt" | "lte" | "gt" | "gte" | "in" | "nin";

export type Rule = {
  id: string;
  operator: CompareOperator;
  value?: string;
  valueSource?: string;
};

export type Combinator = {
  id: string;
  combinator: "and" | "or";
  rules: (Rule | Combinator)[];
};

export type RuleSet = (Rule | Combinator) & {
  message?: string;
};

export type RuleOutcome = {
  valid: boolean;
  message?: string;
};

// Type helpers
export const isRule = (rule: Rule | Combinator | RuleSet): rule is Rule => {
  return "operator" in rule && !("rules" in rule);
};

export const isRuleSet = (
  rule: Rule | Combinator | RuleSet,
): rule is RuleSet => {
  return "message" in rule;
};
