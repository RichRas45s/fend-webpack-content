const dotenv = require('dotenv');
dotenv.config();
const fetch =require('node-fetch');
// const FormData = require('formdata-polyfill')
const FormData = require('form-data');

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
app.use(express.json({limit: '10mb'}))

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

// app.get('/sentiment', function (req, res) {
//   res.send(mockAPIResponse)
//   console.log(mockAPIResponse);
// })



// app.post('/api', async (req, res) => {
//   const url = req.body.url;
// console.log(url);
  // let response = await fetch(`${apiURL}key=${apiKey}&url=${url}&lang=en`, { method: "POST" })
  // let articleResponse = await response.json()
  // if (articleResponse && articleResponse.status.code == 0)
  //     res.send(articleResponse)
  // else res.status(500).send({ message: 'error' , error: error })
// })
   

const apiKey = process.env.API_KEY

process.env.API_KEY
// console.log(`Your API key is ${process.env.API_KEY}`);



app.get('/sentiment', async (req, res) => {
const apiURL ="https://api.meaningcloud.com/sentiment-2.1"
const form = new FormData();
form.append("key", `${process.env.API_KEY}`);
form.append("txt", "I feel Happy!");
form.append("lang", "en");  // 2-letter code, like en es fr ...

const requestOptions = {
  method: 'POST',
  body: form,
  redirect: 'follow'
};
const response = await fetch(apiURL, requestOptions)
.then((response) => {
  if (response.ok) {
  return response.json(); 
  }else {
    throw new Error ('NETWORK RESPONSE NOT OK');
  }
})
.then(function(data) {
  res.send(data)
  console.log(data);
})

.catch((error) => {
  console.error("FETCH ERROR:", error);
})

 });
