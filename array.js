var list = ["tige","cat","bird","bat"];
console.log(list);


var list = [
    ["tige","cat","bird","bat"]
];

console.log(list[0][2]); //answwer will be bird

list.shift(); ///tiger

//list = ["cat","bird","bat"]

list.push("dog"); //list =["cat","bird","bat","dog"]
 list.pop("dog"); //list =   ["cat","bird","bat"]
list.concat(["bee","boo"]); //["cat","bird","bat","bee","boo"]
 list.sort() // list = ["bird","bat"]


 //erxercise on array ///

 var array = ["Banana", "Apples", "Oranges", "Blueberries"];

 // 1. Remove the Banana from the array.
 array.splice(0,1); //list = ["Apples", "Oranges", "Blueberries"];


// 2. Sort the array in order.
array.sort(); // list = ["Apples",  "Blueberries","Oranges"];


 // 3. Put "Kiwi" at the end of the array.
 array.push("kiwi");  // list = ["Apples", "Oranges", "Blueberries","kiwi"];


// 4. Remove "Apples" from the array.
array.slice(1);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
 array.reverse();

 using this array,
 // var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
 // access "Oranges".
