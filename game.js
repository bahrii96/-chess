const gameEl = document.querySelector(".game")
// console.log(gameEl);
let boxEl = [];
// boxEl.join(' ')
for (let i = 1; i <= 9; i += 1) {
    
    let box = `<div class="box" data-number="${i}"> </div>`
    // console.log(box);
    boxEl.push(box)
}
gameEl.innerHTML = boxEl.join(' ')
const gameElBox = document.querySelectorAll(".box")
console.log(gameElBox);
 

gameEl.addEventListener("click", onClickBox)
 
function onClickBox(event) {
     
    
    // console.log(event.target.getAttribute("data-number"));
    let number = ` ${event.target.getAttribute("data-number")}`
    console.log(number);
    event.target.textContent = number
     
     
     
}