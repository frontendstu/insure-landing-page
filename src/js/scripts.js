console.log('Hello, World!');

/* ------------------------------- */
/* Header Menu Toggle              */
/* ------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
    const headerMenuToggle = document.querySelector('.header__toggle');
    const headerMenuNav = document.querySelector('#header-nav');
    const btn = document.querySelector('.header__menu .btn');

    // Function to update the button style based on viewport size
    function updateButtonStyle() {
        if (window.matchMedia('(max-width: 47.98em)').matches) {
            // Apply 'on-dark' style for mobile view
            btn.setAttribute('data-btn-style', 'on-dark');
        } else {
            // Apply 'on-light' style for larger viewports
            btn.setAttribute('data-btn-style', 'on-light');
        }
    }

    // Initial update of button style
    updateButtonStyle();

    // Update button style on viewport resize
    window.addEventListener('resize', updateButtonStyle);

    // Toggle menu visibility on button click
    headerMenuToggle.addEventListener('click', function () {
        const isMenuVisible = headerMenuNav.hasAttribute('data-visible');

        if (isMenuVisible) {
            headerMenuNav.removeAttribute('data-visible');
            headerMenuToggle.setAttribute('aria-expanded', 'false');
        } else {
            headerMenuNav.setAttribute('data-visible', '');
            headerMenuToggle.setAttribute('aria-expanded', 'true');
        }
    });
});
