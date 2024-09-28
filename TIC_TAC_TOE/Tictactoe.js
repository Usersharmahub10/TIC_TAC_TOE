// first we make layouts of game with html amd css
// now we access all elements
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#new");
let msgcont = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");


// now to lnow about turn of which player
let turn0 = true;    // player(X), player(O);

// now we store no. of chances of win in an 2d array
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

// function for reset game

// to add some events to boxes 
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turn0){
            box.innerText = "O"; // player o turn
            turn0 = false;
        }
        else{
        box.innerText="X";// player X turn
        turn0 = true;
        }
    box.disabled = true;

    checkwinner(); // function


    });
});
const resetGame = () => {
    turn0 = true;
    enableBtn();
    msgcont.classList.add("hide");
}


// function for disable buttons after winner 
const disableBtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
// function for enable buttons after reset of game
const enableBtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}
// function for declaring winner
const showWinner =(winner) => {
    msg.innerText =`Congratulations Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableBtn();

}

const checkwinner = () => {       // arrow function
    for(let pattern of winPattern){
        console.log(pattern[0],pattern[1],pattern[2]);  // to print individual index (positions to be checked)
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" &&  pos2 != "" && pos3 !="" ){
            if(pos1 === pos2 && pos2=== pos3){
                console.log("winner is: ",pos1);
                showWinner(pos1);
            }
        }

    }

};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);






