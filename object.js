var user = {
    name: "hari",
    age: 34,
    hobby:"reading",
    ismarried: false,
    spells: ["abrakabadra","choomantar","shazam"],
    shout: function(){
        console.log("ahhhhh!");
    }

};

var list = [
    {
        username: "hari",
        password:"sec123"
    },
    {
        username: "ram",
        password: "sec1234"
    }
];


///user.spells[1];   //---choomantar

//list[0].password; // ----'sec123'


//null 
nullobj.name = "andy"; //its gave null


//empty 
emptyobj.name = "hello"; // its gave empty 


//exercise of object...

// 1. Create an object that has properties "username" and
// "password". Fill those values in with strings.


var facebook = {
    username: "user",
    password: "user123"
};


// 2. Create an array which contains the object you have made
// above and name the array "database"

var database = [{
    username: "user",
    password: "user123"
}];

// 3. Create an array called "newsfeed" which 
//contains 3 objects with properties "username" and "timeline".

var facebook = {
    username: "user",
    password: "user123",
    database:["username","password"],
    newfeed:[{
        username:"hai",
        timeline:"hey enter your id"
    },
{
    username2: "hariram",
    timeline:"hey enter your password"
},
{
    username3: "hariram",
    timeline:"hey enter your password and username"

}]
};

