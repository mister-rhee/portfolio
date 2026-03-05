/* Utility functions */

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "Change to light theme" : "Change to dark theme";
  buttonEl.setAttribute("aria-label", newCta);
  updateButtonIcon(isDark);
}

function updateButtonIcon(isDark) {
  if (isDark) {
    buttonIcon.classList.remove('fa-sun');
    buttonIcon.classList.add('fa-moon');
  } else {
    buttonIcon.classList.remove('fa-moon');
    buttonIcon.classList.add('fa-sun');
  }
}

/* On page load */

const button = document.querySelector("#theme-toggle-button");
const buttonIcon = document.querySelector('#theme-toggle-button i');
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

button.addEventListener("click", () => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  currentThemeSetting = newTheme;
  updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
  updateThemeOnHtmlEl({ theme: currentThemeSetting });
});

// Credit: https://dev.to/whitep4nth3r/the-best-lightdark-mode-theme-toggle-in-javascript-368f