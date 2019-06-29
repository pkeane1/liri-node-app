require("dotenv").config();

var keys = require("keys.js");

var Spotify = ("node-spotify-id")
var spotify = (keys.spotify)

var moment = require('moment');
var axios = require('axios');

var fs = require('fs');

//Make it so liri.js can take in one of the following commands:
//switch statement swicth() -- case"" ---break

input1 = process.argv[2]
input2 = process.argv[3]

switch(input1) {
case "concert-this":
    concertThis(input2);
break;
case "spotify-this-song":
    spotifySong(input2);
break;
case "movie-this":
    movieThis(input2);
break;
case "do-what-it-says":
    doIt(input2);
break;
};


concertThis =function(input2) {

} 

spotifySong = function(input2) {


}


movieThis = function(input2){



}

function doIt(input2) {


}