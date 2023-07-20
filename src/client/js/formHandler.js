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



export { handleSubmit }

