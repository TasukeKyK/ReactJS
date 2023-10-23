const redBlock = document.getElementById("redBlock");
const whiteBlock = document.getElementById("whiteBlock");
const blueBlock = document.getElementById("blueBlock");

function changeColor(event) {
  const relatedTarget = event.relatedTarget;

  if (relatedTarget === redBlock) {
    whiteBlock.style.backgroundColor = "red";
  } else if (relatedTarget === blueBlock) {
    whiteBlock.style.backgroundColor = "blue";
  } else {
    whiteBlock.style.backgroundColor = "white";
  }
}

redBlock.addEventListener("mouseover", changeColor);
blueBlock.addEventListener("mouseover", changeColor);
whiteBlock.addEventListener("mouseover", changeColor);
