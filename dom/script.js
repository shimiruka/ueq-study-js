export const main = () => {
  const link = document.querySelector("a");
  link.textContent = "REDIMPULZ";
  link.href = "https://redimpulz.com/";

  const section = document.querySelector("section");
  const p = document.createElement("p");
  p.textContent = "We hope you enjoy JavaScript.";
  section.appendChild(p);
  p.setAttribute("class", "highlight");

  const temp = document.querySelector("#temp");
  section.removeChild(temp);
};

window.addEventListener("load", main);
