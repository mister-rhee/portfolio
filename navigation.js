// function openNav() {
//     document.getElementById("nav-menu").style.width = "100%";
// }

// function closeNav() {
//     document.getElementById("nav-menu").style.width = "0%";
// }

var navOpenStatus = false;

function toggleIcon(x) {
    x.classList.toggle("change");
}

function toggleNav(x) {
    if (navOpenStatus) {
        document.getElementById("nav-menu").style.width = "0%";
    } else {
        document.getElementById("nav-menu").style.width = "100%";
    }
    toggleIcon(x);
    navOpenStatus = !navOpenStatus;
}