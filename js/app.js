const container = document.querySelector(".container")
const btn = document.querySelector("button")

window.addEventListener("load", defaultGrid)
btn.addEventListener("click", resetGrid)

function defaultGrid() {
  gridSize(16)
  fillGrid(16)
}

function gridSize(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
}

function fillGrid(size) {
  for (i = 1; i <= size * size; i++) {
    let div = document.createElement("div")
    div.addEventListener("mouseover", changeBG)
    container.appendChild(div)
  }
}

function changeBG(e) {
  // let randomLightness = Math.ceil(Math.random() * 100)
  // e.target.style.background = `hsla(214, 100%, ${randomLightness}%, 1)`
  let randomR = Math.ceil(Math.random() * 256)
  let randomG = Math.ceil(Math.random() * 256)
  let randomB = Math.ceil(Math.random() * 256)
  e.target.style.background = `rgba(${randomR}, ${randomG}, ${randomB}, 1)`
}

function resetGrid() {
  let divs = document.querySelectorAll("div")
  divs.forEach((x) => {
    container.removeChild(x)
  })
  let userInput = parseInt(prompt("Please enter a new grid size"))
  while (userInput > 64 || userInput < 1) {
    userInput = parseInt(
      prompt(`Please enter a new grid size between 1 and 64`)
    )
  }
  gridSize(userInput)
  fillGrid(userInput)
}
