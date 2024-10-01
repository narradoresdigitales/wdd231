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
