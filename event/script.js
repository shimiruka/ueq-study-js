export const main = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = document.querySelector("#title");
    const content = document.querySelector("#content");

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title.value,
        content: content.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await res.json();

    const result1 = document.querySelector("#result-id");
    result1.textContent = `created post ID is ${json.id}`;
    const result2 = document.querySelector("#result-title");
    result2.textContent = `created post title is ${json.title}`;
    const result3 = document.querySelector("#result-content");
    result3.textContent = `created post content is ${json.content}`;
  };

  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
};

window.addEventListener("load", main);
