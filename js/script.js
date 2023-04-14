window.addEventListener('load', start);

var globalNames = ["Um", "Dois", "Três", "Quatro"];
var inputName = null;

function start() {
    inputName = document.querySelector('#inputName');
    preventDefaultSubmit();
    activedInput();
}

function preventDefaultSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function activedInput() {
    inputName.focus();
}