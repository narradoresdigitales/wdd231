

// scripts/navToggle.js

export function toggleNavMenu(buttonId, navId) {
    const menuButton = document.getElementById(buttonId);
    const navList = document.querySelector(`.${navId}`);

    if (menuButton && navList) { // Check if elements exist
        menuButton.addEventListener("click", () => {
            navList.classList.toggle("show"); 
            console.log(navList.classList);
        });
    } else {
        console.error("Menu button or nav list not found.");
    }
}


