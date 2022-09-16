console.log("registercard chargé !");

const registercard = {
    
    init: function() {
        let submitCard = document.getElementById('submit');

        submitCard.addEventListener('click', registercard.handleCardSubmit);
    },

    handleCardSubmit: function(event) {
        event.preventDefault();

        // Take Cardholder name input
        let inputName = document.querySelector('#name').value;

        console.log(inputName);

        // Take Card number input
        let inputCardNumber = document.querySelector('#cardNumber').value;

        console.log(inputCardNumber);

        // Take month number input
        let inputMonthNumber = document.querySelector('#MMnumber').value;

        console.log(inputMonthNumber);

        // Take year number input
        let inputYearNumber = document.querySelector('#YYnumber').value;

        console.log(inputYearNumber);

        // Take CVC number input
        let inputCvcNumber = document.querySelector('#CVCnumber').value;

        console.log(inputCvcNumber);
    }
}