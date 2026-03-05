localStorage.getItem("theme");
localStorage.setItem("theme", newTheme);

const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

function calculateSettingAsThemeString({localStorageTheme, systemSettingDark}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}