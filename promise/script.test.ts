import { test, expect, vi } from "vitest";
import { func1, func2, func3 } from "./script";

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

test("func1", async () => {
  const json = await func1();
  expect(json).toMatchObject(results[0]);
});

test("func2", async () => {
  const spy = vi
    .spyOn(global.console, "log")
    .mockImplementation((args) => args);
  await func2();
  for (const result of results) {
    expect(spy).toHaveReturnedWith(result);
  }
});

test("func3", async () => {
  const json = await func3();
  expect(json).toMatchObject(results);
});
