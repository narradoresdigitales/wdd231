
// scripts/handleContactForm.js

export function handleContactForm(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Handle the form submission logic here

    // Redirect to thank you page
    window.location.href = 'thankyou.html'; // Navigate to thank you page
}

