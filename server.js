const express = require('express')
const MongoClient = require('mongodb').MongoClient

const app = express()

app.use(express.json())
var database

app.get('/',(req,resp) => {
    resp.send('Welcome to MongoDB API')
})

app.get('/api/product',(req,resp) => { //Starts on localhost 4000/api/product
    database.collection('product').find({}).toArray((err,result) => {
        if(err) throw err
        resp.send(result)
    })
})

app.listen(4000, () => { //Starts on localhost 4000
    MongoClient.connect('mongodb+srv://user:user@thicc-boy-production.kbt6v.mongodb.net',{useNewUrlParser:true, useUnifiedTopology: true},(error, result) => {
        if(error) throw error
        database = result.db('productDB') // Connects to productDB Dataset
        console.log('server is running on port 4000, yes it works') // Outputs this when works
    })
})

//https://stackoverflow.com/questions/50448272/avoid-current-url-string-parser-is-deprecated-warning-by-setting-usenewurlpars - Current URL string parser is deprecated
//https://stackoverflow.com/questions/57895175/server-discovery-and-monitoring-engine-is-deprecated - Current Server Discover and Monitoring engine is deprecated
// https://www.youtube.com/watch?v=yH593K9fYvE&t=777s
// https://stackoverflow.com/questions/33470166/how-to-return-json-from-mongodb-in-node-js <---- Idk if this helps you can try
//                                                                                               Try to like export the data from here and import to main.js