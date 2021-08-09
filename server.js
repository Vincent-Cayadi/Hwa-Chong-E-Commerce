const express = require('express')
const MongoClient = require('mongodb').MongoClient

const app = express()

app.use(express.json())
var database

app.get('/',(req,resp) => {
    resp.send('Welcome to MongoDB API')
})

app.get('/api/product',(req,resp) => {
    database.collection('product').find({}).toArray((err,result) => {
        if(err) throw err
        resp.send(result)
    })
})

app.listen(4000, () => {
    MongoClient.connect('mongodb+srv://user:user@thicc-boy-production.kbt6v.mongodb.net',{useNewUrlParser:true, useUnifiedTopology: true},(error, result) => {
        if(error) throw error
        database = result.db('productDB')
        console.log('server is running on port 4000, yes it works')
    })
})

//https://stackoverflow.com/questions/50448272/avoid-current-url-string-parser-is-deprecated-warning-by-setting-usenewurlpars - Current URL string parser is deprecated
//https://stackoverflow.com/questions/57895175/server-discovery-and-monitoring-engine-is-deprecated - Current Server Discover and Monitoring engine is deprecated
// https://www.youtube.com/watch?v=yH593K9fYvE&t=777s