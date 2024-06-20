function fetchData(){
  let response = fetch("https://jsonplaceholder.typicode.com/posts");
  //console.log(response);
  response.then(value=>{
    return value.json()
  }).then(data=>{
    console.log(data)
  })
}
fetchData()