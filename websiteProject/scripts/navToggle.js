// scripts/navToggle.js

export function toggleNavMenu(buttonId, navId) {
    const menuButton = document.getElementById(myButton);
    const navList = document.getElementById(nav-links);

    menuButton.addEventListener("click", () => {
        navList.classList.toggle("show"); // Toggle the 'show' class
    });
}
