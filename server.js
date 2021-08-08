const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://user:user@thicc-boy-production.kbt6v.mongodb.net/moviesDB?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology: true});

const moviesSchema = {
    title : String,
}

const Movie = mongoose.model('Movie', moviesSchema);

app.get('/',(req, res) => {
    Movie.find({}, function(err, movies){
        res.render('index',{
            moviesList:movies
        })
    })
})

app.listen(4000, function(){
    console.log('server is running on port 4000, yes it works');
})

//https://stackoverflow.com/questions/50448272/avoid-current-url-string-parser-is-deprecated-warning-by-setting-usenewurlpars - Current URL string parser is deprecated
//https://stackoverflow.com/questions/57895175/server-discovery-and-monitoring-engine-is-deprecated - Current Server Discover and Monitoring engine is deprecated
// https://www.youtube.com/watch?v=yH593K9fYvE&t=777s