// Function to fetch events from the events.json file
async function fetchAndDisplayEvents() {
    try {
        const response = await fetch('data/events.json'); // Update the path to your JSON file
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

// Display the first event
function displayFirstEvent(events) {
    const eventsContainer = document.getElementById('events');
    const firstEvent = events[0];  // Grab the first event from the array

    const eventCard = createEventCard(firstEvent);
    eventsContainer.appendChild(eventCard);
}

// Create event card (for both initial and additional events)
function createEventCard(event) {
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');  // Add your styling class

    const eventTitle = document.createElement('h3');
    eventTitle.textContent = event.title;

    const eventDate = document.createElement('p');
    eventDate.textContent = `Date: ${event.date}`;

    const eventDescription = document.createElement('p');
    eventDescription.text
