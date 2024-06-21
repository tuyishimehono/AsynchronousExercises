// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

async function retryingFetch(url, retries = 3) {
    let attempt = 1;
    while (attempt <= retries) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        return response;
      } catch (error) {
        console.log(`Attempt ${attempt} failed: ${error.message}`);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        attempt++;
      }
    }
    throw new Error("API request failed after all retries");
  }
  
  const url = "https://jsonplacceholder.typicode.com/posts";
  retryingFetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Failed to fetch data:", error));