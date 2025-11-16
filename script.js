const container = document.querySelector(".container");

const boxesWide = 64;
console.log(boxesWide * (9/16))
const boxesHigh = Math.floor(boxesWide * (9/16))
const gridSize = boxesWide * boxesHigh;
const boxWidth = String((1 / boxesWide * 100)) + "%"
const boxHeight = String((1 / boxesHigh * 100)) + "%"


for (let i = 0; i < gridSize; i++) {
    const newElement = document.createElement('div');
    newElement.classList.add("box")
    newElement.id = `box${i}`
    newElement.style.height = boxHeight;
    newElement.style.width = boxWidth;
    container.appendChild(newElement)
}