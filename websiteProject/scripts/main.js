// scripts/main.js



import { toggleNavMenu } from './navToggle.js'; 
import { handleContactForm } from './handleContactForm.js'; 
import { displayLastUpdate } from './lastUpdate.js';



document.addEventListener("DOMContentLoaded", () => {
    toggleNavMenu("myButton", "nav-links"); 
});


document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleContactForm); // Attach the event listener
});


document.addEventListener("DOMContentLoaded", () => {
    toggleNavMenu("myButton", "nav-links"); 
    displayLastUpdate();  // Call to update the last modified date and current year
});