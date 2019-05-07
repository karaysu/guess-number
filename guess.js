console.log("working");


var answer = Math.floor(Math.random() * 100) + 1;
var btn = document.querySelector("button");
var newGame = document.querySelector("#reset");
var result = document.querySelector("#lowOrHi");
var guess = document.querySelector("#guessField");



btn.addEventListener("click", checker);
newGame.addEventListener("click", randomize)

function reset(){
}

function checker() {
  if (guess.value > answer) {
    result.textContent = "Too High";
  } else if (guess.value < answer) {
    result.textContent = "Too Low";
  } else if (guess.value == answer) {
    result.textContent = "Winner";
  }
}

function randomize(){
    answer = Math.floor(Math.random() * 100) + 1;
    guess.value = '';
    result.innerText = '';

}
