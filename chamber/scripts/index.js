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
        setupShowMoreButton(events);  // Setup the "See More Events" button
        setupShowLessButton();          // Setup the "See Less Events" button
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

    const eventDate = document.createElement('p');
    eventDate.textContent = `Date: ${event.date}`;

    const eventDescription = document.createElement('p');
    eventDescription.textContent = event.description;

    eventCard.appendChild(eventTitle);
    eventCard.appendChild(eventDate);
    eventCard.appendChild(eventDescription);

    return eventCard;
}

// Setup "Show More Events" button
function setupShowMoreButton(events) {
    const showMoreBtn = document.getElementById('more-events');
    const eventsContainer = document.getElementById('events'); 
    let isExpanded = false;  // Track if the events are currently expanded

    showMoreBtn.addEventListener('click', () => {
        if (!isExpanded) {
            // Show all remaining events
            for (let i = 1; i < events.length; i++) {  // Start from the second event
                const eventCard = createEventCard(events[i]);
                eventsContainer.appendChild(eventCard);
            }
            showMoreBtn.style.display = 'none';  // Hide the "See More" button
            document.getElementById('less-events').style.display = 'block';  // Show "See Less" button
            isExpanded = true;  // Set to true as events are now expanded
        }
    });
}

// Setup "Show Less Events" button
function setupShowLessButton() {
    const showLessBtn = document.getElementById('less-events');
    const eventsContainer = document.getElementById('events');

    showLessBtn.addEventListener('click', () => {
        // Clear all event cards except for the first one
        while (eventsContainer.children.length > 1) {
            eventsContainer.removeChild(eventsContainer.lastChild);
        }
        
        // Hide "See Less" button and show "See More" button
        showLessBtn.style.display = 'none';  // Hide the "See Less" button
        document.getElementById('more-events').style.display = 'block';  // Show "See More" button
    });
}
