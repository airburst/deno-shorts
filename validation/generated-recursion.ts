function createValidator(validations) {
  return function validate(value) {
    return evaluateValidations(validations, value);
  };
}

function evaluateValidations(validations, value) {
  return validations.every((validation) => {
    if (Array.isArray(validation.rules)) {
      // Handle direct rules
      return evaluateComparitor(validation.type, validation.rules, value);
    } else {
      // Handle nested validations
      return evaluateValidations(validation.rules, value);
    }
  });
}

function evaluateComparitor(type, rules, value) {
  switch (type.toLowerCase()) {
    case "and":
      return rules.every((rule) => evaluateRule(rule, value));
    case "or":
      return rules.some((rule) => evaluateRule(rule, value));
    case "not":
      return !rules.some((rule) => evaluateRule(rule, value));
    default:
      throw new Error(`Unknown comparitor type: ${type}`);
  }
}

function evaluateRule(rule, value) {
  if (typeof rule === "function") {
    return rule(value);
  }
  return rule === value;
}

// Example usage:
// const isValidAge = createValidator([
//   {
//     type: 'and',
//     rules: [
//       value => value >= 18,
//       value => value <= 100
//     ]
//   }
// ]);
