// scripts/navToggle.js

export function toggleNavMenu(buttonId, navId) {
    const menuButton = document.getElementById(buttonId);
    const navList = document.getElementById(navId);

    menuButton.addEventListener("click", () => {
        navList.classList.toggle("show"); 
    });
}
