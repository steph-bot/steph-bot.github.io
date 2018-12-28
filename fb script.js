var database = [			 // array (list)
    {							// element 0
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];
    
var newsFeed = [			// array (list)
    {							// element 0
        username: "Bobby",
        timeline: "So tired from school!"
    },
    {							// element 1
        username: "Sally",
        timeline: "Javascript is lit"
    }
];

var userNamePrompt = prompt("Enter username >> hint: andrei");
var passwordPrompt = prompt("Enter password >> hint: supersecret");

function isUserValid(user, pass) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === user &&
            database[i].password === pass) {
            return true; // return true if un/pw in db
        }
    }
    return false; // return false if un/pw not in db
}

function signIn(user, pass) {   // funxn declaration
    if (isUserValid(user,pass)){
        alert("Welcome to FakeBook!");
        console.log(newsFeed);
    } else {
        alert("Sorry, username/pw incorrect.");
    }
}
//     if (user === database[0].username && // element 0 of array
//         pass === database[0].password) { // element 0 of array
//         console.log(newsFeed);
//     } else {
//         alert("Sorry, username/pw incorrect.");
//     }
// }

signIn(userNamePrompt, passwordPrompt);


