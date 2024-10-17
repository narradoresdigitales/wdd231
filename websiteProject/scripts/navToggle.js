

// scripts/navToggle.js

// scripts/navToggle.js

export function toggleNavMenu(buttonId, navId) {
    const menuButton = document.getElementById(buttonId);
    const navList = document.getElementById(navId);

    if (menuButton && navList) { // Check if elements exist
        menuButton.addEventListener("click", () => {
            navList.classList.toggle("show"); 
            console.log('Toggled show class:', navList.classList); // Log to verify class toggle
        });
    } else {
        console.error("Menu button or nav list not found.");
    }
}



