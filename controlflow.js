//JS Conditionals//
// if -->
//  else if -->
// ternary operator -->
// switch -->
// var name = "hari";
// if(name === "hari"){
//   alert("hi hari!");
// }


// if else //
// var names = "hariram";
// if(names === "hariram"){
//   alert("hello hariram!");
// }else{
//   alert("who are you");
// } // in this case if condition run


// var names = "ram";
// if(names === "hariram"){
//   alert("hello hariram!");
// }else{
//   alert("who are you");
/ // in this case else condition run


//else if //

// var food = "biryani";
// if(food === "biryani"){
//   alert("hey les eat biryani");
// }else if(food === "plain rice"){
//   alert("oh no we have plain rice");
// }else{
//   alert("we have no food");
// }
  
 

//javascript logical operators//  

//&&
//||
//!
// if(name === "hari" || name ==="dev"){
//   alert("hi hari or dev");
// }


// if(!(name === "bob")) {
//   alert("hi bob");
// }

// !true = false
// !false= true

///Exercise of control flow//

let age = prompt("enter your age for driving the car");
if(age < 18){
  alert("Sorry, you are too young to drive this car. Powering off");
}else if(age = 18){
  alert( "Congratulations on your first year of driving. Enjoy the ride!");
}else if(age >18){
  alert("Powering On. Enjoy the ride!");
}else{
  alert("you can not drive thi car");
}