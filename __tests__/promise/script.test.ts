import { describe, test, expect, vi } from "vitest";
import { func1, func2, func3 } from "../../promise/script";

const results = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
];

describe("非同期処理の問題", () => {
  test("正しい値が取得できている", async () => {
    const json = await func1();
    expect(json).toMatchObject(results[0]);
  });
});

describe("非同期処理の問題 - 直列処理", () => {
  test("正しい順番で実行できている", async () => {
    const spy = vi
      .spyOn(global.console, "log")
      .mockImplementation((args) => args);
    await func2();
    for (const result of results) {
      expect(spy).toHaveReturnedWith(result);
    }
  });
});

describe("非同期処理の問題 - 並列処理", () => {
  test("正しい値が取得できている", async () => {
    const json = await func3();
    expect(json).toMatchObject(results);
  });
  test("Promise.allが使われている", async () => {
    const spy = vi.spyOn(Promise, "all");
    await func3();
    expect(spy).toHaveBeenCalled();
  });
});
