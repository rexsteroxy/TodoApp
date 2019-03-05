var express = require ('express');

var app = express();

//setting app engine view
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//listening to server port
app.listen(3000);
console.log('The app is listening to port 3000');