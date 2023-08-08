var database =[{
    username: "ram",
    password:"ram123"
 }]; 

 var newsfeed = [{
    username:"hari",
    timeline:"i am loving this course"
 },
{
    username:"hariram",
    timeline:"i am tired of this js"
}];

var usernameprompt = prompt("enter the usernamne");
var passwordprompt = prompt("enter the password");
 function signIn(user,pass){
    if(user === database[0].username && 
        pass === database[0].password){
            console.log(newsfeed);
        }else{
            alert("sorry wrong detials");
        } 

 }
 signIn(usernameprompt,passwordprompt);

