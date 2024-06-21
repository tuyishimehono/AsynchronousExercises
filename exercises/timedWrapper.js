// Implement a simple timeout wrapper for a Promise that rejects if the Promise does not resolve within a specified time.

function withTimeout(promise) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Promise timed out"));
    }, 3000);

    promise.then(resolve, (error) => {
      clearTimeout(timer);
      reject(error);
    });
  });
}

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data retrieved successfully!"), 3000);
});

withTimeout(myPromise)
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error.message));
