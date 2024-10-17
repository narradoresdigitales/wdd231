// scripts/fetchArtworks.js



// Function to fetch artworks from the JSON file
export const fetchArtworks = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};

// Function to display artworks on the page
export const displayArtworks = (artworks) => {
    const artworksContainer = document.getElementById('artworksContainer');
    if (!artworksContainer) return;

    artworksContainer.innerHTML = ''; // Clear the container before displaying artworks

    artworks.forEach(artwork => {
        const artworkElement = document.createElement('div');
        artworkElement.classList.add('artwork');

        artworkElement.innerHTML = `
            <h3>${artwork.title}</h3>
            <p>Artist: ${artwork.artist}</p>
            <p>Year: ${artwork.year}</p>
            <p>Medium: ${artwork.medium}</p>
            <img src="${artwork.url}" alt="${artwork.title}">
            <p>${artwork.description}</p>
            <p>Price: ${artwork.price}</p>
            <p>Category: ${artwork.category}</p>
            <p>Tags: ${artwork.tags.join(', ')}</p>
        `;

        artworksContainer.appendChild(artworkElement);
    });
};

// Function to load and display artworks
export const loadArtworks = async (url) => {
    try {
        const artworks = await fetchArtworks(url);
        displayArtworks(artworks);
    } catch (error) {
        console.error('Error fetching artworks:', error);
    }
};
