// 条件分岐・データ型
const func2 = (n) => {
  if (typeof n !== "number") return "error";
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return `${n}`;
};

export default func2;
