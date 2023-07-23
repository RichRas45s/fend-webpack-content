const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');
// const FormData = require('formdata-polyfill')
const FormData = require('form-data');

const  path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const app = express()
const http = require('http')
const request = require('request')
const apiResponse = require('express-api-response')

//ESM MODULE format not used here
// import Formadata from form-data;
// import fetch from 'node-fetch';
// import dotenv from 'dotenv';

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
//const { response } = require('express');
// const { request } = require('http');
// const { response } = require('express');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors());

app.use(express.static('dist'))
app.use(express.json())
app.use(express.json({limit: '10mb'}))

// console.log(__dirname)
// console.log(JSON.stringify(mockAPIResponse))
console.log('this is an attempt to have my server work for me');

 app.get('/', function (req, res) {
    res.sendFile('dist/index.html') 
    // res.sendFile(path.resolve('src/client/views/index.html'))
})



// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Hey Richard listening on port 8081!')
})

// app.post('/postload', function (req, res) {
//   console.log(req.body);
// })

const apiKey = process.env.API_KEY

process.env.API_KEY
// console.log(`Your API key is ${process.env.API_KEY}`);



app.get('/sentiment', async function (req, res){
  const text = req.body.text;
const apiURL ="https://api.meaningcloud.com/sentiment-2.1"
const formData = new FormData();
formData.append("key", `${process.env.API_KEY}`);
formData.append("txt", "I hate mondays");
formData.append("lang", "en");  // 2-letter code, like en es fr ...


const requestOptions = {
  method: 'POST',
  body: formData,
  redirect: 'follow'
}
const response = await fetch(apiURL, requestOptions)
.then((res) => {
  if (res.ok) {
  return res.json(); 
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

//  app.post('/sentiment', function (req, res) {
//   const text= req.body.text;
//   console.log(text);
// })

