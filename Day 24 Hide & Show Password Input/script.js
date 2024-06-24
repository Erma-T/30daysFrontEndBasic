const input = document.querySelector("input");
const eye = document.querySelector("#eye-icon");

eye.addEventListener("click", () => {
  input.type === "password" ? 
    ((input.type = "text"),
    eye.classList.remove("fa-eye"),
    eye.classList.add("fa-eye-slash"))
    
    : ((input.type = "password"),
    eye.classList.remove("fa-eye-slash"),
    eye.classList.add("fa-eye"));
});