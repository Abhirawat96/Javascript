var todos = [
    "clean room",
    "brush teeth",
    "wash clothes",
    "bath at noon",
];
var todoslength = todos.length;
// for(var i=0; i < todos.length; i++){
//     //console.log(i)
//    // todos[i]=todos[i] + "!";
//    todos.pop();

// }
 

//while///

var counterOne = 0;
while(counterOne < 10){
    console.log(counterOne);
    counterOne++
}

//reverse thee number
var counterOne = 10;
while(counterOne > 0){
    console.log("while",counterOne);
    counterOne--;
}

var counterTwo = 10;
do{
    console.log("do while",counterTwo);
    counterTwo--;
}while(counterTwo > 0);


///for each (ES5)
 

var todos = [
    "clean room",
    "brush teeth",
    "wash clothes",
    "bath at noon",
];
var todoslength = todos.length;
for(var i=0; i < todos.length; i++){
    console.log(i);
}
todos.forEach(function(i){

    console.log(i)
})


//exercise of building facebook 2//
var database =[{
    username: "ram",
    password:"ram123"
 },
{
    username: "ramesh",
    password:"ram1234"  
},
{
    username: "ramu  ",
    password:"ram12345"
}]; 

 var newsfeed = [{
    username:"hari",
    timeline:"i am loving this course"
 },
{
    username:"hariram",
    timeline:"i am tired of this js"
},
{
    username:"hariramu",
    timeline:"i am tired of this js i need new "
},
];
function isUserValid(username,password){
    for(let i =0;i<database.length;i++){
        if(database[i].username===username && 
            database[id].password===password){
                return true;
            }
    }
    return false;
}

 function signIn(username,password){
    console.log(isUserValid(username,password));

    // for(let i=0;i<database.length;i++){
    //     if(database[i].username === username &&
    //         database[i].password === password){
    //             console.log(newsfeed);
                 
    //         }else{
    //             alert("sorry wrong details");  
    //         }
    }
    // if(user === database[0].username && 
    //     pass === database[0].password){
    //         console.log(newsfeed);
    //     }else{
    //         alert("sorry wrong detials");
    //     } 

 
 
var usernameprompt = prompt("enter the usernamne");
var passwordprompt = prompt("enter the password");

 signIn(usernameprompt,passwordprompt);
