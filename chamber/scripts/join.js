document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const timestampField = document.getElementById("timestamp");

    form.addEventListener("submit", function() {
        // Generate the current timestamp
        const now = new Date();
        const timestamp = now.toISOString(); // ISO format (YYYY-MM-DDTHH:MM:SSZ)

        // Set the timestamp value in the hidden input field
        timestampField.value = timestamp; // Set the hidden field's value
    });
});




// JavaScript for modal functionality
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modals when clicking outside of them
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
