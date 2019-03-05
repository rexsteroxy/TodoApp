var express = require ('express');

//importing my custom controller module
var todoController = require('./controllers/todoController');

var app = express();

//setting app engine view
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));


//fire the controller function
todoController(app);

//listening to server port
app.listen(3000);
console.log('The app is listening to port 3000');