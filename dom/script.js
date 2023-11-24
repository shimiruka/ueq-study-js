export const main = () => {
  const link = document.querySelector("a");
  link.textContent = "REDIMPULZ";
  link.href = "https://redimpulz.com/";

  const sect = document.querySelector("section");
  const para = document.createElement("p");
  para.textContent = "We hope you enjoy JavaScript.";
  para.classList.add("highlight");
  sect.appendChild(para);

  const temp = sect.querySelector("#temp");
  sect.removeChild(temp);
};

window.addEventListener("load", main);
