console.log('Hello, World!');

/* ------------------------------- */
/* Header Menu Toggle              */
/* ------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
    const headerMenuToggle = document.querySelector('.header__toggle');
    const headerMenuNav = document.querySelector('#header-nav');
    const body = document.body;

    headerMenuToggle.addEventListener('click', function () {
        const isMenuVisible = headerMenuNav.hasAttribute('data-visible');

        if (isMenuVisible) {
            headerMenuNav.removeAttribute('data-visible');
            headerMenuToggle.setAttribute('aria-expanded', 'false');
            body.classList.remove('header__no-scroll');
        } else {
            headerMenuNav.setAttribute('data-visible', '');
            headerMenuToggle.setAttribute('aria-expanded', 'true');
            body.classList.add('header__no-scroll');
        }
    });
});
