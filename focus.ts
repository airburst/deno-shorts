// Set focus for a grouped input list
const FRUITS_GROUPS = [
  {
    label: "A-L",
    options: [
      "Apple",
      "Apricot",
      "Avocado",
      "Banana",
      "Blackberry",
      "Blueberry",
      "Cantaloupe",
      "Cherry",
      "Clementine",
      "Coconut",
      "Cranberry",
      "Date",
      "Dragonfruit",
      "Durian",
      "Elderberry",
      "Fig",
      "Grape",
      "Grapefruit",
      "Guava",
      "Honeydew",
      "Jackfruit",
      "Kiwi",
      "Kumquat",
      "Lemon",
      "Lime",
      "Lychee",
    ],
  },
  {
    label: "M-Z",
    options: [
      "Mango",
      "Mulberry",
      "Nectarine",
      "Orange",
      "Papaya",
      "Passionfruit",
      "Peach",
      "Pear",
      "Persimmon",
      "Pineapple",
      "Plum",
      "Pomegranate",
      "Raspberry",
      "Redcurrant",
      "Starfruit",
      "Strawberry",
      "Tangerine",
      "Watermelon",
    ],
  },
];

// const focusMap = new Map<string, string>();

// FRUITS_GROUPS.flatMap(({options}, groupIndex) =>
//   options.flatMap((option, index) => {
//     focusMap.set(`${groupIndex}-${index}`, option);
//   }),
// );

const focusMap: boolean[] = [];

FRUITS_GROUPS.flatMap(({options}, groupIndex) =>
  options.flatMap((__, index) => focusMap.push(index === 0)),
);

console.log(focusMap);
