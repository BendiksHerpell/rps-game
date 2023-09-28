const picks = ['Rock','Paper','Scissor'];
let scorePlayer = 0;
let scoreComputer = 0;
    
document.getElementById('rock').addEventListener("click", forRock);
document.getElementById('paper').addEventListener("click", forPaper);
document.getElementById('scissor').addEventListener("click", forScissor);   
   
function getComputerChoice() {
    return picks[Math.floor(Math.random()*picks.length)];
    }
//ROCK FUNCTION  
function caseRock(pick) {
    document.getElementById("playerWeapon").innerText = "👊";
    if(pick==='Rock'){
        document.getElementById("subText").innerText = "It's a tie!";
        document.getElementById("rules").innerText = "Rock ties with Rock";
        document.getElementById("computerWeapon").innerText = "👊";
    }else if(pick==='Paper'){
        document.getElementById("subText").innerText = "You lost!";
        document.getElementById("rules").innerText = "Paper wraps Rock";
        document.getElementById("computerWeapon").innerText = "✋";
        scoreComputer = scoreComputer+1;
    }else if(pick==='Scissor'){
        document.getElementById("subText").innerText = "You won!";
        document.getElementById("rules").innerText = "Rock beats Scissor";
        document.getElementById("computerWeapon").innerText = "✌️";
        scorePlayer = scorePlayer + 1;
    }
    document.getElementById("playerPoints").innerText = 'Player: '+scorePlayer;
    document.getElementById("computerPoints").innerText = 'Computer: '+scoreComputer;
}
    
function forRock() {
    const computerPick = getComputerChoice();
    caseRock(computerPick);
}   
  
 //PAPER FUNCTION
 function casePaper(pick) {
    document.getElementById("playerWeapon").innerText = "✋";
    if(pick==='Paper'){
        document.getElementById("subText").innerText = "It's a tie!";
        document.getElementById("rules").innerText = "Paper ties with Paper";
        document.getElementById("computerWeapon").innerText = "✋";
    }else if(pick==='Scissor'){
        document.getElementById("subText").innerText = "You lost!";
        document.getElementById("rules").innerText = "Scissor cuts Paper";
        document.getElementById("computerWeapon").innerText = "✌️";
        scoreComputer = scoreComputer+1;
    }else if(pick==='Rock'){
        document.getElementById("subText").innerText = "You won!";
        document.getElementById("rules").innerText = "Paper wraps Rock";
        document.getElementById("computerWeapon").innerText = "👊";
        scorePlayer = scorePlayer + 1;
    }
    document.getElementById("playerPoints").innerText = 'Player: '+scorePlayer;
    document.getElementById("computerPoints").innerText = 'Computer: '+scoreComputer;
}
    
function forPaper() {
    const computerPick = getComputerChoice();
    casePaper(computerPick);
}   
//SCISSOR FUNCTION

function caseScissor(pick) {
    document.getElementById("playerWeapon").innerText = "✌️";
    if(pick==='Scissor'){
        document.getElementById("subText").innerText = "It's a tie!";
        document.getElementById("rules").innerText = "Scissor ties with Scissor";
        document.getElementById("computerWeapon").innerText = "✌️";
    }else if(pick==='Rock'){
        document.getElementById("subText").innerText = "You lost!";
        document.getElementById("rules").innerText = "Rock beats Scissor";
        document.getElementById("computerWeapon").innerText = "👊";
        scoreComputer = scoreComputer+1;
    }else if(pick==='Paper'){
        document.getElementById("subText").innerText = "You won!";
        document.getElementById("rules").innerText = "Scissor cuts Paper";
        document.getElementById("computerWeapon").innerText = "✋";
        scorePlayer = scorePlayer + 1;
    }
    document.getElementById("playerPoints").innerText = 'Player: '+scorePlayer;
    document.getElementById("computerPoints").innerText = 'Computer: '+scoreComputer;
}
    
function forScissor() {
    const computerPick = getComputerChoice();
    caseScissor(computerPick); }
  





 





