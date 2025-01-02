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

// console.log(compare("eq")("a", "a") === true);
// console.log(compare("eq")("a", "b") === false);
// console.log(compare("lt")("a", "b") === true);
// console.log(compare("lt")("b", "a") === false);
// console.log(compare("lte")("a", "b") === true);
// console.log(compare("lte")("a", "a") === true);
// console.log(compare("gt")("b", "a") === true);
// console.log(compare("gt")("a", "b") === false);
// console.log(compare("gte")("b", "a") === true);
// console.log(compare("gte")("a", "a") === true);
// console.log(compare("in")("abc", "b") === true);
// console.log(compare("in")("abc", "d") === false);
