function getComputerSelection () {
  let index = Math.floor(Math.random() * 3);
  let choices = new Array("rock", "paper", "scissor");
  return choices[index];
}
  

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return 0;
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    return 1;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return -1;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return 1;
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    return -1;
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    return 1;
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    return -1;
  }
}

function gameOver (count) {
  var gameOverText = '';
  if (count < 0) {
    gameOverText = "Computer Wins!";
  } else {
    gameOverText = "You Win!";
  }
  alert(gameOverText);
  var resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = "";
  main();
}

function main() {
  var count = 0;
  var container = document.getElementById('container');
  var buttonContainer = document.getElementById('button-container');
  var resultContainer = document.getElementById('result-container');
  var rockButton = document.getElementById('rock');
  var paperButton = document.getElementById('paper');
  var scissorButton = document.getElementById('scissors');
  var resultText = document.createElement('p');
  resultText.textContent = "Please select a button to start the game.  First to 5 wins is the winner.";
  resultContainer.appendChild(resultText);

  var buttons = new Array();

  rockButton.textContent = 'Rock';
  buttons.push(rockButton);
  paperButton.textContent = 'Paper';
  buttons.push(paperButton);
  scissorButton.textContent = 'Scissor';
  buttons.push(scissorButton)

  buttons.forEach(button => button.addEventListener('click', function() {
    
    var playerSelection = button.textContent.toLowerCase();
    console.log("Player picked " + playerSelection);
    var computerSelection = getComputerSelection();
    var x = checkWinner(playerSelection, computerSelection);
    count += x;
    if (x > 0) {
      resultText.textContent = "You Win! Computer picked '" + computerSelection + "' and you picked '" + playerSelection + "'\r\n";
    } else if (x < 0) {
      resultText.textContent = "You Lose! Computer picked '" + computerSelection + "' and you picked '" + playerSelection + "'\r\n";
    } else {
      resultText.textContent = "You Draw! Computer picked '" + computerSelection + "' and you picked '" + playerSelection + "'\r\n";
    }

    if (count > 0) {
      resultText.textContent += "You are in the lead by " + count + " games.\r\n";
    } else if (count < 0) {
      let temp = 0 - count;
      resultText.textContent += "You are behind by " + temp + " games.\r\n";
    } else {
      resultText.textContent += "You are tied on games.\r\n";
    }
    resultContainer.appendChild(resultText);

    if (count >= 5 || count <= -5) {
      gameOver(count);
      count = 0;
    }
    resultContainer.appendChild(resultText);

}));


}

main();

