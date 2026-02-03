const colorsDiv = document.getElementById("colors");
const rgbDisplay = document.getElementById("rgb");
const message = document.getElementById("message");
const resetBtn = document.getElementById("reset");
const scoreDisplay = document.getElementById("score");
 
let correctColor;
let score = 0;
 
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
 
function init() {
  colorsDiv.innerHTML = "";
  message.textContent = "";
  const colors = [];
 
  for (let i = 0; i < 6; i++) {
    colors.push(randomColor());
  }
 
  correctColor = colors[Math.floor(Math.random() * colors.length)];
 
  rgbDisplay.textContent = correctColor.toLocaleUpperCase();
  colors.forEach((color) => {
    const box = document.createElement("div");
    box.classList.add("color-box");
    box.style.backgroundColor = color;
 
    box.addEventListener("click", () => {
      if (color === correctColor) {
        score += 5;
        message.textContent = "პასუხი სწორია! +5 ქულა";
        scoreDisplay.textContent = `ქულა : ${score}`;
 
        resetBtn.textContent = "Play Again?";
        document.body.style.backgroundColor = correctColor;
      } else {
        score -= 10;
        scoreDisplay.textContent = `ქულა : ${score}`;
        box.style.opacity = "0";
        message.textContent = " სცადე ისევ!";
      }
    });
    colorsDiv.appendChild(box);
  });
}
 
resetBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#232323";
  init();
});
 
init();

colors.Pushcolors.length