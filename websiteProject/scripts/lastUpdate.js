// scripts/lastUpdate.js

// scripts/lastUpdate.js

export function displayLastUpdate() {
    const lastUpdateElement = document.getElementById("last-modified");
    const currentYearElement = document.getElementById("current-year");

    if (lastUpdateElement) {
        const lastModified = document.lastModified;
        lastUpdateElement.textContent = lastModified; // Display last modified date
    }

    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear; // Display current year
    }
}
