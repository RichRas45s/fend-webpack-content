const url="https://api.meaningcloud.com/sentiment-2.1"
// const apiKey =`${process.env.API_KEY}`
function handleSubmit(event) {
   // check what text was put into the form field
  const formText = document.getElementById('url').value
  Client.checkForName(formText)
  console.log("::: Form Submitted :::")
   
  const formEl = document.querySelector('.form');
  formEl.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(formEl);
  const data = Object.fromEntries (formData)
  // console.log(formData);
  const inputText= document.getElementById('text').value;
  // const inputDiv=document.getElementById('score_tag');
  // inputText.innerHTML=('results');

  formData.append("key", 'c6bf3ea5f0d6756d364e89f8fb203e04' );
  formData.append("txt", inputText);
  formData.append("lang", "en");  // 2-letter code, like en es fr ...

const requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow'
  };

  const response = fetch(url, requestOptions)
  .then((response) => {
    if (response.ok) {
    return response.json(); 
    }else {
      throw new Error ('NETWORK RESPONSE NOT OK');
    }
  })
  .then(function(data) {
    console.log(data);
   displaySentiments(data);
  })
  //.then(function(data) {
   // document.getElementById('results').innerHTML = data.message

  .catch((error) => {
    console.error("FETCH ERROR:", error);
  });
  
 // document.getElementById('agreement').innerHTML=data[0]
  
  function displaySentiments(data)  {
  const agreement= data.agreement;
  const agreeDiv= document.getElementById('agreement');
  agreeDiv.innerHTML= agreement;
  const confidence = data.confidence;
  const confiDiv = document.getElementById('confidence');
  confiDiv.innerHTML=confidence;
  const irony= data.irony;
  const ironDiv= document.getElementById('irony');
  ironDiv.innerHTML=irony;   
  const model= data.model;
  const modelDiv=document.getElementById('model');
  modelDiv.innerHTML=model;  
  const score= data.score_tag;
  const scoreDiv=document.getElementById('score_tag');
  scoreDiv.innerHTML=score; 
  const subject= data.subjectivity;
  const subDiv=document.getElementById('subjectivity');
  subDiv.innerHTML=subject; 
  const text=data.text;
  const textDiv=document.getElementById('text');
  textDiv.innerHTML=text;



 
  }





  /*
const loadData =async() => {
  try { 
  const url= "https://api.meaningcloud.com/sentiment-2.1";
  const response = await fetch(url, requestOptions)
  const data = await response.json()
  return data;
  } catch (err) {
  console.log('error');
  }
  };
  loadData().then((data) => console.log(data));
*/
})}







  export { handleSubmit }

