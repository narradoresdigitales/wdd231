 // Lazy load images when user scrolls
document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.add("loaded");
                observer.unobserve(lazyImage);
            }
        });
    });

    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
});

// Local Storage


// Function to get the current date
function getCurrentDate() {
    return new Date();
}

// Function to format the message based on the last visit
function updateVisitMessage() {
    const visitMessageElement = document.getElementById('visit-message');
    const lastVisitDate = localStorage.getItem('lastVisitDate');
    const currentDate = getCurrentDate();

    if (!lastVisitDate) {
        // First visit
        visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisit = new Date(lastVisitDate);
        const timeDifference = currentDate - lastVisit; // Time difference in milliseconds
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days

        if (daysDifference < 1) {
            // Less than a day
            visitMessageElement.textContent = "Back so soon! Awesome!";
        } else {
            // More than a day
            const dayText = daysDifference === 1 ? "day" : "days";
            visitMessageElement.textContent = `You last visited ${daysDifference} ${dayText} ago.`;
        }
    }

    // Update the last visit date in localStorage
    localStorage.setItem('lastVisitDate', currentDate);
}

// Call the function when the page loads
updateVisitMessage();
