var database = [			 // array (list)
    {							// element 0
        username: "andrei",
        password: "supersecret"
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

function signIn(user, pass) {   // funxn declaration
    if (user === database[0].username && // element 0 of array
        pass === database[0].password) { // element 0 of array
        console.log(newsFeed);
    } else {
        alert("Sorry, username/pw incorrect.");
    }
}

signIn(userNamePrompt, passwordPrompt);
