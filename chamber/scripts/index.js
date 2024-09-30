// Fetch and display events from the events.JSON file

fetch('../data/index.json')
    .then(response => response.json())
    .then(data => {
        const eventsContainer = document.getElementById('events');
        data.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event-card'); // Add a class for styling

            eventElement.innerHTML = `
                <h4>${event.title}</h4>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
            `;

            eventsContainer.appendChild(eventElement);
        });
    })
    .catch(error => console.error('Error loading events:', error));