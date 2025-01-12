import {RuleSet} from "./types.ts";
import {createValidator} from "./validate.ts";

console.log("=== Simple ===\n");

// Simple
const valSimple: RuleSet[] = [
  {
    id: "firstName",
    operator: "eq",
    value: "Mark",
    message: "Name is NOT Mark",
  },
];

const validateSimple = createValidator(valSimple);
console.log(
  validateSimple("firstName", {
    firstName: "John",
  }),
);
console.log(
  validateSimple("firstName", {
    firstName: "Mark",
  }),
);

console.log("\n=== Combined ===\n");
const valCombined: RuleSet[] = [
  {
    id: "public_liability",
    combinator: "and",
    rules: [
      {
        id: "fixtures_and_fittings_or_main_building_cover_selected",
        operator: "eq",
        value: "None",
      },
      {
        id: "contents_cover_selected",
        operator: "eq",
        value: "no",
      },
    ],
    message:
      "Unfortunately we do not offer property owners liability on its own. Please select buildings, contents or fixture or fittings",
  },
];

const validateCombined = createValidator(valCombined);

// Example validation using compiled rules
const goodAnswers = {
  fixtures_and_fittings_or_main_building_cover_selected: "None",
  contents_cover_selected: "no",
};
const badAnswers = {
  fixtures_and_fittings_or_main_building_cover_selected: "None",
  contents_cover_selected: "yes",
};

console.log(validateCombined("public_liability", badAnswers));
console.log(validateCombined("public_liability", goodAnswers));

console.log("\n=== Recursive ===\n");
const nestedValidations: RuleSet[] = [
  {
    id: "work-age",
    combinator: "and",
    rules: [
      {
        id: "firstName",
        operator: "eq",
        value: "Mark",
      },
      {
        id: "nested",
        combinator: "and",
        rules: [
          {
            id: "age",
            operator: "gt",
            value: "18",
          },
          {
            id: "age",
            operator: "lt",
            value: "67",
          },
        ],
      },
    ],
    message: "Your name has to be Mark and you must be working age (18-67)",
  },
];

const validateNested = createValidator(nestedValidations);
console.log(
  validateNested("work-age", {
    firstName: "Mark",
    age: "17",
  }),
);
// Wrong name
console.log(
  validateNested("work-age", {
    firstName: "Bob",
    age: "20",
  }),
);
// True
console.log(
  validateNested("work-age", {
    firstName: "Mark",
    age: "20",
  }),
);
