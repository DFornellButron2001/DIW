document.addEventListener('DOMContentLoaded', function () {
    const switchElement = document.getElementById('modo-oscuro');

    switchElement.addEventListener('change', function () {
        if (switchElement.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    function enableDarkMode() {
        document.body.classList.add('modo-oscuro');
        document.querySelector('header').classList.add('modo-oscuro');
        document.querySelector('footer').classList.add('modo-oscuro');
        document.getElementById('presentacion').classList.add('modo-oscuro2');
    }

    function disableDarkMode() {
        document.body.classList.remove('modo-oscuro');
        document.querySelector('header').classList.remove('modo-oscuro');
        document.querySelector('footer').classList.remove('modo-oscuro');
        document.getElementById('presentacion').classList.remove('modo-oscuro');
    }
});
