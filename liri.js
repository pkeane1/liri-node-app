require("dotenv").config();

var keys = require("./keys.js");

var Spotify = ("node-spotify-id")
var spotify = (keys.spotify)

var moment = require("moment");
var axios = require("axios")

var fs = require("fs");

//Make it so liri.js can take in one of the following commands:
//switch statement swicth() -- case"" ---break
// argv 2 will be the command and argv3 will be what I want to use with the command 
// spotify - this - song ("argv2") sympathy of the devil (argv3) 
console.log(process.argv)
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


function concertThis(input2) {
// console.log("it works!")
var url = "https://rest.bandsintown.com/artists/" + input2 + "/events?app_id=codingbootcamp";
axios.get(url)
.then(function(response) {   

  for (var i = 0; i < response.data.length; i++) {


    var concertResults = 
        "--------------------------------------------------------------------" +
            "\n Venue Name: " + response.data[i].venue.name + 
            "\n Venue Location: " + response.data[i].venue.city +
            "\n Date of the Event: " + response.data[i].datatime;
    console.log(concertResults);


  };
}); 
};

function spotifySong(input2) {
    // spotify.search({ type: 'track', query: input2 }, function(err, data) {
    //     if (err) {
    //       return console.log('Error occurred: ' + err);
    //     }
       
    //   console.log(data); 
    //   });
    
}


function movieThis(input2){
    axios.get("https://www.omdbapi.com/?t=" + input2 + "&y=&plot=short&apikey=trilogy")
    .then(function(response) {
            var movieResults = 
                "--------------------------------------------------------------------" +
                    "\n Movie Title: " + response.data.Title + 
                    "\n Year of Release: " + response.data.Year +
                    "\n IMDB Rating: " + response.data.imdbRating +
                    "\n Rotten Tomatoes Rating: " + response.data.Ratings[1].Value +
                    "\n Country Produced: " + response.data.Country +
                    "\n Language: " + response.data.Language +
                    "\n Plot: " + response.data.Plot +
                    "\n Actors/Actresses: " + response.data.Actors;
            console.log(movieResults);

});
}

function doIt(input2) {


}