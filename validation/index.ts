import {RuleSet} from "./types.ts";
import {createValidator} from "./validate.ts";

const validations: RuleSet[] = [
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

const validate = createValidator(validations);

// Example validation using compiled rules
const goodAnswers = {
  fixtures_and_fittings_or_main_building_cover_selected: "None",
  contents_cover_selected: "no",
};
const badAnswers = {
  fixtures_and_fittings_or_main_building_cover_selected: "None",
  contents_cover_selected: "yes",
};

console.log(validate("public_liability", goodAnswers));
console.log(validate("public_liability", badAnswers));
