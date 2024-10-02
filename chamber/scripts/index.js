document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayEvents(); // Ensure the DOM is fully loaded before running this
});

// Fetch and display events
async function fetchAndDisplayEvents() {
    try {
        const response = await fetch('data/events.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const events = await response.json();
        displayFirstEvent(events);  // Display the first event when the page loads
        setupShowMoreButton(events);  // Setup the "Show More Events" button
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

// Display the first event in the 'events-list' div
function displayFirstEvent(events) {
    const eventsContainer = document.querySelector('.events-list');
    
    if (!eventsContainer) {
        console.error('Element with id "events" not found');
        return;  // Exit the function if the container is missing
    }

    const firstEvent = events[0];  // Grab the first event from the array
    const eventCard = createEventCard(firstEvent);
    eventsContainer.appendChild(eventCard);
}

// Create event card
function createEventCard(event) {
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');

    const eventTitle = document.createElement('h3');
    eventTitle.textContent = event.title;
    eventTitle.style.color = 'brown';
    eventTitle.style.fontWeight = 'bold';
    eventTitle.style.fontSize = '22px';

    const eventDate = document.createElement('p');
    eventDate.textContent = `Date: ${event.date}`;

    const eventDescription = document.createElement('p');
    eventDescription.textContent = event.description;
    eventDescription.style.fontStyle = 'italic';

    eventCard.appendChild(eventTitle);
    eventCard.appendChild(eventDate);
    eventCard.appendChild(eventDescription);

    return eventCard;
}

// Setup "Show More Events" button
function setupShowMoreButton(events) {
    let currentIndex = 1;  // Start after the first event
    const showMoreBtn = document.getElementById('more-events');
    const showLessBtn = document.getElementById('less-events');
    const eventsContainer = document.getElementById('events');

    showMoreBtn.addEventListener('click', () => {
        if (currentIndex < events.length) {
            const nextEvent = events[currentIndex];
            const eventCard = createEventCard(nextEvent);
            eventsContainer.appendChild(eventCard);
            currentIndex++;

            // If we've displayed all events, hide the "See More" button
            if (currentIndex >= events.length) {
                showMoreBtn.style.display = 'none';  
            }
            showLessBtn.style.display = 'inline-block'; // Show the "See Less" button
        }
    });

    showLessBtn.addEventListener('click', () => {
        // Hide all events after the first one
        while (eventsContainer.children.length > 1) {
            eventsContainer.removeChild(eventsContainer.lastChild);
        }
        currentIndex = 1; // Reset currentIndex to only display the first event
        showLessBtn.style.display = 'none'; // Hide the "See Less" button
        showMoreBtn.style.display = 'inline-block'; // Show the "See More" button
    });
}

// BUSINESS HIGHLIGHTS // 


let highlights = [];  // Array to store fetched highlights
let currentHighlightIndex = 0;  // Index to track the current highlight

document.addEventListener('DOMContentLoaded', () => {
    fetchBusinessHighlights();  // Fetch highlights when the DOM is loaded

    // Setup button click event
    const moreHighlightsBtn = document.getElementById('more-business-highlights');
    if (moreHighlightsBtn) {
        moreHighlightsBtn.addEventListener('click', displayNextHighlight);
    }
});

// Function to fetch business highlights
async function fetchBusinessHighlights() {
    try {
        const response = await fetch('data/business-highlights.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        highlights = await response.json();  // Store highlights in the array
        displayHighlight(highlights[currentHighlightIndex]);  // Display the first highlight
    } catch (error) {
        console.error('Error fetching highlights:', error);
    }
}

// Function to display a highlight
function displayHighlight(highlight) {
    const highlightContainer = document.getElementById('business-highlight');
    if (highlightContainer) {
        // Clear the previous content
        highlightContainer.innerHTML = ''; 

        // Create elements for the highlight
        const nameElement = document.createElement('h3');
        nameElement.textContent = highlight.name;
        nameElement.style.color = 'darkgreen'; // Styling the name
        nameElement.style.fontWeight = 'bold'; // Example additional styling
        nameElement.style.fontSize = '22px';

        //add image
        const imageElement = document.createElement('img');
        imageElement.src = highlight.image;
        imageElement.alt = highlight.name;
        imageElement.classList.add('icon');
        imageElement.style.width = '100px';
        imageElement.style.height = '100px';
        imageElement.loading = 'lazy';

        //add phone number
        const phoneElement = document.createElement('h2');
        phoneElement.textContent = highlight.phone;
        phoneElement.style.fontSize = '22px';

        //add website

        const websiteElement = document.createElement('h2');
        websiteElement.textContent = highlight.website;
        websiteElement.style.fontSize = '22px';

        //add membership level

        const membershipLevelElement = document.createElement('h2');
        membershipLevelElement.textContent = `Membership Level ${highlight.membershipLevel}`;
        membershipLevelElement.style.fontSize = '22px';


        //add highlight
        const highlightElement = document.createElement('p');
        highlightElement.textContent = highlight.highlight;
        highlightElement.style.fontSize = '22px';
        highlightElement.style.fontStyle = 'italic'; // Styling the highlight

        // Append the created elements to the highlight container
        highlightContainer.appendChild(imageElement);
        highlightContainer.appendChild(nameElement);
        highlightContainer.append(phoneElement);
        highlightContainer.appendChild(websiteElement);
        highlightContainer.appendChild(membershipLevelElement);
        highlightContainer.appendChild(highlightElement);
    } else {
        console.error('Highlight container not found');
    }
}


// Function to display the next highlight
function displayNextHighlight() {
    currentHighlightIndex++;
    
    // Check if we've reached the end of the highlights array
    if (currentHighlightIndex < highlights.length) {
        displayHighlight(highlights[currentHighlightIndex]);  // Display next highlight
    } else {
        currentHighlightIndex = 0;  // Reset index to loop back to the start
        displayHighlight(highlights[currentHighlightIndex]);  // Display the first highlight again
    }
}

// OpenWeatherMap API //

const API_KEY = 'c8abeb5e74b7a560b8f2dce0867293ee'; // Replace with your actual API key
const LAT = '-36.5'; // Latitude for La Pampa
const LON = '-64.3'; // Longitude for La Pampa

// Fetch current weather
async function fetchCurrentWeather() {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(weatherURL);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayCurrentWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


// Function to display current weather
function displayCurrentWeather(data) {
    const weatherContainer = document.getElementById('current-weather');
    if (data && data.main) {
        const iconCode = data.weather[0].icon; // Get the icon code
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // Construct the icon URL

        // Clear previous content
        weatherContainer.innerHTML = '';

        // Create elements for displaying weather information
        const weatherTitle = document.createElement('h3');
        weatherTitle.textContent = `${data.name} Current Weather`;
        weatherTitle.style.color = 'black'; // Title color
        weatherTitle.style.backgroundColor = '#f7e7ce';
        weatherTitle.style.borderRadius = '8px';
        weatherTitle.style.fontSize = '22px'; // Title font size
        weatherTitle.style.marginBottom = '10px'; // Space below the title
        weatherTitle.style.paddingLeft = '3px';
        weatherTitle.style.paddingRight = '3px';

        const weatherIcon = document.createElement('img');
        weatherIcon.src = iconUrl;
        weatherIcon.alt = data.weather[0].description;
        weatherIcon.style.width = '100px'; // Icon size
        weatherIcon.style.marginBottom = '10px'; // Space below the icon

        const roundedTemp = Math.round(data.main.temp);
        const weatherTemp = document.createElement('p');
        weatherTemp.textContent = `Temperature: ${roundedTemp} °C`;
        weatherTemp.style.color = 'blue'; // Temperature color
        weatherTemp.style.fontSize = '18px'; // Temperature font size

        const weatherDescription = document.createElement('p');
        weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
        weatherDescription.style.fontStyle = 'italic'; // Italic style for description
        weatherDescription.style.fontSize = '18px'; // Description font size

        // Append all elements to the weather container
        weatherContainer.appendChild(weatherTitle);
        weatherContainer.appendChild(weatherIcon);
        weatherContainer.appendChild(weatherTemp);
        weatherContainer.appendChild(weatherDescription);
    } else {
        weatherContainer.innerHTML = '<p>Error: Weather data not available.</p>';
    }
}


// Fetch 3-day forecast
async function fetchForecast() {
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(forecastURL);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayForecast(data);
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

// Function to display the 5-day forecast
function displayForecast(data) {
    const forecastContainer = document.getElementById('forecast-data');
    forecastContainer.innerHTML = ''; // Clear previous forecast data

    // Loop through the forecast data
    for (let i = 0; i < data.list.length; i += 8) { // Each day has data every 3 hours, so we take every 8th item
        const dayForecast = data.list[i];
        const iconCode = dayForecast.weather[0].icon; // Get the icon code
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // Construct the icon URL

    //Round the temperature
        const roundedTemp = Math.round(dayForecast.main.temp);
        
        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-card'); // Add a class for styling
        
        //Create the temperature element
        const tempElement =document.createElement('p');
        tempElement.textContent = `Temperature: ${roundedTemp} °C `;
        tempElement.style.color = 'blue';
        
        forecastCard.innerHTML = `
            <h4>${new Date(dayForecast.dt * 1000).toLocaleDateString()}</h4>
            <img src="${iconUrl}" alt="${dayForecast.weather[0].description}" />
            
            <p>Weather: ${dayForecast.weather[0].description}</p>
        `;

        forecastCard.insertBefore(tempElement, forecastCard.querySelector('p'));
        forecastContainer.appendChild(forecastCard);
    }
}

// Call the functions to fetch weather data
document.addEventListener('DOMContentLoaded', () => {
    fetchCurrentWeather();
    fetchForecast();
});
