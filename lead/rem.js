
(function () {
    var html = document.documentElement;

    function onWindowResize() {
        html.style.fontSize = html.getBoundingClientRect().width / 15 + 'px';

    }

    window.addEventListener('resize', onWindowResize);
    onWindowResize();
})();