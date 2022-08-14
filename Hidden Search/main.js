const serach = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  serach.classList.toggle("active");
  input.focus();
});
