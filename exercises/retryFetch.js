// Create a function that performs an API request with exponential backoff retry strategy.

async function retryingFetch(
  url,
  retries = 3,
  initialDelay = 100
) {
  let attempt = 1;
  while (attempt <= retries) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      return response;
    } catch (error) {
      console.warn(`Attempt ${attempt} failed: ${error.message}`);
      const delay = Math.min(2 ** attempt * initialDelay, 1000);
      await new Promise((resolve) => setTimeout(resolve, delay));
      attempt++;
    }
  }
  throw new Error("API request failed after all retries");
}

const url = 'https://api.artic.edu/api/v1/artworks';

retryingFetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
})
  .catch(error => console.error('Failed to fetch data:', error));

  