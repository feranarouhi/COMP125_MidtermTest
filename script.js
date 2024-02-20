window.onload = function() {
    var selectElement = document.getElementById('bState');
    selectElement.selectedIndex = -1;
};

window.onload = function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        var firstName = document.querySelector('#FName');
        var lastName = document.querySelector('#LName');
        var street = document.querySelector('#bStreet');
        var city = document.querySelector('#bCity');
        var state = document.querySelector('#bState');

        if (!firstName.checkValidity()) {
            firstName.setCustomValidity('Please enter your first name.');
        } else {
            firstName.setCustomValidity('');
        }

        if (!lastName.checkValidity()) {
            lastName.setCustomValidity('Please enter your last name.');
        } else {
            lastName.setCustomValidity('');
        }

        if (!street.checkValidity()) {
            street.setCustomValidity('Please enter your street address.');
        } else {
            street.setCustomValidity('');
        }

        if (!city.checkValidity()) {
            city.setCustomValidity('Please enter your city.');
        } else {
            city.setCustomValidity('');
        }

        if (!state.checkValidity()) {
            state.setCustomValidity('Please select your state.');
        } else {
            state.setCustomValidity('');
        }

        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    }, false);
};

window.onload = function() {
    var firstName = document.querySelector('#FName');
    var lastName = document.querySelector('#LName');
    var street = document.querySelector('#bStreet');
    var city = document.querySelector('#bCity');
    var state = document.querySelector('#bState');

    firstName.placeholder = "Enter your first name";
    lastName.placeholder = "Enter your last name";
    street.placeholder = "Enter your street";
    city.placeholder = "Enter your city";
    state.placeholder = "Select your state";
};