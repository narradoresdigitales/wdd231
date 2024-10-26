// fetchMetArt.js


// STEP 1 Function to fetch and display artwork details by objectID from the Met Museum API //

const fetchMetArtworkById = async (objectID) => {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`;
    
    try {
        const response = await fetch(url);
        const artwork = await response.json();
        
        displayMetArtwork(artwork); // I previously targeted this element
    } catch (error) {
        console.error(`Error fetching artwork with objectID ${objectID}:`, error);
    }
};


// STEP 2 Function to load artworks from the Met Museum API
export const loadMetArtworks = async (query = 'landscape', limit = 20) => {
    const searchUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}&hasImages=true`;
    
    try {
        const response = await fetch(searchUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.objectIDs) {

// STEP 3 Fetch and display artworks using objectIDs

            const objectIDs = data.objectIDs.slice(0, limit);
            for (const objectID of objectIDs) {
                await fetchMetArtworkById(objectID);
            }
        } else {
            console.error('No artworks found for the query.');
        }
    } catch (error) {
        console.error('Error fetching Met artworks:', error);
    }
};

// STEP 4 Function to display Met artworks in the specified container
const displayMetArtwork = (artwork) => {
    const artworksContainer = document.getElementById('metArtworksContainer'); // Select the Met artworks container



// STEP 5 Create a card for each artwork
    const card = document.createElement('div');
    card.classList.add('artwork-card'); // Add a class for styling



// STEP 6 Add content to the card
    card.innerHTML = `
        <img src="${artwork.primaryImage}" alt="${artwork.title}" loading="lazy" />
        <h3>${artwork.title}</h3>
        <p><strong>Artist:</strong> ${artwork.artistDisplayName || 'Unknown'}</p>
        <p><strong>Year:</strong> ${artwork.objectDate || 'Unknown'}</p>
        <p><strong>Medium:</strong> ${artwork.medium || 'Unknown'}</p>
        <p><strong>Dimensions:</strong> ${artwork.dimensions || 'Unknown'}</p>
        <p><strong>Credit Line:</strong> ${artwork.creditLine || 'Unknown'}</p>
    `;

    // STEP 7 Append the card to the Met artworks container
    artworksContainer.appendChild(card);
};
