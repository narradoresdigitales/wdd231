// script.js

// Select the burger menu and the close button
const burgerMenu = document.getElementById('burger-menu');
const closeButton = document.getElementById('closeButton');

// Select the nav element
const nav = document.querySelector('nav');

// Event listener for showing the menu
burgerMenu.addEventListener('click', () => {
    nav.classList.add('show-nav'); // Add class to display the nav
    burgerMenu.style.display = 'none'; // Hide the burger menu icon
    closeButton.style.display = 'block'; // Show the close button
});

// Event listener for hiding the menu
closeButton.addEventListener('click', () => {
    nav.classList.remove('show-nav'); // Remove class to hide the nav
    burgerMenu.style.display = 'block'; // Show the burger menu icon
    closeButton.style.display = 'none'; // Hide the close button
});




const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Select the course list container
const courseList = document.getElementById('course-list');

// Function to display the courses based on filter
function displayCourses(filter = 'all') {
    // Clear the course list before displaying new content
    courseList.innerHTML = '';

    // Filter courses based on the selected filter (CSE, WDD, or all)
    const filteredCourses = courses.filter(course => {
        if (filter === 'all') {
            return true;
        }
        return course.subject === filter;
    });

    // Loop through the filtered courses and create elements for each course
    filteredCourses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course-item');

        // Apply the 'completed' or 'incomplete' class based on the course's status
        if (course.completed) {
            courseItem.classList.add('completed');
        } else {
            courseItem.classList.add('incomplete');
        }

        // Add course details
        courseItem.innerHTML = `
            <h3>${course.subject} ${course.number}`;

        // Append the course item to the course list
        courseList.appendChild(courseItem);
    });
}

// Add event listeners to the filter buttons
const filterButtons = document.querySelectorAll('.filter');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the filter value from the button's data-filter attribute
        const filter = button.getAttribute('data-filter');

        // Display the courses based on the selected filter
        displayCourses(filter);
    });
});

// Display all courses by default when the page loads
displayCourses();

// Function to calculate remaining credits
function calculateRemainingCredits() {
    let totalCredits = 0;
    
    // Loop through the courses and sum credits for incomplete courses
    courses.forEach(course => {
        if (!course.completed) {
            totalCredits += course.credits;
        }
    });

    // Display the total credits in the designated element
    const creditsElement = document.getElementById('remaining-credits');
    creditsElement.textContent = `Remaining Credits: ${totalCredits}`;
}

// Call the function to calculate remaining credits when the page loads
calculateRemainingCredits();





// Function to set current year
function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// Function to set last modified date
function setLastModifiedDate() {
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = new Date(document.lastModified).toLocaleDateString();
    lastModifiedElement.textContent = `Last updated on: ${lastModifiedDate}`;
}

// Call the functions to update footer
setCurrentYear();
setLastModifiedDate();





//MODAL


