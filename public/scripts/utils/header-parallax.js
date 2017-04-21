(() => {
    let cover = document.querySelector('.js-parallax'),
        coverHeight = Math.round(cover.offsetHeight),
        translate,
        parallaxThreshold = 3;

    function parallax() {
        if (window.scrollY < coverHeight) {
            console.log(coverHeight);
            translate = Math.round(window.scrollY / parallaxThreshold);
            window.requestAnimationFrame(function () {
                cover.style.transform = 'translateY(' + translate + 'px)';
            });
        }
    }

    parallax();

    window.addEventListener('scroll', parallax, false);

    window.addEventListener('resize', debounce(function () {
        coverHeight = Math.round(cover.offsetHeight);
    }, 500));

    function debounce(fn, wait) {
        let timeout;
        return function () {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                fn.apply(this, arguments)
            }, (wait || 1));
        }
    }
})();