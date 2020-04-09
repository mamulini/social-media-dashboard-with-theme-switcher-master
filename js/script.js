document.getElementById('themeSwitch').addEventListener('change', event => {
    let themeTitle = document.querySelector('.theme_switch__title');
    if (event.target.checked) {
        document.body.setAttribute('data-theme', 'light');
        themeTitle.textContent = 'Light mode';
    } else {
        document.body.removeAttribute('data-theme');
        themeTitle.textContent = 'Dark mode';
    }
});

// (event.target.checked) ? document.body.setAttribute('data-theme', 'light') : document.body.removeAttribute('data-theme');