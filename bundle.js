(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
async function backgroundImage(event){
    try {
        const accessKey = '2el08X40L0qYFrU5D9W30PUZKGVkwJ2_uL0cBrAUDOQ'
        const url = `https://api.unsplash.com/search/photos?page=1?query=${event}`
        const url1 = "https://api.unsplash.com/photos/?client_id=" +
        accessKey +
        "&query=" +
        event;
        //const response = await fetch(url, {method: 'get', headers: new Headers({'Authorization': '2el08X40L0qYFrU5D9W30PUZKGVkwJ2_uL0cBrAUDOQ'}),})
        const response = await fetch(url1)
        const imagesArray = await response.json()
        const picture = imagesArray[0].urls.full
        console.log(picture)
        document.body.style.backgroundImage = `url(${picture})`;
    } catch (err) {
        console.log(err)
    }
   
};

module.exports = {backgroundImage}
},{}],2:[function(require,module,exports){
function appendCard(userData){
    const card = createCard(userData)
    const cardParent = document.querySelector('#card')
    cardParent.appendChild(card)
};

function createCard(userData, imageUrl = "https://avatars.githubusercontent.com/u/71259892?s=88&v=4"){
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
    image.src = imageUrl

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
},{}],3:[function(require,module,exports){
helperFuncs = require("./helpers.js");
apiFuncs = require("./api.js")

let myForm = document.getElementById('my-form');
myForm.addEventListener("submit", e => {
    e.preventDefault();
    let cardInfo = {'greeting' : e.target.greeting.value, 'eventType': e.target.event.value, 'message': e.target.message.value};
    helperFuncs.appendCard(cardInfo);
    helperFuncs.destroyForm();
    apiFuncs.backgroundImage(e.target.event.value);
})
},{"./api.js":1,"./helpers.js":2}]},{},[3]);
