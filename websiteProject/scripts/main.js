// scripts/main.js

import { toggleNavMenu } from './navToggle.js'; 
import { displayLastUpdate } from './lastUpdate.js';
import { loadArtworks } from './fetchArtworks.js';
import { loadMetArtworks } from './fetchMetArt.js';


// Attach the event listener for the nav button
document.addEventListener("DOMContentLoaded", async () => {
    // Nav menu toggle
    toggleNavMenu("myButton", "nav-links"); 


    // Add this at the end of the DOMContentLoaded function
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', (event) => {
        console.log(`Navigating to: ${link.href}`);
    });
});



// Fetch and display artworks from the JSON file for myGallery
const init = async () => {
    try {
        const artworksUrl = './data/artworks.json'; // Path to your JSON file
        await loadArtworks(artworksUrl); // Call the loadArtworks function and pass the JSON file URL
    } catch (error) {
        console.error('Error initializing artworks:', error);
    }
};

init(); 






// Load Met Museum artworks when the page loads
loadMetArtworks('van Gogh',  20); 








    // Call to update the last modified date and current year
    displayLastUpdate();
});
