// contactStorage.js

// Function to save contact form data to localStorage
export function saveContactData(name, email, message) {
    localStorage.setItem('contactName', name);
    localStorage.setItem('contactEmail', email);
    localStorage.setItem('contactMessage', message);
}

// Function to retrieve contact data from localStorage
export function getContactData() {
    const name = localStorage.getItem('contactName') || '';
    const email = localStorage.getItem('contactEmail') || '';
    const message = localStorage.getItem('contactMessage') || '';
    
    return { name, email, message };
}

// Function to clear contact data from localStorage
export function clearContactData() {
    localStorage.removeItem('contactName');
    localStorage.removeItem('contactEmail');
    localStorage.removeItem('contactMessage');
}
