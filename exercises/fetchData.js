// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises

async function fetchData(urls) {
  
    const p1resp = await fetch(urls[0]);
    const p2resp = await fetch(urls[1]);
    const p3resp = await fetch(urls[2]);
    
    let res = await Promise.all([p1resp,p2resp,p3resp].map(pr => pr.json()))
    //console.log(res)
    return res
  
}
const apiUrls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/albums",
];
let datas;
let result = fetchData(apiUrls)
  .then(res => {
    // console.log(res)
    datas = res
  })
  .catch(err => {
    console.log(err);
  })
// .then(values => {
//   console.log('first text',values)
// })
//console.log(datas);
  let data = document.querySelector('#content');
  let list = document.createElement('p')
  list.textContent = datas;
  data.appendChild(list);

// console.log('more text',values);

