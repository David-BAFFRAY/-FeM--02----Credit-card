console.log("app.js chargé !");

const app = {
    init: function() {
        registercard.init();
    }
}

document.addEventListener('DOMContentLoaded', app.init);