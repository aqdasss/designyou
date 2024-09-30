// Auto-Typing Effect
const text = "Here you can explore our work, including thumbnails, photo editing, and Poster designing.";
let index = 0;
const typingSpeed = 50; // Adjust typing speed if necessary

function typeText() {
    if (index < text.length) {
        document.getElementById("auto-typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    }
}

// Call the function to start typing when the page loads
window.onload = function() {
    typeText();
};

// Toggle Menu for mobile devices
function toggleMenu() {
    let nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

// Active link switching when scrolling
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
