// scripts/main.js

import { toggleNavMenu } from './navToggle.js'; 
import { handleContactForm } from './handleContactForm.js'; 
import { displayLastUpdate } from './lastUpdate.js';
import { loadArtworks } from './fetchArtworks.js';


// Attach the event listener for the nav button
document.addEventListener("DOMContentLoaded", async () => {
    // Nav menu toggle
    toggleNavMenu("myButton", "nav-links"); 

    await loadArtworks('./data/artworks.json'); // Adjust the path as necessary


    // Attach the event listener for the contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) { // Ensure the contact form exists before attaching the listener
        contactForm.addEventListener('submit', handleContactForm);
    }


    // Call to update the last modified date and current year
    displayLastUpdate();
});
