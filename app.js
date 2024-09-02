// Adding some subtle interactivity to reinforce the discord theme
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('h1, h2, p, li');

    elements.forEach(el => {
        el.addEventListener('mouseover', () => {
            el.style.transform = 'rotate(-2deg) scale(1.05)';
            el.style.transition = 'transform 0.1s ease';
        });

        el.addEventListener('mouseout', () => {
            el.style.transform = 'rotate(0deg) scale(1)';
        });
    });
});