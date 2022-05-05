var express = require('express');
const fetch = require("node-fetch");
const YoutubeRouter = express.Router();
// app.set('view engine', 'ejs');

async function httpretreievecomments(req, res) {
    console.log("Ready to get Youtube data!");
    const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=XsUY50S1_Fk&key=AIzaSyDZoa4WKx8_Swd-jrBmDNMp7AIlNE9Eahk`;

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.);
    const comment = data.items.map((item) => item.snippet.topLevelComment.snippet.textDisplay)
    console.log(comment);
    return comment;
    // return res.status(200).json(comment);
}


let todo = {
    "snippet": {
        "videoId": "XsUY50S1_Fk",
        "topLevelComment": {
            "snippet": {
                "textOriginal": "Testing post comment"
            }
        }
    }
}
async function httppostcomment() {
    const response = fetch('https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: { 'Authorization': 'Bearer ya29.A0ARrdaM_AwWdhScdjgFId1JUWh23q56dS6HT-eodPL1QTZBfuu-ff0v2zW--PMt4k8fTszg884rTAps9XGk99IcS0I_b38Z-rXRxVDkEwwFhPDf33Hz6u7qyxyTC6oZKskjy3EMRICEBC-WjcsYMmr9oye5lz', 'Content-Type': 'application/json' }
    }).then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));

    const data = await response.json();
    console.log(data);
    return data;
}



module.exports = {
    httpretreievecomments,
};