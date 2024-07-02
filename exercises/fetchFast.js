function getFastPosts(){
    const p1 = fetch('https://dummyjson.com/posts')
    const p2 = fetch('https://this-may-not-exist.com/posts')
    const p3 = fetch('https://jsonplaceholder.typicode.com/posts')

    return Promise.any([p1,p2,p3]).then(data => data.json())
}

getFastPosts().then(results => {
    console.log(results)
})
.catch(err => {
    console.log('Error', err)
})