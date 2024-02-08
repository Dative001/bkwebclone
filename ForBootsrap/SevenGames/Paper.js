const playerText= document.querySelector("#playerText");
const computerText= document.querySelector("#computerText");
const resultText= document.querySelector("#resultText");
const choiceBtn= document.querySelectorAll(".choiceBtn")
let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click",() =>{
    player=button.textContent;
 computerChoice();
    player.textContent= 'player:${player}';
   computer.textContent= 'computer:${computer}';
   result.textContent= checkWinner();
}));
function ComputerChoice(){

    const randomNumber= Math.floor(Math.random()*3)+1 
 switch(randomNumber){
  case 1: 
  computer="Rock";
  break;
  case 2:
    computer="Paper";
    break;
    case 3:
        computer="Scissors";
        break;
 }
}  
function checkWinner(){
    if(player== computer){
        return"draw!";
    }
    else if( computer=="Rock"){
        return (player=="Paper")? "You win!": "You lose!"
    }

    else if( computer=="Paper"){
        return (player=="Scissors")? "You win!": "You lose!"
    }
    else if( computer=="Scissors"){
        return (player=="Rock")? "You win!": "You lose!"
    }
  }
