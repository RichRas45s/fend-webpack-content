const url="https://api.meaningcloud.com/sentiment-2.1"

function handleSubmit(event) {
   // check what text was put into the form field
  let formText = document.getElementById('name').value
  Client.checkForName(formText)
  console.log("::: Form Submitted :::")
   
  const formEl = document.querySelector('.form');
  formEl.addEventListener('submit', event => {
  event.preventDefault();
  const formdata = new FormData(formEl);
  formdata.append("key", process.env.API_KEY);
  formdata.append("txt", "YOUR TEXT HERE");
  formdata.append("lang", "en");  // 2-letter code, like en es fr ...

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  const response = fetch(url, requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));

})}
  
export { handleSubmit }

