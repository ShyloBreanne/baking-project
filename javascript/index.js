function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark-mode");
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);