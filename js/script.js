// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Klik di Luar Hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Dark Mode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme('dark');
    } else {
        html.classList.remove('dark');
        localStorage.theme('light');
    }
});

// Change Position Toggle Light Dark Mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}

// Change Image Light Dark Mode
document.addEventListener('DOMContentLoaded', function () {
    const darkToggle = document.querySelector('#dark-toggle');
    const html = document.querySelector('html');
    const profileImg = document.getElementById('profile-img');

    const updateProfileImage = () => {
        if (html.classList.contains('dark')) {
            profileImg.src = 'img/bayu4darkmode-profile.png';
        } else {
            profileImg.src = 'img/bayu4-profile.png';
        }
    };

    darkToggle.addEventListener('click', function () {
        if (darkToggle.checked) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        updateProfileImage();
    });

    // Initial check and update
    updateProfileImage();
});
