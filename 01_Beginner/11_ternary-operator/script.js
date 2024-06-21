document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleThemeButton= document.getElementById('toggleTheme');
    let isDarkTheme = false;

    toggleThemeButton.addEventListener('click', () => {
        isDarkTheme =!isDarkTheme;
        body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
    });

    body.className = isDarkTheme ? 'dark-theme' : 'light-theme'

});