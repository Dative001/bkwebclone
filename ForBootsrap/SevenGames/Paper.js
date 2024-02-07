const ComputerChoiceDisplay= document.getElementById("Computer-choice")
const UserChoiceDisplay= document.getElementById("User-choice")
const ResultDisplay= document.getElementById("Result")
const PossibleChoices= document.querySelectorAll("button")
let UserChoice
let ComputerChoice
let Result

PossibleChoices.forEach(PossibleChoice=> PossibleChoice.addEventListener("click",(e)=> {
    UserChoice=e.target.id
    UserChoiceDisplay.innerHTML=UserChoice
    generateComputerChoice()
    getResult()
}))
function generateComputerChoice(){
    const randomNumber= Math.floor(Math.random()*PossibleChoices.length)+1 //all use*3 
    if(randomNumber==1){
        ComputerChoice='rock'
    }
 if(randomNumber==2){
        ComputerChoice='paper'
    }
if(randomNumber==3){
    ComputerChoice='scissor'
}
ResultDisplay.innerHTML=Result
}
function getResult(){
    if(ComputerChoice==UserChoice){
        Result='its a draw'
    }
    if(ComputerChoice== 'rock'&& UserChoice=='paper'){
        Result='you win'
    }
    if(ComputerChoice== 'rock'&& UserChoice=='scissors'){
        Result='you loose'
    }
    if(ComputerChoice== 'paper'&& UserChoice=='rock'){
        Result='you loose'
    }
    if(ComputerChoice== 'paper'&& UserChoice=='scissors'){
        Result='you win'
    }
if(ComputerChoice== 'scissors'&& UserChoice=='rock'){
    Result='you win'
}
if(ComputerChoice== 'scissors'&& UserChoice=='paper'){
    Result='you loose'
}

}
