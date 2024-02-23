let Btns = document.querySelectorAll(".button") ;
let reset = document.querySelector(".resetBtn");
let restart = document.querySelector(".RestartBtn") ;
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".message");
let scoreboard = document.querySelector(".score-board");
let scorex = document.querySelector(".scoreX");
let scoreo = document.querySelector("scoreO");

scoreo = 0;
scorex = 0; 

let turnO = true ; // true Or false .

const winpattern =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
    for(let btn of Btns){
        btn.disabled = false;
        btn.innerHTML = "";
        msg.innerHTML = "";
    }
}

const disableBtns = () =>{
    for(let btn of Btns){
        btn.disabled = true;
    }
}

const showwinner = (winner) =>{
    msg.innerHTML = `Winner is : ${winner}`;
    disableBtns()
}


const checkWinner = () => {
    for (let pattern of winpattern) {
        let posVal1 = Btns[pattern[0]].innerHTML;
        let posVal2 = Btns[pattern[1]].innerHTML;
        let posVal3 = Btns[pattern[2]].innerHTML;

        if (posVal1 !== "" && posVal2 !== "" && posVal3 !== "") {
           if(posVal1 === posVal2 && posVal2 === posVal3){
                showwinner(posVal1); 
           } 
        }
    }
}

function move() {
    Btns.forEach(btn => {
        btn.addEventListener("click", function() {
          if(turnO === true){
            btn.textContent = "O";
            turnO = false ;
          }else{
            btn.textContent = "X";
            turnO = true;
          };
          btn.disabled = true;
          checkWinner();
        });
    });
}

move();
reset.addEventListener("click" , resetgame);
restart.addEventListener("click", resetgame)