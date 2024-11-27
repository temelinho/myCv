
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('.dark-mode-button i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

function toggleLanguage() {
    const icon = document.querySelector('.language-toggle-button i');
    if (icon.classList.contains('fa-flag')) {
        icon.classList.remove('fa-flag');
        icon.classList.add('fa-flag-usa');
        window.location.href = 'CV_English.html';
    } else {
        icon.classList.remove('fa-flag-usa');
        icon.classList.add('fa-flag');
        window.location.href = 'CV_Turkish.html';
    }
}
