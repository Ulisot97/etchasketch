let grid = document.querySelector("#grid");
const btnPopUp = document.querySelector("#btnPopUp");
let dimensions;

function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function colorRandomizer() {
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    let number = getRandomNumber(15, 0);
    if (number === 15) color += "F";
    if (number === 14) color += "E";
    if (number === 13) color += "D";
    if (number === 12) color += "C";
    if (number === 11) color += "B";
    if (number === 10) color += "A";
    if (number < 10) color += number;
  }
  return color;
}

function gridGenerator(number) {
  grid.innerHTML = "";
  for (let i = 0; i < number; i++) {
    let div = document.createElement("div");
    div.classList.add("row");
    for (let j = 0; j < number; j++) {
      let subdiv = document.createElement("div");
      subdiv.addEventListener("mouseover", () => {
        subdiv.style.backgroundColor = colorRandomizer();
        subdiv.style.transition = "1s";
        subdiv.style.opacity = opacity - 10;
      });
      subdiv.classList.add("column");
      div.appendChild(subdiv);
    }

    grid.appendChild(div);
  }
}

btnPopUp.addEventListener("click", () => {
  dimensions = parseInt(prompt("New grid dimensions (max 100):"));
  if (dimensions && dimensions < 100) {
    gridGenerator(dimensions);
  } else {
    alert("Please enter a valid number less than 100 and bigger than 1.");
  }
});
