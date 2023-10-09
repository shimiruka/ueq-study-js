// ループ・配列
export const func1 = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }
  return arr;
};

// 条件分岐・データ型
export const func2 = (n) => {
  if (typeof n !== "number") return "error";
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return `${n}`;
};
