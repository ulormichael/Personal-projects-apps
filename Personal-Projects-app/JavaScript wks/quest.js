// ASYNC AWAIT

const urls = [ 
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => 
    fetch(url).then(resp => resp.json())
)).then(array => { 
    console.log('users', array[0])
    console.log('posta', array[1])
    console.log('albums', array[2])
}).catch('oops');

const getData = async function() { 
    const [ users, posts, albums ] = await Promise.all(urls.map(url => 
        fetch(url).then(resp => resp.json())
    ))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
}






// // ASYNC AWAIT

// async function fetchUsers() { 
//     const resp = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await resp.json();
//     console.log(data);
// }

// function find_max(nums) { 
//     let max_num = Number,NEGATIVE_INFINITY; 
//     //smaller than all other numbers
//     for (let num of nums) { 
//         if (num > max_num) { 
//             // (Fill in the missing line here)
//         }
//     }
//     return max_num;
// }