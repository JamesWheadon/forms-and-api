function appendCard(userData){
    const card = createCard(userData)
    const cardParent = document.querySelector('#card')
    cardParent.appendChild(card)
};

function createCard(userData){
    let greeting = document.createElement('h1');
    greeting.textContent = userData.greeting

    let eventType = document.createElement('p');
    eventType.textContent = userData.eventType

    let message = document.createElement('p');
    message.textContent = userData.message

    const card = document.createElement('div');
    card.appendChild(greeting)
    card.appendChild(eventType)
    card.appendChild(message)

    return card
}

function destroyForm() {
    let form = document.querySelector('form')
    form.remove()
}

module.exports = {
    appendCard, createCard, destroyForm
}