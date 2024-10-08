// myButton
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateMe');
const membersContainer = document.getElementById('members-container');
const toggleButton = document.getElementById('toggle-view');
let isGridView = true; // Initial view is grid

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

// Function to fetch members from the JSON file
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json'); // Update the path to your JSON file
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

// Function to display members
function displayMembers(members) {
    const memberContainer = document.getElementById('members-container');

    // Clear previous members (if any)
    memberContainer.innerHTML = '';

    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('member');

        // Create image element
        const img = document.createElement('img');
        img.src = member.image; // Ensure this path is correct
        img.alt = member.name;
        img.classList.add('icon'); // Add a class for styling
        img.style.width = '100px'; // Set the image width
        img.style.height = '100px'; // Set the image height
        img.loading = 'lazy'; // Lazy load the images

        // Create other member details
        const name = document.createElement('h3');
        name.textContent = member.name;
        name.style.fontWeight = 'bold';

        const address = document.createElement('p');
        address.innerHTML = member.address.replace(/\n/g, '<br>');
        

        const phone = document.createElement('p');
        phone.textContent = member.phone;

        const website = document.createElement('p');
        website.textContent = member.website;
        website.style.textDecoration = 'underline';

        const membership = document.createElement('p');
        membership.textContent = `Membership Level: ${member.membershipLevel}`;
        membership.style.fontStyle = 'italic';

        // Append elements to memberDiv
        memberDiv.appendChild(img);
        memberDiv.appendChild(name);
        memberDiv.appendChild(address);
        memberDiv.appendChild(phone);
        memberDiv.appendChild(website);
        memberDiv.appendChild(membership);

        // Append memberDiv to the container
        memberContainer.appendChild(memberDiv);
    });
}

// Call the function to fetch members on page load
document.addEventListener('DOMContentLoaded', fetchMembers);



// Toggle between grid and list view
toggleButton.addEventListener('click', () => {
    isGridView = !isGridView;
    membersContainer.style.display = isGridView ? 'grid' : 'block'; // Change display property for layout
});

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
