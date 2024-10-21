// fetchArtworks.js

// Function to load artworks from a JSON file
export const loadArtworks = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const artworks = await response.json();
        displayArtworks(artworks); // Call the display function to show artworks
    } catch (error) {
        console.error('Error fetching artworks:', error);
    }
};

// Function to display artworks in the specified container
const displayArtworks = (artworks) => {
    const artworksContainer = document.getElementById('artworksContainer'); // Select the container
    artworksContainer.innerHTML = ''; // Clear any existing content

    artworks.forEach(artwork => {
        // Create a card for each artwork
        const card = document.createElement('div');
        card.classList.add('artwork-card'); // Add a class for styling

        // Add content to the card
        card.innerHTML = `
            <img src="${artwork.url}" alt="${artwork.title}" loading="lazy" />
            <h3>${artwork.title}</h3>
            <p><strong>Artist:</strong> ${artwork.artist}</p>
            <p><strong>Year:</strong> ${artwork.year}</p>
            <p><strong>Medium:</strong> ${artwork.medium}</p>
            <p><strong>Dimensions:</strong> ${artwork.dimensions}</p>
            <p><strong>Description:</strong> ${artwork.description}</p>
            <p><strong>Price:</strong> ${artwork.price}</p>
            <p><strong>Category:</strong> ${artwork.category}</p>
            <p><strong>Tags:</strong> ${artwork.tags.join(', ')}</p>
        `;

        // Append the card to the artworks container
        artworksContainer.appendChild(card);
    });
};
