function some(callback){
    setTimeout(callback, 2000)
}
function mycallback(){
    console.log("callback fired");
}
some(mycallback);