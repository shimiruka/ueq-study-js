import { describe, test, expect } from "vitest";
import { func1, func2, func3 } from "../../object/script";

describe("オブジェクトの問題1", () => {
  test("正しい結果が返ってきている", () => {
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
});

describe("オブジェクトの問題2", () => {
  test("正しい結果が返ってきている", () => {
    expect(func2()).toEqual(
      '{"firstName":"Ken","lastName":"Takahashi","age":29}'
    );
  });
});

describe("オブジェクトの問題3", () => {
  test("正しい結果が返ってきている", () => {
    expect(func3()).toEqual("Leanne Graham,Sincere@april.biz,Romaguera-Crona");
  });
});
