// Rating functionality
const stars = document.querySelectorAll('.rating .star');
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
});

// FAQ accordion
const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    header.addEventListener('click', () => {
        item.classList.toggle('active');
        content.style.display = item.classList.contains('active') ? 'block' : 'none';
    });
});

// Burger menu
const burgerMenu = document.createElement('div');
burgerMenu.classList.add('burger-menu');
burgerMenu.innerHTML = '<div></div><div></div><div></div>';

const nav = document.querySelector('nav');
const navUl = nav.querySelector('ul');

// Check if the burger menu already exists
if (!document.querySelector('.burger-menu')) {
    nav.insertBefore(burgerMenu, navUl);
}

burgerMenu.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && navUl.classList.contains('show')) {
        navUl.classList.remove('show');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var modal = document.getElementById("surveyModal");
var span = document.getElementsByClassName("close")[0];
var form = document.getElementById("surveyForm");

// Show the modal after 5 seconds
setTimeout(function () {
    modal.style.display = "block";
}, 5000);

// Close the modal when clicking on <span> (x)
span.onclick = function () {
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
form.onsubmit = function (e) {
    e.preventDefault();
    var formData = new FormData(form);
    var object = {};
    formData.forEach(function (value, key) {
        object[key] = value;
    });
    var json = JSON.stringify(object);

    // Aka API request to backend using axios
    console.log(json);

    alert("Thank you for completing the survey!");
    modal.style.display = "none";
}
