async function backgroundImage(event){
    try {
        const accessKey = '2el08X40L0qYFrU5D9W30PUZKGVkwJ2_uL0cBrAUDOQ'
        // const url = `https://api.unsplash.com/search/photos?page=1?query=${event}`
        // const url1 = "https://api.unsplash.com/photos/?client_id=" +
        // accessKey +
        // "&query=" +
        // event;
        const url1 = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query="${event}"`
        //const response = await fetch(url, {method: 'get', headers: new Headers({'Authorization': '2el08X40L0qYFrU5D9W30PUZKGVkwJ2_uL0cBrAUDOQ'}),})
        const response = await fetch(url1)
        const image = await response.json()
        // const picture = imagesArray[0].urls.raw
        console.log(image)
        return image.urls.small;
    } catch (err) {
        console.log(err)
    }
   
};

module.exports = {backgroundImage}