function playRound () {
    // your code here!

  function getUserSelection () {
    let goodInput = false;
    let choices = new Set(["rock", "paper", "scissor"]);
    while (!goodInput) {
        var choice = prompt("Enter 'rock', 'paper', or 'scissor': ");
        choice = choice.toLowerCase();
        goodInput = choices.has(choice);
    }
    return choice;
  }

  function getComputerSelection () {
    let index = Math.floor(Math.random() * 3);
    let choices = new Array("rock", "paper", "scissor");
    return choices[index];
  }
   
  let playerSelection = getUserSelection();
  let computerSelection = getComputerSelection();
  if (playerSelection == computerSelection) {
    alert("DRAW: Computer picked " + computerSelection + ", you picked " + playerSelection);
    return 0;
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    alert("WIN: Computer picked " + computerSelection + ", you picked " + playerSelection);
    return 1;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    alert("LOSS: Computer picked " + computerSelection + ", you picked " + playerSelection);
    return -1;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    alert("WIN: Computer picked " + computerSelection + ", you picked " + playerSelection);
    return 1;
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    alert("LOSS: Computer picked " + computerSelection + ", you picked " + playerSelection);
    return -1;
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    alert("WIN: Computer picked " + computerSelection + ", you picked " + playerSelection);
    return 1;
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    alert("LOSS: Computer picked " + computerSelection + ", you picked " + playerSelection);
    return -1;
  }
}

let count = 0;
for (let i = 0; i < 5; i++) {
    count += playRound();
}

if (count > 0) {
    alert("Congratulations!  You beat the computer!")
} else if (count < 0) {
    alert("Sorry, the computer beat you.")
} else {
    alert("it's a tie!")
}
  