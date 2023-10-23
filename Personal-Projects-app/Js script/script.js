var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        timeline: "123"
    },
    {
        username: "ingrid",
        timeline: "777"
    }
];

var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is soo good!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is soo very good!"
    }
];

function signIn(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username && 
            database[i].password === password) {
            return true;
        }
    }
    return false;
}
    
function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

var userNamePrompt = prompt("what\'s your username?");
var passwordPrompt = prompt("what\'s your password");

signIn(userNamePrompt, passwordPrompt);