// Write a JavaScript program that converts a callback-based function to a Promise-based function.

function callbackBasedFunction(callback){
    callback();
}

function mycallback(){
    console.log('callback fired');
}
function convertToPromise(callbackBased){
    return new Promise((resolve)=> {
        let result = callbackBased();
        resolve(result)
    })
    .then((value)=> {
        console.log(value);
    });
}
convertToPromise(callbackBasedFunction(mycallback))