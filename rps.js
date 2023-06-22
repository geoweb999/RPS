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
  

function checkWinner(playerSelection, computerSelection) {
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

var container = document.getElementById('container');

var rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
rockButton.addEventListener('click', function() {
  playerSelection = 'rock';
  console.log('Player selected: rock');
  computerSelection = getComputerSelection();
  console.log('computer selected' + computerSelection);
  let x = checkWinner(playerSelection, computerSelection);

});

// Create the paper button
var paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
rockButton.addEventListener('click', function() {
  playerSelection = 'paper';
  console.log('Player selected: rock');
  computerSelection = getComputerSelection();

});

// Create the scissors button
var scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
rockButton.addEventListener('click', function() {
  playerSelection = 'scissor';
  console.log('Player selected: rock');
  computerSelection = getComputerSelection();

});

// Append the buttons to the container
container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);


