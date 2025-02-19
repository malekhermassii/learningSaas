const express = require('express')
const app = express()
const port = 3000;
app.get('/' , (req , res)=> {
    res.send('hello  , this is our first app')
})
app.listen(port , ()=> {
    console.log(`our app is working on port ${port}`)
} )