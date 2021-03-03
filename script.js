let myForm = document.getElementById('my-form');
myForm.addEventListener("submit", e => {
    e.preventDefault();
    let cardInfo = {'greeting' : e.target.greeting.value, 'event': e.target.event.value, 'message': e.target.message.value};
    console.log(cardInfo);
    return cardInfo;
})