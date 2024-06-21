// Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds

function displayNum(n) {
  let interval = setInterval(() => {
    console.log(n);
  }, 2000);
  setTimeout(() => clearInterval(interval), 5000);
}
displayNum(7);
