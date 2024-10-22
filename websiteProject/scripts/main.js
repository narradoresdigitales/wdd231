// scripts/main.js

import { toggleNavMenu } from './navToggle.js'; 
import { handleContactForm } from './handleContactForm.js'; 
import { displayLastUpdate } from './lastUpdate.js';
import { loadArtworks } from './fetchArtworks.js';
import { loadMetArtworks } from './fetchMetArt.js';


// Attach the event listener for the nav button
document.addEventListener("DOMContentLoaded", async () => {
    // Nav menu toggle
    toggleNavMenu("myButton", "nav-links"); 

    
    
  
// Fetch and display artworks from the JSON file for myGallery
const init = async () => {
    try {
        const artworksUrl = './data/artworks.json'; // Path to your JSON file
        await loadArtworks(artworksUrl); // Call the loadArtworks function and pass the JSON file URL
    } catch (error) {
        console.error('Error initializing artworks:', error);
    }
};

init(); // Call the init function to start the process

// Load Met Museum artworks when the page loads

    loadMetArtworks('landscape', 10); // Example query: fetch 10 landscape artworks




    
    // Attach the event listener for the contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) { // Ensure the contact form exists before attaching the listener
        contactForm.addEventListener('submit', handleContactForm);
    }


    // Call to update the last modified date and current year
    displayLastUpdate();
});
