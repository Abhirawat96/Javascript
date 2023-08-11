// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  
  const  reducearr = array.reduce(function(accumulator,item){
    return accumulator+item.score},0);
    console.log(reducearr);
  
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  const newarr = [];
  const array2 = array.forEach(function(item,index,arr){
    newArray[index]= item.username + '!';
  })
  console.log(newarr);
  
  
  
  
  //Create an array using map that has all the usernames with a "? to each of the usernames
  
  
  const mapArray = array.map(function(item) {
    return item.username + "?";
  });
  
  
  
  //Filter the array to only include users who are on team: red
  
  const filterearr = array.filter(function(item){
    return item.team === red;
  });
  console.log(filterearr);
  
  
  //Find out the total score of all users using reduce
  
  const  reducearr = array.reduce(function(accumulator,score){
    return accumulator*score});
    console.log(reducearr);
  
  
  
  // (1), what is the value of i?
  const arrayNum = [1, 2, 4, 5, 8, 9];
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => {
      console.log(num, i);
      alert(num);
      return num * 2;
  })
  
  ///////////
  const arrayNum1 = [1, 2, 4, 5, 8, 9];
  const newArray2 = arrayNum.map((num) => {
  return num * 2;
  })
  console.log(newArray2);
  
  
  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.


  const arr = [
    {
        username: "harry",
        age: 35,
        gender: "male"
    }
  ]
  