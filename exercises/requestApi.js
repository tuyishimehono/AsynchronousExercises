//Write a function that makes an asynchronous request using `XMLHttpRequest` and logs the response
function requestApi() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  request.send();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        //console.log(request.response);
        let data = JSON.parse(request.response);
        console.log(data);
        data.map((e) => {
          console.log(e.title);
        });
      }
    }
  });
}
requestApi();
