
const renk = document.querySelector(".h1");
const buton = document.querySelector(".buton");

const colors = [
  "red",
  "purple",
  "yellow",
  "orange",
  "brown",
  "green",
  "indigo",
  "teal",
  "pink",
  "cyan",
];

let renkler = colors.length - 1;

document.querySelector(".buton").onclick = function () {
  if (true) {
    renk.style.background = colors[renkler];
    buton.style.background = colors[renkler-1];
    renk.style.color = colors[renkler - 1];
    renkler--;
  }
};

console.log(renkler);
