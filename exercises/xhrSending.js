const getBtn = document.querySelector('#get-btn')
const sendBtn = document.querySelector('#send-btn')

const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    // this is an equivalent to saying JSON.parse(xhr.response). Therefore, the data will be parsed to javascript data instead of raw JSON before the request is sent
    xhr.responseType = 'json';

    if (data) {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong!');
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
};

getBtn.addEventListener('click', async () => {
    const response = await sendHttpRequest('GET', 'https://reqres.in/api/users');
    console.log(response)
});
sendBtn.addEventListener('click', async () => {
    try{
        let response = await sendHttpRequest('POST', 'https://reqres.in/api/register', {
            email: 'eve.holt@reqres.in',
            password: 'password'
        })
        console.log(response)
    }
    catch(err){
        console.log(err);
    }  
});