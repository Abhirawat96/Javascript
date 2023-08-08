//function declaration////


// function fname(ram){
//     console.log("hey ram");
//  }
//  fname();

 //function exprrsssion//

//  let a = function(){     ///anonymous function
//     console.log("hiii")
//  }
//  a();


//  function sing(){
//     console.log("aaaaaaaaaa");
//     console.log("taaaaaaaaaaaa");
//  }
//  sing();




//adding argument to function///
//  function sing(song){
//     console.log(song);
//  }
//  sing("aaaaaaaa");
//  sing("fadfsdfd");



//  function multiply(a,b){
//       return  a * b;
   
//  }
//  multiply(5,10);


//  function add(a,b){
//     if( a > 10 || b > 10){
//         return "thats so hard";
//     }else{
//         return a+b;
//     }
//  }
//  add(5,10); 


 //exercise on function//
// function checKdriverAge(){
//     var age = prompt("enter the age");
//     if(Number(age)< 18){
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if(Number(age)>18){
//         alert("Powering On. Enjoy the ride!");

//     }else if(Number(age)===18){
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }

// checKdriverAge();


//2.solve above problem using function exprrsssion//
var checKdriverAge2 = function(){
    var age = prompt("enter the age");
    if(Number(age)< 18){
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if(Number(age)>18){
        alert("Powering On. Enjoy the ride!");

    }else if(Number(age)===18){
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

checKdriverAge2();


//3.
function checKdriverAge2(age){

    if(Number(age)< 18){
        return "Sorry, you are too yound to drive this car. Powering off";
    } else if(Number(age)>18){
         return "Powering On. Enjoy the ride!";

    }else if(Number(age)===18){
       return "Congratulations on your first year of driving. Enjoy the ride!";
    }
}

checKdriverAge2(92);