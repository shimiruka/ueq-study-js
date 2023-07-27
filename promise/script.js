// 非同期処理
const func1 = async () => {
  console.log("start");
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await res.json();
  console.log(json);
  console.log("finish");
};

// 直列で非同期処理
const func2 = async () => {
  const ids = [1, 2, 3, 4, 5];
  for (const id of ids) {
    console.log(`start ${id}`);
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const json = await res.json();
    console.log(json);
    console.log(`finish ${id}`);
  }
};

// 並列で非同期処理
const func3 = async () => {
  const ids = [1, 2, 3, 4, 5];
  const fetches = ids.map((id) =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
      res.json()
    )
  );
  console.log("start");
  const jsons = await Promise.all(fetches);
  console.log(jsons);
  console.log("finish");
};

func1();
func2();
func3();
