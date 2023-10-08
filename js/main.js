import "../scss/style.scss";
import { bubbleSortFuction } from "./bubble-sort-function";

function lineToHtml(height, kindOfSort) {
  return `<div class="line line__${kindOfSort}" style="height: ${height}%;"></div>`
}

function lineHeightsToHtml(kindOfSort) {
  const lines = document.querySelectorAll(".line__" + kindOfSort);
  let heights = [];
  lines.forEach((line) => {
    heights.push(`<div>${line.clientHeight}</div>`);
  })
  return heights;
}

function StartButtonPressed(button) {
  const kindOfSort = button.getAttribute("type-of-sort")
  const demoScreen = document.querySelector("." + kindOfSort + "__demo-screen");
  const lines = demoScreen.querySelectorAll(".line__" + kindOfSort);

  let heights = [];

  lines.forEach((line) => {
    heights.push(line.clientHeight);
  })

  bubbleSortFuction(heights);
}

function ResetButtonPressed(button) {
  const kindOfSort = button.getAttribute("type-of-sort")
  const demoScreen = document.querySelector("." + kindOfSort + "__demo-screen");
  const lineHeightsList = document.querySelector("." + kindOfSort + "__line-heights-list");
  const numberOfLines = document.querySelector("." + kindOfSort + "__input");
  demoScreen.innerHTML = "";
  lineHeightsList.innerHTML = "";
  numberOfLines.value = "";
}

function GenerateButtonPressed(button) {
  const kindOfSort = button.getAttribute("type-of-sort")
  const numberOfLines = document.querySelector("." + kindOfSort + "__input").value;
  const demoScreen = document.querySelector("." + kindOfSort + "__demo-screen");
  const lineHeightsList = document.querySelector("." + kindOfSort + "__line-heights-list");
  demoScreen.innerHTML = "";
  lineHeightsList.innerHTML = "";

  let linesList = '';

  for (let i=0; i<numberOfLines; i++) {
    let height = Math.floor(Math.random() * 100) + 1;
    linesList += lineToHtml(height, kindOfSort);  
  }

  demoScreen.insertAdjacentHTML("beforeend", `${linesList}`);
  lineHeightsList.insertAdjacentHTML("beforeend", `${lineHeightsToHtml(kindOfSort)}`);

}

document.addEventListener("DOMContentLoaded", () => {
  const GenerateButtons = document.querySelectorAll(".generate");
  const ResetButtons = document.querySelectorAll(".reset");
  const StartButtons = document.querySelectorAll(".start");

  ResetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      ResetButtonPressed(button);
    });
  });

  GenerateButtons.forEach((button) => {
    button.addEventListener("click", () => {
      GenerateButtonPressed(button);
    });
  })

  StartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      StartButtonPressed(button);
    });
  })
}); 