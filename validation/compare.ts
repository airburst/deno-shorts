import {CompareOperator} from "./types.ts";

export const compare = (op: CompareOperator) => (a: string, b: string) => {
  switch (op) {
    case "eq":
      return a === b;
    case "lt":
      return a < b;
    case "lte":
      return a <= b;
    case "gt":
      return a > b;
    case "gte":
      return a >= b;
    case "in":
      return a.includes(b);
    case "nin":
      return !a.includes(b);
    default:
      throw new Error(`Unsupported operator: ${op}`);
  }
};

// Cache the comparison functions
const compareFunctions = new Map();

export const getCompareFunction = (operator: CompareOperator) => {
  if (!compareFunctions.has(operator)) {
    compareFunctions.set(operator, compare(operator));
  }
  return compareFunctions.get(operator);
};
