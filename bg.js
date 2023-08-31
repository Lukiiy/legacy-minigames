// Yooo background that changes no wayyyy
let bgIdx = 0;
const bgs = [
  "battle1",
  "battle2",
  "glide1",
  "glide2",
  "tumble1",
  "tumble2"
];

function preloadBgs() {
  for (let i = 0; i < bgs.length; i++) {
    const img = new Image();
    img.src = `/screenshots/${bgs[i]}.png`;
  }
}
window.addEventListener('load', preloadBgs);

function changeBackground() {
  const e = document.querySelector('body');
  const url = `url(/screenshots/${bgs[bgIdx]}.png)`;
  e.style.backgroundImage = url;
  bgIdx++;
  if (bgIdx === bgs.length) {bgIdx = 0;}
}

changeBackground();
setInterval(changeBackground, 10000);
