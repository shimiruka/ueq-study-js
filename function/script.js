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
  return students
    .filter((student) => student.score >= 50)
    .map((student) => student.name);
};

export const func2 = () => {
  return students
    .filter((student) => student.gender === "male")
    .reduce((acc, student) => acc + student.score, 0);
};
