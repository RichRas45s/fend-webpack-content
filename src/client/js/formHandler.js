

 function handleSubmit(event) {
    event.preventDefault(); //stop page from reloading
    
    const formText = document.getElementById('name').value
  // if (Client.checkForName(formText)) {
    Client.checkForName(formText)
    // console.log("::: Form Submitted :::")
    console.log(formText);
    
    // const form = document.querySelector('.form');
    // // const inputText= document.getElementById('text').value;
    // form.addEventListener('submit',  event => {
    // event.preventDefault();
       
    // const fd = new FormData(form);
    // const urlEncoded = new URLSearchParams(fd).toString()
    
    //  fd.append("key", `${process.env.API_KEY}`);
    //  fd.append("txt", inputText);
    //  fd.append("lang", "en");  // 2-letter code, like en es fr ...

    //  const requestOptions = {
    //   method: 'POST',
    //   body: formData,
    //   redirect: 'follow'
    // };

        fetch('http://localhost:8081/sentiment', {
          method: 'POST',
          headers: {
          //   'Content-type': 'application/x-www-form-urlencoded'
                 'Content-type': 'application/json'
             },
          body: JSON.stringify({ text: formText })


        })
        .then(res => res.json())
        .then(function(data) {
        document.getElementById('text').innerHTML = "You Wrote : "  + formText
        document.getElementById('agreement').innerHTML = "Agreement : " + data.agreement
        document.getElementById('subjectivity').innerHTML = "Subjectivity : " + data.subjectivity
        document.getElementById('confidence').innerHTML = "Confidence : " +  data.confidence
        document.getElementById('irony').innerHTML = "Irony : " +  data.irony
        document.getElementById('model').innerHTML = "Model : " +  data.model
        document.getElementById('score_tag').innerHTML = "Score_Tag : " +  data.score_tag

    })

    //   }

        
    // }



//     fetch('http://localhost:8081/sentiment')
//     .then(res => res.json())
//     .then(function(data) {
//         document.getElementById('agreement').innerHTML = "Agreement : " + data.agreement
//         document.getElementById('subjectivity').innerHTML = "Subjectivity : " + data.subjectivity
//         document.getElementById('confidence').innerHTML = "Confidence : " +  data.confidence
//         document.getElementById('irony').innerHTML = "Irony : " +  data.irony
//         document.getElementById('model').innerHTML = "Model : " +  data.model
//         document.getElementById('score_tag').innerHTML = "Score_Tag : " +  data.score_tag

//     })
}
    // )}


export { handleSubmit }

