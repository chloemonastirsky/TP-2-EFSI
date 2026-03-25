const input = document.getElementById("guessInput")
const button = document.getElementById("guessBtn")
const resetButton = document.getElementById("resetBtn")
const message = document.getElementById("message")
const attemptsText = document.getElementById("attempts")
const risksText = document.getElementById("risks")



let secretNumber = Math.floor(Math.random() * 100) + 1
let attempts = 0
let risks = 0
let arrayAdivinados = [];

button.onclick = () => checkGuess()
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkGuess();
  }


});
function checkGuess(){
  
  arrayAdivinados.push(input.value)
  const guess = parseInt(input.value)
  if(isNaN(guess) || guess < 1 || guess > 100){
    message.innerText = "Por favor ingresa un número válido entre 1 y 100"
    return
  }
  attempts = attempts + 1
  attemptsText.innerText = attempts
  risksText.innerText = arrayAdivinados.join(", ")

  if (attempts >= 7) {
    document.body.style.backgroundColor = "#330000";
  }
  if(attempts >= 10){
    alert(message.innerText = "¡Perdiste! El número era " + secretNumber)
    resetGame()
    return
  }

  if(guess === secretNumber){
    alert(message.innerText = "¡Ganaste!")
    
      const gif = document.getElementById("winGif");
gif.src = "https://media.giphy.com/media/111ebonMs90YLu/giphy.gif"; // podés cambiarlo
gif.style.display = "block";

document.body.classList.add("won");

setTimeout(() => {
  gif.style.display = "none";
  document.body.classList.remove("won");
}, 2000);
    resetGame()
    return
  }

  if(guess < secretNumber){
    message.innerText = "El número es mayor"
  }

  if(guess > secretNumber){
    message.innerText = "El número es menor"
  }

  // modo peligro
  if (attempts >= 8) {
  document.body.classList.add("danger");
  message.innerText = "⚠️ CUIDADO... ÚLTIMOS INTENTOS ⚠️";
}
}


resetButton.onclick = () => resetGame()
function resetGame(){
  secretNumber = Math.floor(Math.random() * 100) + 1
  attempts = 0
  risks = 0
  arrayAdivinados = []
  attemptsText.innerText = attempts
  message.innerText = ""
  risksText.innerText = ""
  input.value = ""

  // modo peligro
  document.body.classList.remove("danger");
}




