var userChoice = prompt("Do you choose rock, paper or scissor?");
console.log("User: " + userChoice);
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 


var compare = function (choice1,choice2) {  
    
    if( choice1 != "paper" & "scissor" & "rock"){
        console.log("Please choose either rock, scissor, or paper");
        
        }
    
    
    else {
    
    if (choice1 === choice2){
        console.log( "Computer: " + computerChoice);
        return "The result is a tie!";
        
    }
    if (choice1 === "rock") {
        if (choice2 ==="scissors") {
            console.log( "Computer: " + computerChoice);
            return "rock wins";
        } else {
            console.log( "Computer: " + computerChoice);
            return "paper wins";
        }
    }
    if (choice1 === "paper"){
        if (choice2 === "rock"){
            console.log( "Computer: " + computerChoice);
            return "paper wins";
        } else {
            console.log( "Computer: " + computerChoice);
            return "scissors wins";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 ==="paper"){
            console.log( "Computer: " + computerChoice);
            return "scissors wins";
        } else {
            console.log( "Computer: " + computerChoice);
            return "rock wins";
        }
    }
    }
    
};

//this call the function
compare(userChoice,computerChoice);