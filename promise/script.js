// 非同期処理
export const func1 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  return json;
};

// 直列で非同期処理
export const func2 = async () => {
  const todoIds = ["1", "2", "3", "4", "5"];
  for (let id of todoIds) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${encodeURIComponent(id)}`);
    const json = await response.json();
    console.log(json);
  }
};

// 並列で非同期処理
export const func3 = async () => {
  const todoIds = ["1", "2", "3", "4", "5"];
  const responses = await Promise.all(
    todoIds.map((id) => fetch(`https://jsonplaceholder.typicode.com/todos/${encodeURIComponent(id)}`))
  );
  const jsons = await Promise.all(responses.map((response) => response.json()));
  return jsons;
};
