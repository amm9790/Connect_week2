//express is a node modoule for bulding HTTP servers
const { resolveSoa } = require('dns');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedBodyParser = bodyParser.urlencoded({extended: true});
app.use(urlencodedBodyParser);
//Tell express to look in the "public"
app.use(express.static("public"));

var submittedData = [];
//The defult route of / and what to do!
app.get("/", function(req,res){
    res.send("Hello Hello thank you for connecting!");
});

app.post('/formdata', function(req, res){
    console.log(req.body.data);
/*
var dataToSave = new Object();
dataToSave.text = req.body.data;
dataToSave.color = req.body.color;
*/
var dataToSave = {
    text: req.body.data,
    color: req.body.color,
    number: req.body.age
};
// console.log(dataToSave);
submittedData.push(dataToSave);
console.log(submittedData);

var output = "<html><body>";
output += "<h1>Inspirational texts</h1><a href='index.html'>Write more text</a>";

for (var i = 0; i < submittedData.length; i++){

    output += "<div style='color: "+ submittedData[i].color +"; font-size: "+ submittedData[i].number +"px'><marquee behavior='alternate' scrollamount='25'>" + submittedData[i].text +"</marquee></div>"; 
    
}
output += "</body></html>";
res.send(output);

// res.send("Got your data! You submitted:"+ req.body.data+""+req.body.color);
});

    app.listen(80, function (){
        console.log('Example app listening on part 80!')
    })

 




   


