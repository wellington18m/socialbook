const settingsMenu = document.querySelector(".settings-menu");
const darkBtn = document.querySelector("#dark-btn");
const body = document.querySelector("body");

function settingMenuToggle() {
  settingsMenu.classList.toggle("dispay-settings-menu");
}

function darkModeToggle() {
  darkBtn.classList.toggle("dark-mode");

  if (darkBtn.classList.contains("dark-mode")) {
    localStorage.setItem("currentTheme", "dark");
    body.classList.add("dark-theme");
  } else {
    localStorage.setItem("currentTheme", "light");
    body.classList.remove("dark-theme");
  }
}

function getLastTheme() {
  var currentTheme = localStorage.getItem("currentTheme");

  switch (currentTheme) {
    case "dark":
      body.classList.add("dark-theme");
      darkBtn.classList.add("dark-mode");

      break;
    case "light":
      body.classList.remove("dark-theme");
      darkBtn.classList.remove("dark-mode");
      break;
    default:
      body.classList.remove("dark-theme");
      darkBtn.classList.remove("dark-mode");

      break;
  }
}
getLastTheme();
