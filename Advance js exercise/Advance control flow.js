//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

var experiencePoints = winBattle? 10:1;
//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster"; // undefiened
        case "back":
            whatHappens = "you arrived home"; //you areived home
            break;
            break;
        case "right":
            return whatHappens = "you found a river"; // return "you found a river";
            break;
        case "left":
            break;
             whatHappens = "you run into a troll";    //undefined
            break;
        default:
            whatHappens = "please enter a valid direction";       
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");

//#3 return value when moveCommand("back");

//#4 return value when moveCommand("right");

//#5 return value when moveCommand("left");

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function travel(country){
    var cities;
    switch(country){
        case "america":
            place = "go and visit america white house";
            break;

            case "autralia":
                place = "go visit kangaroos in zoo";
                break;

                case "zakarta":
                    place = "go and see the sea";
                    break;
                    default:
                        place = "you didnt like any of this place";
    }
    return place;
}