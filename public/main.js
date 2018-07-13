//user view

let totalSum = 0;
let currentBet = 0;
let winningCup = 0;
let userChoice = 0;
let cpuChoice = 0;


document.getElementById("cup1").onclick = userChoosesCup1
document.getElementById("cup2").onclick = userChoosesCup2
document.getElementById("cup3").onclick = userChoosesCup3

    //function for cup1
    function userChoosesCup1(){
    let cpuChoice = generateWinner();
    whoWon(cpuChoice,"cup1")
    }
    //function for cup 2
    function userChoosesCup2(){
    let cpuChoice = generateWinner();
    whoWon(cpuChoice,"cup2")
    }
    //function for scissors
    function userChoosesCup3(){
    let cpuChoice = generateWinner();
    whoWon(cpuChoice,"cup3")
    }
    // function for random winning cup
    function generateWinner(){
    let random = Math.random();

    if (random < 0.3333){
      winningCup = "cup1";
    } else if(random <= 0.67) {
      winningCup = "cup2";
    }else{
      winningCup = "cup3";
    }
    return winningCup
    }
    //winning conditions
    //function for checking who won
    function whoWon(cpuChoice,userChoice){
    	if(cpuChoice==userChoice){
    		//determine if winner
    		displayCompleteMessage("You Win");
          increasePlayerScore(); //decrease user's money by bet
      //check if you lose
    	}else{
        displayCompleteMessage("You Lose")
        increaseComputerScore(); //increase user's money by bet
      }
    }

    // keeping track when player wins
    function increasePlayerScore(){
      displayCompleteMessage("You're A Winner");
      fetch('casino', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'win': true,
        'bet': currentBet
      })
    })
    totalSum += currentBet
    currentBet = 0
    document.getElementById('currentBet').innerHTML = currentBet ;
    document.getElementById('totalSumDisplay').innerHTML = totalSum ;
    }
    // keeping track when computer wins
    function increaseComputerScore(){
      displayCompleteMessage("Sorry, you're a loser");
      fetch('casino', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'win': false,
        'bet': currentBet
      })

    })
    totalSum -= currentBet
    currentBet = 0
    document.getElementById('currentBet').innerHTML = currentBet ;
    document.getElementById('totalSumDisplay').innerHTML = totalSum ;


    }
    //function for displaying message
    function displayCompleteMessage(msg){
    	document.getElementById("result").innerHTML = msg ;
    }
    // display the result
    function displayResult(msg) {
      document.getElementById('currentBet').innerHTML ;
    }

    // display the choice
    function displayUserSelectionMessage(msg){
      document.getElementById("win").innerHTML;
    }

    function displaycpuChoiceMessage(msg){
      document.getElementById("cpuChoice").innerHTML;
    }



    document.getElementById("submit").onclick = setTotalSum

    function setTotalSum(){
      totalSum = parseInt(document.getElementById('total').value)
      document.getElementById('totalSumDisplay').innerHTML = totalSum
    }


    //increase bet for round
    document.getElementById("bet").onclick = increaseBet

    function increaseBet(){
      currentBet += 5;
      if (currentBet > totalSum){
      currentBet = totalSum;
    }
    document.getElementById('currentBet').innerHTML = currentBet
    }





    //Create userScore variable, create cpuScore variable
//If  user wins, increment userScore by 1
//if computer wins, increment cpuScore by 1
//if it is a tie, dont change either cpuScore or userScore

//Three cups in the dom - 1 cup has a ball underneath
//Cups will shuffle in random order

//user clicks on one cup to reveal if ball is there or not

//if no ball: lose
//bet subtracts from users total money and adds to house pot

//if there is a ball: they win
// bet adds to users total money and subtracts from house pot

//reshuffle cards at start of new round

//end of game: when the user has 0 monies

//backend view
// view of total wins
//view of total losses
