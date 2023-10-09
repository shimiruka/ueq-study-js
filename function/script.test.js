import { test, expect } from "vitest";
import { func1, func2 } from "./script";

test("func1", () => {
  expect(func1()).toEqual(["Ken", "Hana"]);
});

test("func2", () => {
  expect(func2()).toEqual(125);
});
