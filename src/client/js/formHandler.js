 function handleSubmit(event) {
    event.preventDefault();

  const formEl = document.querySelector('.form');
  formEl.addEventListener('submit', event => {
  
  const inputText= document.getElementById('text').value;
  // inputText.innerHTML=('results');
  })
 const formText = document.getElementById('url').value
  if (Client.checkForName(formText)) {
      console.log("::: Form Submitted :::")
       fetch("http://localhost:8081/sentiment")       
      .then(res => res.json())
      .then(function (data) {
            document.getElementById('results').innerHTML = data.message
            document.getElementById('agreement').innerHTML = "Agreement : " + data.agreement
            document.getElementById('confidence').innerHTML = "Confidence : " + data.confidence
           
            // document.getElementById('resultSection').className = ""
        })
    }};
  
//   function displaySentiments(data)  {
//   const agreement= data.agreement;
//   const agreeDiv= document.getElementById('agreement');
//   agreeDiv.innerHTML= agreement;
//   const confidence = data.confidence;
//   const confiDiv = document.getElementById('confidence');
//   confiDiv.innerHTML=confidence;
//   const irony= data.irony;
//   const ironDiv= document.getElementById('irony');
//   ironDiv.innerHTML=irony;   
//   const model= data.model;
//   const modelDiv=document.getElementById('model');
//   modelDiv.innerHTML=model;  
//   const score= data.score_tag;
//   const scoreDiv=document.getElementById('score_tag');
//   scoreDiv.innerHTML=score; 
//   const subject= data.subjectivity;
//   const subDiv=document.getElementById('subjectivity');
//   subDiv.innerHTML=subject; 
//   const text=data.text;
//   const textDiv=document.getElementById('text');
//   textDiv.innerHTML=text;
// }
// })}

export { handleSubmit }

