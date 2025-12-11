document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        offset: 50
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Header scroll background
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(100, 181, 246, 0.95)';
            header.style.padding = '10px 0';
        } else {
            header.style.background = 'transparent';
            header.style.padding = '20px 0';
        }
    });
});
