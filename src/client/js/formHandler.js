const url="https://api.meaningcloud.com/sentiment-2.1"

function handleSubmit(event) {
   // check what text was put into the form field
  let formText = document.getElementById('url').value
  Client.checkForName(formText)
  console.log("::: Form Submitted :::")
   
  const formEl = document.querySelector('.form');
  formEl.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(formEl);
  const data = Object.fromEntries (formData)
  console.log(formData);

  formData.append("key", process.env.API_KEY);
  formData.append("txt", "YOUR TEXT HERE");
  formData.append("lang", "en");  // 2-letter code, like en es fr ...

const requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow'
  };
  const response = fetch(url, requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json(data)
 }))

  //.then(({ status, body }) => console.log(status, body))

  .then(function(data) {
    document.getElementById('results').innerHTML = data.formData
  })
  .catch(error => console.log('error', error));
  

})}

  


export { handleSubmit }

