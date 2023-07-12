 function handleSubmit(event) {
    event.preventDefault(); //stop page from reloading
    
    const formText = document.getElementById('name').value
  if (Client.checkForName(formText)) {
  console.log("::: Form Submitted :::")
    
  const formEl = document.querySelector('.form') 
 
   formEl.addEventListener('submit', async event => {
      const formData = new FormData(formEl);
      const data = Object.fromEntries (formData)
        // console.log(formData);
      const inputText= document.getElementById('text').value;
  // inputText.innerHTML=('results');
 
  // formData.append("key", `${process.env.API_KEY}`);
     formData.append("txt", inputText);
     formData.append("lang", "en");  // 2-letter code, like en es fr ...

  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.strigify(formData),
   
  };
  
  const response = await fetch('http://localhost:8081/sentiment', requestOptions)
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

 
   .catch((error) => {
       console.log('not Available young lord');
      })   
    },

  
      
      
      
      // .then(res => res.json())
      // .then(function (data) {
      //       document.getElementById('results').innerHTML = data.message
      //       document.getElementById('agreement').innerHTML = "Agreement : " + data.agreement
      //       document.getElementById('confidence').innerHTML = "Confidence : " + data.confidence
           
      //   })
    // }}

  // )}
  
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
  )}}

export { handleSubmit }

