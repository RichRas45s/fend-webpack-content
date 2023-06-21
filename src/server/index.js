const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const app = express()
// const Formadata = require('form-data');
// const fetch = require('node-fetch');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
//const { response } = require('express');
const { request } = require('http');
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
// app.get('/api', function (req, res) {
//    res.send(mockAPIResponse)
//    console.log(mockAPIResponse);
// })


const apiURL ="https://api.meaningcloud.com/sentiment-2.1"
const apiKey = `${process.env.API_KEY}`


app.post('/api', async(req,res)=> {
    const url = req.body.url;
    let formDataInfo = new Formadata();
    formDataInfo.append("key", `${process.env.API_KEY}`);
    formDataInfo.append("txt", inputText);
    formDataInfo.append("lang", "en"); // 2-letter code, like en es fr ...
    
    const response = await fetch(`${apiURL}key=${apiKey}&url=${url}&lang=en`, { method: "POST", body: formDataInfo})
    const apiResponse = await response.text()
    if (apiResponse && apiResponse.status.code == 0)
        res.send(apiResponse)
    else res.status(500).send({ message: 'error' , error: error })
})







process.env.API_KEY
// console.log(`Your API key is ${process.env.API_KEY}`);

