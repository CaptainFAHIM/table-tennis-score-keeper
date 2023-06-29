const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const winScore = document.querySelector("#win-score");
const dsblBtn = document.querySelectorAll(".btn-dsbl");
const btn = document.querySelectorAll(".btn");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btnReset = document.querySelector(".btn-reset");

let win;

winScore.addEventListener("change", function(){
    win = winScore.value;
});


const winGame = function()
{
    for(let btns of dsblBtn)
    {
        btns.disabled = true;
        btns.classList.add("disable");
    }

}


btn1.addEventListener("click", function(){
    if(parseInt(win)>parseInt(player1.textContent))
    {
        player1.textContent++;
    }
    if(parseInt(win)===parseInt(player1.textContent)){
        winGame();
        player1.classList.add("winner");
        player2.classList.add("loser");
    }
    
});

btn2.addEventListener("click", function(){
    if(parseInt(win)>parseInt(player2.textContent))
    {
        player2.textContent++;
    }
    if(parseInt(win)===parseInt(player2.textContent)){
        winGame();
        player2.classList.add("winner");
        player1.classList.add("loser");
    }
});

btnReset.addEventListener("click", () =>{
    player1.classList.remove("winner", "loser");
    player2.classList.remove("winner", "loser");

    for(let btns of dsblBtn)
    {
        btns.disabled = false;
        btns.classList.remove("disable");
        player1.textContent = 0;
        player2.textContent = 0;
    }
});