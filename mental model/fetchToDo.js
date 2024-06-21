/** 4. Write a JavaScript function `fetchToDo` that uses XMLHttpRequest to fetch data from the given URL
 *  (https://jsonplaceholder.typicode.com/todos/1). The function should handle both successful responses
 *  and errors (such as network issues or invalid URLs). Upon receiving a successful response, it should log the
 *  fetched data to the console. If there's an error, it should catch the error and log an appropriate message. 
 */

function fetchToDo(){
    let request = new XMLHttpRequest()
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    request.send();

    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4){
            if(request.status === 200){
                let data = JSON.parse(request.response);
                console.log(data)
            }
            else console.log('Error loading')
        } 
    })
}
fetchToDo()