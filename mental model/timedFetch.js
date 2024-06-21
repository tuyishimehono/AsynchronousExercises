// Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms

async function timedFetch(url) {
    let controller = new AbortController();
    setTimeout(() => controller.abort(), 10);
    try {
      let response = await fetch(url, {
        signal: controller.signal,
      });
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      return response;
    } catch (err) {
      if (err.name == "AbortError") {
        console.log("Aborted!");
      } else {
        throw err;
      }
    }
  }
  
  timedFetch("https://api.artic.edu/api/v1/artworks").then((data) => {
    console.log(data);
  });
  
  