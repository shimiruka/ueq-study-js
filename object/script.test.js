import { test, expect } from "vitest";
import { func1, func2, func3 } from "./script";

test("func1", () => {
  expect(func1()).toMatchObject({
    firstName: "Ken",
    lastName: "Takahashi",
    age: 29,
    gender: "male",
    interests: [
      {
        name: "programming",
        emoji: "💻",
      },
      {
        name: "motorcycle",
        emoji: "🏍",
      },
    ],
  });
});

test("func2", () => {
  expect(func2()).toEqual(
    '{"firstName":"Ken","lastName":"Takahashi","age":29}'
  );
});

test("func3", () => {
  expect(func3()).toEqual("Leanne Graham,Sincere@april.bizRomaguera-Crona");
});
