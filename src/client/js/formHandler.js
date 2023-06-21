function handleSubmit(event) {
   // check what text was put into the form field
  // const formText = document.getElementById('url').value
  // Client.checkForName(formText)
  // console.log("::: Form Submitted :::")
   
  const formEl = document.querySelector('.form');
  formEl.addEventListener('submit', event => {
  event.preventDefault();
  const inputText= document.getElementById('text').value;
  // inputText.innerHTML=('results');
  })
  const formText = document.getElementById('url').value
  if (Client.checkForName(formText)) {
    fetch("http://localhost:8081/api", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url: formText })
    }).then(res => res.json())
        .then(function (res) {
            document.getElementById('score_tag').innerHTML = "Score Tag : " + res.score_tag
            document.getElementById('confidence').innerHTML = "Agreement : " + res.confidence
            document.getElementById('agreement').innerHTML = "Confidence : " + res.agreement
            document.getElementById('subjectivity').innerHTML = "Subjectivity : " + res.subjectivity
            document.getElementById('resultSection').className = ""
        })
}}
  
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

