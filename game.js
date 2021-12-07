const gameEl = document.querySelector(".game")
let retireeGame=''
// console.log(gameEl);
let boxEl = [];
// boxEl.join(' ')
for (let i = 1; i <= 9; i += 1) {
    
    let box = `<div class="box" data-number="${i}"> </div>`
    // console.log(box);
    boxEl.push(box)
}
gameEl.innerHTML = boxEl.join(' ')
// const gameElBox = document.querySelectorAll(".box")
// console.log(gameElBox);
 

gameEl.addEventListener("click", onClickBox)
let numberClick=0
 
function onClickBox(event) {
     numberClick+=1
     
    // let number = ` ${event.target.getAttribute("data-number")}`
    
    let x = "x"
    let o ="o"
     if (numberClick % 2 == 0) {
              event.target.textContent = x
    }
    else event.target.textContent = o
   
   
    retiree();
 
   
}
 
function retiree(event) {
    const gameElBox = document.querySelectorAll(".box")
    
    // console.log(event);
    const arr = [
        [0,1, 2 ],
        [3,4, 5],
        [6,7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]]
        // console.log(arr.length);
    
    for (let i = 0; i < arr.length; i += 1){
    //   console.log(gameElBox[arr[i][0]].innerHTML=="x"&&gameElBox[arr[i][1]].innerHTML=="x"&&gameElBox[arr[i][2]].innerHTML=="x")
        if (gameElBox[arr[i][0]].innerHTML == "x" && gameElBox[arr[i][1]].innerHTML == "x" && gameElBox[arr[i][2]].innerHTML == "x") {
           
            retireeGame = 'Перемогли хрестики';
            retireeGameOne(retireeGame)
            
        }
        else if(gameElBox[arr[i][0]].innerHTML == "o" && gameElBox[arr[i][1]].innerHTML == "o" && gameElBox[arr[i][2]].innerHTML == "o") {
           
            retireeGame = 'Перемогли нолики';
            retireeGameOne(retireeGame)
            
        }
         
    };
  
}
const overlov=document.querySelector(".overlov")
const boxOverlov=document.querySelector(".box-overlov")
function retireeGameOne(one) {
    boxOverlov.classList.add("overlov-acive")
    overlov.textContent=one
    // console.log(overlov);
    // console.log(one);
}