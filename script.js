helperFuncs = require("./helpers.js");
apiFuncs = require("./api.js")

let myForm = document.getElementById('my-form');
myForm.addEventListener("submit", e => {
    e.preventDefault();
    let cardInfo = {'greeting' : e.target.greeting.value, 'eventType': e.target.event.value, 'message': e.target.message.value};
    helperFuncs.appendCard(cardInfo);
    helperFuncs.destroyForm();
})