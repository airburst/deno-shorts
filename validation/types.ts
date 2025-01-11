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
  rules: (Rule | RuleSet)[];
};

export type RuleSet = {
  id: string;
  combinator: "and" | "or";
  rules: (Rule | Combinator)[];
  message?: string;
};

export type RuleOutcome = {
  valid: boolean;
  message?: string;
};

// Type helpers
export const isRule = (rule: Rule | Combinator | RuleSet): rule is Rule => {
  return "operator" in rule;
};

export const isCombinator = (
  rule: Rule | Combinator | RuleSet,
): rule is Combinator => {
  return "combinator" in rule && !("message" in rule);
};
