// scripts/fetchArtworks.js

export async function fetchArtworks(jsonPath) {
    try {
        const response = await fetch(jsonPath);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const artworks = await response.json();
        return artworks;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
