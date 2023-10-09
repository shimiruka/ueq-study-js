// 非同期処理
export const func1 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await res.json();
  return json;
};

// 直列で非同期処理
export const func2 = async () => {
  const ids = [1, 2, 3, 4, 5];
  for (const id of ids) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const json = await res.json();
    console.log(json);
  }
};

// 並列で非同期処理
export const func3 = async () => {
  const ids = [1, 2, 3, 4, 5];
  const fetches = ids.map((id) =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
      res.json()
    )
  );
  const jsons = await Promise.all(fetches);
  return jsons;
};
