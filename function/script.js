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

const a1 = students.filter((x) => x.score >= 50).map((x) => x.name);
console.log(a1);

const a2 = students
  .filter((x) => x.gender === "male")
  .reduce((a, b) => a + b.score, 0);
console.log(a2);
