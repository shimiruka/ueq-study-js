// ループ・配列・データ型の問題
export const func1 = (n) => {
  if (!Number.isInteger(n)) return [];
  if (n <= 0) return [];
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }
  return arr;
};

// 条件分岐・データ型の問題
export const func2 = (n) => {
  if (!Number.isInteger(n)) return "error";
  if (n <= 0) return "error";
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return `${n}`;
};
