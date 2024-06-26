let boxes = document.querySelectorAll(".box");
let winner=document.querySelector(".winner");
let reset=document.querySelector("#reset");
let startGame=document.querySelector(".start-game")
let winnerYN=document.querySelector(".winnerYN");
// let container=document.querySelector(".");

let turn = true; // player1 and player2

const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let count=0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("button was clicked");
   count++;
  

    if (turn) {
      box.innerText = "X";
      box.style.color="black";
      turn = false;
    } else {
      box.innerText = "O";
      box.style.color="#9B3922";
      turn = true;
    }
   
   
    box.disabled = true;
    checkWinner();
  });
});

const showWinner=(pos1)=>{
  winner.innerText=`congratulations we have winner ${pos1}`;
  winner.classList.remove("hide");
  disableBoxes();
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const checkWinner = () => {
  for (let pattern of winningPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
  
  if(pos1!==""&&pos2!==""&&pos3!==""){
    if(pos1===pos2&&pos2===pos3){
        showWinner(pos1);
        return;
    }
  }
}
if(count===9){
    winnerYN.classList.remove("hide");
    winnerYN.innerText="GAME OVER !!!";
   }


};

const resetBtn=()=>{
    trun=true;
    enableBoxes();
    winner.classList.add("hide");
    winnerYN.classList.add("hide");
    count=0;//
    console.log("count",count);
}
reset.addEventListener("click",resetBtn);
startGame.addEventListener("click",resetBtn);