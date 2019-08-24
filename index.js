 const express = require('express');
 const app = express();
 const bodyParser = require('body-parser');
 const mongoose = require('mongoose');
 var cors = require('cors')

 const postRoutes = require('./routes/postRoutes');

 //app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
 app.use(bodyParser.json());
 app.set('json spaces', 2);
 app.use(cors());

// Connect to mongoose
mongoose.connect('mongodb://localhost/posts');
var db = mongoose.connection;

postRoutes(app);

app.listen(4000, () => { console.log("Blog running on port 4000") }); 