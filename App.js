const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const { urlencoded } = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
   
        // res.sendFile(__dirname + "/index.html");
        res.redirect('index.html');
    

});


app.listen(process.env.PORT || 3000, (req, res) => {
console.log("Server started at 3000");
});

