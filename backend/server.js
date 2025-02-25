require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const session = require('express-session');
const port = 3000;
const cors = require("cors")
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({limit : "10mb" , extended : true }))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));

  
app.get('/' , (req , res)=> {
    res.send('hello  , this is our first app')
})
mongoose.connect('mongodb://127.0.0.1:27017/RihabTest')
    .then(()=>{
        console.log("successfully connected to mongoDB")
    })
    .catch((error)=>{
        console.error("error while connecting to DB :" , error)
    })
require("./routes/userRoute")(app)
// require("./routes/adminRoute")(app) 
app.listen(port , ()=> {
    console.log(`our app is working on port ${port}`)
} )
























app.use(session({
  // Secret used to sign session IDs (either from environment variable or fallback value)
  secret: process.env.SESSION_SECRET ,  
  // Prevents the session from being saved back to the session store if nothing has changed
  resave: false,  
  // Prevents saving a session that has not been modified
  saveUninitialized: false,  
  cookie: {
      // Ensures the cookie is only sent over HTTPS in production
    secure: process.env.NODE_ENV === 'production',  
    maxAge: 24 * 60 * 60 * 1000  // Sets the session cookie's expiration time to 1 day
  }
}));