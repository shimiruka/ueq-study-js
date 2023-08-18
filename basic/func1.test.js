import { test, expect } from "vitest";
import func1 from "./func1";

test("func1", () => {
  expect(func1(5)).toEqual([1, 2, 3, 4, 5]);
});

test("func1", () => {
  expect(func1(8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test("func1", () => {
  expect(func1(-1)).toEqual([]);
});
