async function backgroundImage(event){
    try {
        const url = `https://api.unsplash.com/search/photos?page=1?query=${event}`
        const response = await fetch(url, {method: 'get', headers: new Headers({'Authorization': '2el08X40L0qYFrU5D9W30PUZKGVkwJ2_uL0cBrAUDOQ'}),})
        const picture = await response.json()
        console.log(picture)
        document.body.backgroundImage = picture;
    } catch (err) {
        console.log(err)
    }
   
};

module.exports = {backgroundImage}