const input = document.querySelector("input");
const eye = document.querySelector("#eye-icon");

eye.addEventListener("click", () => {
  input.type === "password" ? (input.type = "text") : (input.type = "password");
});