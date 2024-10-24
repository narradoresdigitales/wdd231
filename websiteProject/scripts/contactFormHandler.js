
export function handleContactFormSubmission(formId) {
    const form = document.getElementById(formId);

    if (!form) {
        console.error(`Form with ID ${formId} not found.`);
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Store data in localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('message', message);

        // Redirect to thank you page
        window.location.href = 'thankYou.html';
    });
}


