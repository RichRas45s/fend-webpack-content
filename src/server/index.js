const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const app = express()

//ESM MODULE
// import Formadata from form-data;
// import fetch from 'node-fetch';
// import dotenv from 'dotenv';

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
//const { response } = require('express');
const { request } = require('http');
const { response } = require('express');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cors());

app.use(express.static('dist'));
app.use(express.json({limit: '1mb'}))

console.log(__dirname)
console.log(JSON.stringify(mockAPIResponse))

 app.get('/', function (req, res) {
    res.sendFile('dist/index.html') 
    // res.sendFile(path.resolve('src/client/views/index.html'))
})



// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Hey Richard listening on port 8081!')
})

app.get('/api', function (req, res) {
  res.send(mockAPIResponse)
  console.log(mockAPIResponse);
})




const apiURL ="https://api.meaningcloud.com/sentiment-2.1"
const apiKey = `${process.env.API_KEY}`


app.post('/api', async (req,res)=> {
    const url = req.body.url;
    const formdata = new FormData();
    formdata.append("key", apiKey);
    formdata.append("txt", url);
    formdata.append("lang", "EN");  // 2-letter code, like en es fr ...

    const requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
      };
     const response = fetch(apiURL, requestOptions)
    .then((response) => {
      if (response.ok) {
      return response.json(); 
      }else {
        throw new Error ('NETWORK RESPONSE NOT OK');
      }
    })
    .then(function(data) {
      console.log(data);
    })

// app.get('/api', function (req, res) {
//     res.send(mockAPIResponse)
//     console.log(mockAPIResponse);
//   })
})






process.env.API_KEY
// console.log(`Your API key is ${process.env.API_KEY}`);

