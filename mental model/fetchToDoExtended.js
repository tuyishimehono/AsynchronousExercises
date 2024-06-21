// 5. Extend the `fetchToDo` function from Question 4 to include custom headers in the request. Specifically, you need to add a User-Agent header with a custom value and a Content-Type header set to application/json. Additionally, modify the function to send a JSON payload in the request body. After sending the request, the function should parse the JSON response and log the parsed object to the console.

function fetchToDo() {
    let request = new XMLHttpRequest();
    request.open("POST", "https://jsonplaceholder.typicode.com/todos", true);
  
    request.setRequestHeader("User-Agent", "Custom-value");
    request.setRequestHeader("Content-Type", "application/json");
    let payload = {
      title: "Task",
      completed: false,
      userId: 1,
    };
    const jsonData = JSON.stringify(payload);
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          let data = JSON.parse(request.response);
          console.log(data);
        } else console.log("Error loading");
      }
    });
    request.onerror = () => {
      console.log("Network error");
    };
    request.send(jsonData);
  }
  fetchToDo();
  