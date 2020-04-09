document.getElementById('themeSwitch').addEventListener('change', event => {
    let themeTitle = document.querySelector('.theme__title');
    if (event.target.checked) {
        document.body.setAttribute('data-theme', 'light');
        themeTitle.textContent = 'Dark mode';
    } else {
        document.body.removeAttribute('data-theme');
        themeTitle.textContent = 'Light mode';
    }
});

// (event.target.checked) ? document.body.setAttribute('data-theme', 'light') : document.body.removeAttribute('data-theme');