const express = require("express");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');



mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//no declarar variables que no se usarán otra vez 
require('./routes/authRoutes')(app);



const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log("Port 5000");
});

//console.developers.google.com
//heroku open
// deploy git push heroku emaily/server:master
