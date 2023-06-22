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

function main() {
  var count = 0;
  var container = document.getElementById('container');
  var buttons = new Array();

  var rockButton = document.createElement('button');
  rockButton.textContent = 'Rock';

  buttons.push(rockButton);

  var paperButton = document.createElement('button');
  paperButton.textContent = 'Paper';

  buttons.push(paperButton);

  var scissorButton = document.createElement('button');
  scissorButton.textContent = 'Scissor';

  buttons.push(scissorButton)

  buttons.forEach(button => button.addEventListener('click', function() {
    playerSelection = button.textContent.toLowerCase();
    computerSelection = getComputerSelection();
    var x = checkWinner(playerSelection, computerSelection);
    var resultText = document.createElement('p');
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
    if (count >= 5 || count <= -5) {
      resultText.textContent += "GAME OVER!\r\n";
      container.appendChild(resultText);
      return;
    }
    container.appendChild(resultText);

  }));



  // Append the buttons to the container
  container.appendChild(rockButton);
  container.appendChild(paperButton);
  container.appendChild(scissorButton);
}

main();

