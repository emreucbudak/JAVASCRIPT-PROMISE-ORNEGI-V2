function deneme (url) {
  return new Promise ((resolve,reject) => {
    const a = new XMLHttpRequest();
    try {
      a.onreadystatechange = (() => {
        if (a.readyState ===4 && a.status === 200) {
          resolve(a.responseText)
        }
      })
      a.open("GET", url)
      a.send();
    } catch (error) {
      reject(error);
      
    }
  })
}
deneme("https://jsonplaceholder.typicode.com/comments")
.then((result) => {
  console.log(result);
  
}).catch((err) => {
  console.log(err);
  
});