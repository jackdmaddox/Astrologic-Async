
async function addPlayerImage(playerName, height) {
    // takes in the players name and a desired height in pixels and returns the player's wikipedia thumbnail
    let url = `http://en.wikipedia.org/w/api.php?action=query&titles=${playerName}&prop=pageimages&format=json&pithumbsize=${height}`
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    try {
        const response = await fetch (proxyUrl + url);
        const data = await response.text();
        let imgUrlStart = data.indexOf("\"source\":") + 9;
        let imgUrlEnd = data.indexOf(",\"width");
        let imgUrl = data.substring(imgUrlStart, imgUrlEnd);
        let imgDiv = document.getElementById("playerImage");
        imgDiv.setAttribute('src', imgUrl.replace(/"/g, ''));
        imgDiv.onload = function(){
            loader.style.display = 'none';
        }
    }
    catch (error) {
        console.log(error.message);
    }
}
