import {data} from "./fixture.ts";
import {data as response} from "./questions-response.ts";

type Question = {
  name: string;
  visibility: boolean;
  required: boolean;
};

const sections = data.layout.components.filter(
  (component) => component.metadata.name === "questionnaire",
)[0].props.sections;

const resSections = response.layout.components.filter(
  (component) => component.metadata.name === "questionnaire",
)[0].props.sections;

const getVisibility = (sections) =>
  sections
    .flatMap(({questions}) =>
      questions.flatMap((q) => ({
        [q.name]: q.visibility ?? false,
      })),
    )
    .reduce((acc, q) => ({...acc, ...q}), {});

// ANSWERS
// const answers = {};

const setAnswer = (name, value) => {
  answers[name] = value;
};

// VALIDATION
const getValidationState = (sections) =>
  sections
    .map(({questions}) =>
      questions.flatMap((q) => ({
        name: q.name,
        valid: isValid(q, answers),
      })),
    )
    .reduce(
      (acc, section) => [
        ...acc,
        section.reduce((prev, q) => prev && q.valid, true),
      ],
      [],
    );

// TODO: Evaluate rules
const isValid = (question: Question, answers: Record<string, string>) => {
  if (!question.visibility) return true;

  return question.required ? !!answers[question.name] : true;
};

// DEBUG
// console.log("🚀 ~ sections:", getVisibility(sections));
// console.log("🚀 ~ validation:", getValidationState(sections));
// setAnswer("Landlord type", "residential");
// console.log("🚀 ~ validation:", getValidationState(sections));

// Validate current section
// const validateSection = (section) =>
//   section.questions.reduce((prev, q) => prev && isValid(q, answers), true);

// const currentSection = sections?.[0];
// console.log(validateSection(currentSection));

// setAnswer("Landlord type", "residential");
// console.log(validateSection(currentSection));

// const mapToArray = (object: Record<string, string | string[]>) =>
//   Object.entries(object).map(([name, answer]) => ({name, answer}));

// console.log(
//   mapToArray({"Landlord type": "residential", "Landlord name": "John Doe"}),
// );

const getNames = (sections) =>
  sections.map(({questions}) =>
    questions.flatMap((q) => ({
      name: q.name,
      // valid: isValid(q, answers),
    })),
  );
// .reduce(
//   (acc, section) => [
//     ...acc,
//     section.reduce((prev, q) => prev && q.valid, true),
//   ],
//   [],
// );

const isVisible = (question) => question.visible ?? false;

const getVisible = (sections) =>
  sections.map(({questions}) => questions.some(isVisible));

const visMap = getVisible(sections);
// console.log("🚀 ~ visMap:", visMap);

const getNextVisibleSection = (currentIndex, visMap) => {
  const nextIndex = visMap.indexOf(true, currentIndex + 1);
  return nextIndex === -1 ? currentIndex : nextIndex;
};

// console.log(getNextVisibleSection(0, visMap));
// console.log(getNextVisibleSection(1, visMap));
// console.log(getNextVisibleSection(2, visMap));
// console.log(getNextVisibleSection(3, visMap));
// console.log(getNextVisibleSection(4, visMap));
// console.log(getNextVisibleSection(5, visMap));
// console.log(getNextVisibleSection(6, visMap));
// console.log(getNextVisibleSection(7, visMap));
// console.log(getNextVisibleSection(8, visMap));
// console.log(getNextVisibleSection(9, visMap));
// console.log(getNextVisibleSection(10, visMap));
// console.log(getNextVisibleSection(11, visMap));
// console.log(getNextVisibleSection(12, visMap));
// console.log(getNextVisibleSection(13, visMap));
// console.log(getNextVisibleSection(14, visMap));

// const getPreviousVisibleSection = (currentIndex, visMap) => {
//   const prevIndex = visMap.lastIndexOf(true, currentIndex - 1);
//   return prevIndex > currentIndex ? currentIndex : prevIndex;
// };
// console.log("PREVIOUS");

// console.log(getPreviousVisibleSection(14, visMap));
// console.log(getPreviousVisibleSection(13, visMap));
// console.log(getPreviousVisibleSection(12, visMap));
// console.log(getPreviousVisibleSection(11, visMap));
// console.log(getPreviousVisibleSection(10, visMap));
// console.log(getPreviousVisibleSection(9, visMap));
// console.log(getPreviousVisibleSection(8, visMap));
// console.log(getPreviousVisibleSection(7, visMap));
// console.log(getPreviousVisibleSection(6, visMap));
// console.log(getPreviousVisibleSection(5, visMap));
// console.log(getPreviousVisibleSection(4, visMap));
// console.log(getPreviousVisibleSection(3, visMap));
// console.log(getPreviousVisibleSection(2, visMap));
// console.log(getPreviousVisibleSection(1, visMap));
// console.log(getPreviousVisibleSection(0, visMap));

// console.log(sections?.[15]?.questions.map((q) => q.presentationGroup));
const groups = Array.from(
  new Set(sections?.[15]?.questions.map(({presentationGroup: g}) => g)),
);
// console.log("🚀 ~ groups:", groups);

const assumptions = sections?.[15]?.questions;

const answers = {
  "UK address lookup": "10 Tawney Close, Corsham, SN13 9XE",
  "Property type": "individual flat - in converted building or house",
  "Number of bedrooms online": "3",
  "Number of bathrooms online": "2",
};

// Contents for each group
const content = (assumptions || [])
  .filter(({presentationGroup: g}) => g === "About your property")
  .map(({name, presentationText, helpInfo}) => {
    const text = presentationText.replace(
      "${answer}",
      `<strong>${answers[name]}</strong>`,
    );

    return {
      name,
      text,
      helpInfo,
    };
  });

console.log("🚀 ~ content:", content);

// Text parsing
const html =
  " <b>I agree</b> that the property: <ul> <li>doesn't have a history - or show signs of - subsidence, landslip, or ground heave</li> <li>isn't built on low lying land that has previously been filled or raised (known as 'made up ground')</li> <li>isn't above underground workings (for example, tunnelling or mining)</li> </ul> ";

// Convert HTML into Text and List elements
const parseHtml = (html) => {
  // Strip out tags and exclude any text between <ul></ul>
  const text = html
    .replace(/<ul>.*?<\/ul>/s, "")
    .replace(/<b>/g, "")
    .replace(/<\/b>/g, "")
    .trim();
  // Extract list
  const listItems =
    html
      .match(/<li>(.*?)<\/li>/g)
      ?.map((item) => item.replace(/<\/?li>/g, "").trim()) || [];

  return {
    text,
    listItems,
  };
};

console.log(parseHtml(html));
