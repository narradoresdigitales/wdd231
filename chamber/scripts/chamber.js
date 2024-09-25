const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');

});



/* Get members*/

const membersContainer = document.getElementById('members-container');
const toggleButton = document.getElementById('toggle-view');
let isGridView = true; // Initial view is grid

async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

function displayMembers(members) {
    membersContainer.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = isGridView ? 'member-card' : 'member-list-item';
        
        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" />
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p>Membership Level: ${member.membershipLevel}</p>
            <p>${member.info}</p>
        `;
        
        membersContainer.appendChild(memberCard);
    });
}

toggleButton.addEventListener('click', () => {
    isGridView = !isGridView; // Toggle the view
    fetchMembers(); // Re-fetch members to apply the new view
});

fetchMembers(); // Initial fetch


// Set current year and last modified date
const currentYearSpan = document.getElementById('current-year');
const lastModifiedSpan = document.getElementById('last-modified');

currentYearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified; // Gets the last modified date of the document


