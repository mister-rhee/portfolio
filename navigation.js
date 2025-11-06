// function openNav() {
//     document.getElementById("nav-menu").style.width = "100%";
// }

// function closeNav() {
//     document.getElementById("nav-menu").style.width = "0%";
// }

var navOpenStatus = false;

function toggleNav() {
    if (navOpenStatus) {
        document.getElementById("nav-menu").style.width = "0%";
    } else {
        document.getElementById("nav-menu").style.width = "100%";
    }
    navOpenStatus = !navOpenStatus;
}