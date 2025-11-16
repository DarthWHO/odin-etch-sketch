const container = document.querySelector(".container");
const pixels = document.getElementById("pixels");

function handleChange() {
  container.innerHTML = "";
  const boxesWide = pixels.value;
  const boxesHigh = Math.floor(boxesWide * (9 / 16));
  const gridSize = boxesWide * boxesHigh;
  const boxWidth = String((1 / boxesWide) * 100) + "%";
  const boxHeight = String((1 / boxesHigh) * 100) + "%";
  for (let i = 0; i < gridSize; i++) {
    const newElement = document.createElement("div");
    newElement.classList.add("box");
    newElement.id = `box${i}`;
    newElement.style.height = boxHeight;
    newElement.style.width = boxWidth;
    newElement.addEventListener("mouseenter", handleHover);
    container.appendChild(newElement);
  }
}

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

function handleHover(event) {
  const box = event.target;
  const currentOpacity = box.style.opacity;

  if (!box.style.backgroundColor) {
    const backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    box.style.backgroundColor = backgroundColor;
  }

  if (currentOpacity < 1) {
    const newOpacity = String(Number(currentOpacity) + 0.1);
    box.style.opacity = newOpacity;
  }
}

handleChange();
pixels.addEventListener("change", handleChange);
