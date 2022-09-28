console.log('form validation chargé');

const form = document.getElementById('form');
const cardName = document.getElementById('name');
const cardNumber = document.getElementById('cardNumber');
const cardMonth = document.getElementById('monthNumber');
const cardYear = document.getElementById('yearNumber');
const cvcNumber = document.getElementById('cvcNumber');

cardNumber.addEventListener('keyup', function(e) {
    if(e.key != 'Backspace' && (cardNumber.value.length === 4 || cardNumber.value.length === 9 || cardNumber.value.length === 14)) {
        cardNumber.value += ' ';
    }
});

form.addEventListener('submit', event => {
    event.preventDefault();

    validateInputs();

});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidName = cardName => {
    const regExp = /^[A-Z]{1}[aA-zZ]+[ ]{1}[A-Z]{1}[aA-zZ]+$/;
    return regExp.test(String(cardName));
};

const isValidNumber = cardNumber => {
    const regExp = /^[0-9]{4}(\s*)[0-9]{4}(\s*)[0-9]{4}(\s*)[0-9]{4}(\s*)*$/;
    return regExp.test(String(cardNumber));
};

const isValidMonth = cardMonth => {
    const regExp = /^[0-12]{0,2}$/;
    return regExp.test(String(cardMonth));
};

const isValidYear = cardYear => {
    const regExp = /^[23-30]{2}$/;
    return regExp.test(String(cardYear));
};

const isValidCvc = cardCvc => {
    const regExp = /^[0-9]{3}$/;
    return regExp.test(String(cardCvc));
};

const validateInputs = () => {
    const nameValue = cardName.value.trim();
    const cardValue = cardNumber.value.trim();
    const monthValue = cardMonth.value.trim();
    const yearValue = cardYear.value.trim();
    const cvcValue = cvcNumber.value.trim();

    if(nameValue === '') {

        setError(cardName, 'Your first and lastname is required.');

    } else if (!isValidName(nameValue)) {
        
        setError(cardName, 'The first letter of your first and last name must be capitalized.');

    } else {

        setSuccess(cardName);

    };

    if(cardValue === '') {

        setError(cardNumber, 'Your card number must have 16 digits.');

    } else if (!isValidNumber(cardValue)) {

        setError(cardNumber, 'Provide a valid card number.');

    } else {

        setSuccess(cardNumber);
    };
    
    if(monthValue === '') {

        setError(cardMonth, 'Add month and year.');

    } else if (!isValidMonth(monthValue)) {

        setError(cardMonth, 'Valid month and year please.');

    } else {

        setSuccess(cardMonth);
    };
    
    if(yearValue === '') {

        setError(cardYear, 'Add month and year.');

    } else if (!isValidYear(yearValue)) {

        setError(cardYear, 'Valid month and year please.');

    } else {

        setSuccess(cardYear);
    };
    
    if(cvcValue === '') {

        setError(cvcNumber, 'Add CVC number.');

    } else if (!isValidCvc(cvcValue)) {

        setError(cvcNumber, 'Valid cvc card please.');

    } else {

        setSuccess(cvcNumber);

    };

    if(isValidNumber(cardValue) && isValidNumber(cardValue) && isValidMonth(monthValue) && isValidYear(yearValue) && isValidCvc(cvcValue)) {

        document.getElementById('transpose__name').textContent = nameValue.toUpperCase();
        document.getElementById('transpose__number').textContent = cardValue;
        document.getElementById('transpose__month').textContent = monthValue;
        document.getElementById('transpose__year').textContent = yearValue;
        document.getElementById('transpose__cvc').textContent = cvcValue;

        document.getElementById("partial__form").style.display = 'none';
        document.getElementById("confirm__bloc").style.display= "block";

    }
};