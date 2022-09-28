console.log("app.js chargé !");

const app = {
    init: function() {
        registerCard.init();
        restrictionCardName.init();
        restrictionCardNumber.init();
        restrictionCvc.init();
    }
}

document.addEventListener('DOMContentLoaded', app.init);