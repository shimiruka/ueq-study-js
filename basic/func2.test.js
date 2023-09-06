import { test, expect } from "vitest";
import func2 from "./func2";

test("func2", () => {
  expect(func2(1)).toEqual("1");
});

test("func2", () => {
  expect(func2(3)).toEqual("Fizz");
});

test("func2", () => {
  expect(func2(5)).toEqual("Buzz");
});

test("func2", () => {
  expect(func2(15)).toEqual("FizzBuzz");
});

test("func2", () => {
  expect(func2(22)).toEqual("22");
});

test("func2", () => {
  expect(func2(30)).toEqual("FizzBuzz");
});

test("func2", () => {
  expect(func2("hogehoge")).toEqual("error");
});
