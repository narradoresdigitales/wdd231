// scripts/main.js



import { toggleNavMenu } from './navToggle.js'; 
import { handleContactForm } from './handleContactForm.js'; 




document.addEventListener("DOMContentLoaded", () => {
    toggleNavMenu("myButton", "nav-links"); 
});


document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleContactForm); // Attach the event listener
});


