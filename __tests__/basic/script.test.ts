import { describe, test, expect } from "vitest";
import { func1, func2 } from "../../basic/script";

describe("ループ・配列の問題", () => {
  test("func1", () => expect(func1(5)).toEqual([1, 2, 3, 4, 5]));
  test("func1", () => expect(func1(8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]));
  test("func1", () => expect(func1(-1)).toEqual([]));
});

describe("条件分岐・データ型の問題", () => {
  test("func2", () => expect(func2(1)).toEqual("1"));
  test("func2", () => expect(func2(3)).toEqual("Fizz"));
  test("func2", () => expect(func2(5)).toEqual("Buzz"));
  test("func2", () => expect(func2(15)).toEqual("FizzBuzz"));
  test("func2", () => expect(func2(22)).toEqual("22"));
  test("func2", () => expect(func2(30)).toEqual("FizzBuzz"));
  test("func2", () => expect(func2("hogehoge")).toEqual("error"));
});
