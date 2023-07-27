// ループ・配列
const func1 = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }
  return arr;
};

console.log(func1(10));

// 条件分岐・データ型
const func2 = (n) => {
  if (typeof n !== "number") return "error";
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return `${n}`;
};

console.log(func2(1));
console.log(func2(3));
console.log(func2(5));
console.log(func2(15));
console.log(func2(25));
console.log(func2(30));
console.log(func2("hogehoge"));
