apiFuncs = require("./api.js")

async function appendCard(userData){
    const card = await createCard(userData)
    const cardParent = document.querySelector('#card')
    cardParent.appendChild(card)
};

async function createCard(userData){
    const url = await apiFuncs.backgroundImage(userData.eventType)

    let grRand = Math.floor(Math.random() * 3)
    grRand = ['red', 'blue', 'green'][grRand]
    let greeting = document.createElement('h2');
    greeting.textContent = userData.greeting
    greeting.className = 'card-title'
    greeting.style.color = grRand

    let eventType = document.createElement('p');
    eventType.textContent = `It's (your) ${userData.eventType}!`
    eventType.className = 'card-event'

    let message = document.createElement('p');
    message.textContent = userData.message
    message.className = 'card-message'

    let image = document.createElement('img');
    image.src = url
    image.className = 'card-image'

    let bgRand = Math.floor(Math.random() * 3)
    bgRand = ['yellow', 'orange', 'pink'][bgRand]
    const card = document.createElement('div');
    card.className = 'card'
    card.style.backgroundColor = bgRand
    card.style.borderColor = grRand
    card.appendChild(greeting)
    card.appendChild(eventType)
    card.appendChild(image)
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