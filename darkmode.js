// function setTheme() {
//     const root = document.documentElement;
//     const newTheme = root.className === 'dark' ? 'light' : 'dark';
//     root.className = newTheme;

//     document.querySelector('.theme-name').textContent = newTheme;
// }

// document.querySelector('.theme-toggle').addEventListener('click', setTheme)

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function handleDarkModeChange(event) {
  if (event.matches) {
    // Dark mode is enabled
    console.log('Dark mode is enabled');
    // Add your dark mode specific logic here, e.g., add a class to the body
    document.body.classList.add('dark-mode');
  } else {
    // Dark mode is disabled (or not supported)
    console.log('Dark mode is disabled');
    // Add your light mode specific logic here, e.g., remove the dark mode class
    document.body.classList.remove('dark-mode');
  }
}

// Initial check
handleDarkModeChange(darkModeMediaQuery);

// Listen for changes
darkModeMediaQuery.addEventListener('change', handleDarkModeChange);

function myFunction() {
  var element = document.body;
  element.classList.toggle("light");
}