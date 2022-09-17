console.log("registercard chargé !");

const registercard = {
    
    init: function() {
        let submitCard = document.getElementById('submit');

        submitCard.addEventListener('click', registercard.handleCardSubmit);
    },

    handleCardSubmit: function(event) {
        event.preventDefault();

        // Take Cardholder name input
        let inputName = document.getElementById('name').value;

        let transposeName = document.getElementById('transpose__name').textContent = inputName;

        // Take Card number input
        let inputCardNumber = document.getElementById('cardNumber').value;

        let transposeNum = document.getElementById('transpose__number').textContent = inputCardNumber;

        // Take month number input
        let inputMonthNumber = document.getElementById('MMnumber').value;

        let transposeMonth = document.getElementById('transpose__month').textContent = inputMonthNumber;

        // Take year number input
        let inputYearNumber = document.getElementById('YYnumber').value;

        let transposeYear = document.getElementById('transpose__year').textContent = inputYearNumber;

        // Take CVC number input
        let inputCvcNumber = document.getElementById('CVCnumber').value;

        let transposeCvc = document.getElementById('transpose__cvc').textContent = inputCvcNumber;
    }
}