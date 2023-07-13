 function handleSubmit(event) {
    event.preventDefault(); //stop page from reloading
    
    let formText = document.getElementById('name').value
  // if (Client.checkForName(formText)) {
    Client.checkForName(formText)
    console.log("::: Form Submitted :::")
    
  // const formEl = document.querySelector('.form') 
 
  //  formEl.addEventListener('submit',  event => {
  //     const formData = new FormData(formEl);
  //     // const data = Object.fromEntries (formData)
  //       // console.log(formData);
  //     const inputText= document.getElementById('text').value;
  // inputText.innerHTML=('results');
 
    //  formData.append("key", `${process.env.API_KEY}`);
    //  formData.append("txt", inputText);
    //  formData.append("lang", "en");  // 2-letter code, like en es fr ...

    //  const requestOptions = {
    //   method: 'POST',
    //   body: formData,
    //   redirect: 'follow'
    // };
    fetch('http://localhost:8081/sentiment')
    .then(res => res.json())
    .then(function(data) {
        document.getElementById('agreement').innerHTML = "Agreement : " + data.agreement
        document.getElementById('subjectivity').innerHTML = "Subjectivity : " + data.subjectivity
        document.getElementById('confidence').innerHTML = "Confidence : " +  data.confidence
        document.getElementById('irony').innerHTML = "Irony : " +  data.irony
        document.getElementById('model').innerHTML = "Model : " +  data.model
        document.getElementById('score_tag').innerHTML = "Score_Tag : " +  data.score_tag

    })
}

//  await fetch('http://localhost:8081/sentiment') //requestOptions)
//   .then(res => res.json())
//   .then(function(res) {
//       document.getElementById('results').innerHTML = res.message
//   })
// },
  
      
      
      
      // .then(res => res.json())
      // .then(function (data) {
      //       document.getElementById('results').innerHTML = data.message
      //       document.getElementById('agreement').innerHTML = "Agreement : " + data.agreement
      //       document.getElementById('confidence').innerHTML = "Confidence : " + data.confidence
           
      //   })
    // }}

  // )}
  
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
  // )}

export { handleSubmit }

