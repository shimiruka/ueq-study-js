const students = [
  {
    name: "Ken",
    score: 80,
    gender: "male",
  },
  {
    name: "Taro",
    score: 45,
    gender: "male",
  },
  {
    name: "Hana",
    score: 55,
    gender: "female",
  },
];

export const func1 = () => {
  return students.filter((x) => x.score >= 50).map((x) => x.name);
};

export const func2 = () => {
  return students
    .filter((x) => x.gender === "male")
    .reduce((a, b) => a + b.score, 0);
};
