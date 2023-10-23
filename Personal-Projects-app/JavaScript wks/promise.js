const promise = new Promise ((resolve, reject) => { 
    if (true) { 
      resolve('Stuff Worked');
    } else { 
      reject('Error, it broke')
    }
})


promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('error!'))
    .then(result3 => { 
        console.log(result3 + '!');
    })

const urls = [ 
    'http://jsonplaceholder.typicode.com/users',
    'http://jsonplaceholder.typicode.com/posts',
    'http://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => { 
    return fetch(url).then(resp=> resp.json())
})).then(result => { 
  console.log(result[0])
  console.log(results[1])
  console.log(results[2])
}).catch(() => console.log('error'))