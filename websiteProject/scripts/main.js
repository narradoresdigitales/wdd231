// scripts/main.js



import { toggleNavMenu } from './navToggle.js'; 
import { handleContactForm } from './handleContactForm.js'; 
import { displayLastUpdate } from './lastUpdate.js';



document.addEventListener("DOMContentLoaded", () => {
    toggleNavMenu("myButton", "nav-links"); 


   // Attach the event listener for the contact form
const contactForm = document.getElementById('contactForm');
   if (contactForm) { // Ensure the contact form exists before attaching the listener
        contactForm.addEventListener('submit', handleContactForm);
    }

    displayLastUpdate();  // Call to update the last modified date and current year
});