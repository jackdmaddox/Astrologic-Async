const proxyUrl = "https://cors-anywhere.herokuapp.com/";

function getWiki(url) {
    // fetches data from wikipedia, using a proxyurl to get around CORS
    return fetch(proxyUrl + url)
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        return data;
    })
    .catch(function(error) {
        return error;
    });
}

function findBirthday(data) {
    //takes the player's birthday from wikipedia, and formats it using moment.js to retrieve the month and day 
    let birthdayStartInd = data.indexOf("born ") + 5;
    let birthdayEndInd = data.indexOf(")", birthdayStartInd);
    let birthday = data.substring(birthdayStartInd, birthdayEndInd);
    let momentBirthday = moment(birthday, "MMMM DD, YYYY");
    let formattedMonth = momentBirthday.format("MM");
    let formattedDay = momentBirthday.format("DD");
    return [parseInt(formattedMonth), parseInt(formattedDay)];
}
