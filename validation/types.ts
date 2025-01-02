export type CompareOperator = "eq" | "lt" | "lte" | "gt" | "gte" | "in";

export type Rule = {
  id: string;
  operator: CompareOperator;
  value: string;
  valueSource?: string;
};

export type RuleSet = {
  id: string;
  combinator: "and" | "or";
  rules: Rule[];
  message: string;
};

export type RuleOutcome = {
  valid: boolean;
  message?: string;
};
