// scripts/main.js

import { toggleNavMenu } from './navToggle.js'; 
import { handleContactForm } from './handleContactForm.js'; 
import { displayLastUpdate } from './lastUpdate.js';
import { loadArtworks } from './fetchArtworks.js';
import { loadMetArtworks } from './fetchMetArt.js';
import { saveContactData } from './contactStorage.js';
import { getContactData } from './contactStorage.js';

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

init(); 

// Load Met Museum artworks when the page loads
    loadMetArtworks('van Gogh',  20); 


// Select the contact form element
const contactForm = document.getElementById('contactForm');

// Check if the contact form exists on the page
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Retrieve the user's input from the form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Save the form data to localStorage
        saveContactData(name, email, message);

        // Redirect to the thank you page
        window.location.href = 'thankYou.html';
    });
}

//Dynamic display of form data

const { name, email, message } = getContactData();

// Check if data is available
if (name && email && message) {
    // Create a thank you message using template literals
    const thankYouMessage = `
    <div class="thank-you-message">
        <h2>Thank You, ${name}!</h2>
        <p>We have received your message and will get back to you shortly.</p>
        <p><strong>Your Message:</strong> ${message}</p>
        <p>If we need further information, we will contact you at: <strong>${email}</strong></p>
        <a href="index.html" class="about-me-button">Back to Home</a>
    </div>
    `;

    // Inject the thank you message into the DOM
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = thankYouMessage;
} else {
    // Fallback if no data found in localStorage
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = `<p>There was an error retrieving your information.</p>`;
}




    // Call to update the last modified date and current year
    displayLastUpdate();
});
