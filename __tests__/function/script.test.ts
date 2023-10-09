import { describe, test, expect } from "vitest";
import { func1, func2 } from "../../function/script";

describe("関数型プログラミングの問題1", () => {
  test("正しい結果が返ってきている", () => {
    expect(func1()).toEqual(["Ken", "Hana"]);
  });
});

describe("関数型プログラミングの問題2", () => {
  test("正しい結果が返ってきている", () => {
    expect(func2()).toEqual(125);
  });
});
