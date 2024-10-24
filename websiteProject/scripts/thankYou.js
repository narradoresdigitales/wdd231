export function displayUserData() {
    // Retrieve data from localStorage
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const message = localStorage.getItem('message');

    // Check if the data exists
    if (name && email && message) {
        // Insert the data into the HTML
        document.getElementById('user-name').textContent = name;
        document.getElementById('user-email').textContent = email;
        document.getElementById('user-message').textContent = message;
    } else {
        console.error('No data found in localStorage.');
    }
}

