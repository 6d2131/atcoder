
"use strict";

const lines = []; 
const reader = require("readline").createInterface({
  input: process.stdin,
});
const to = (...arg) => {
  console.log(...arg);
}
const ts = () => {
    return String(lines.shift());
};
const tn = () => {
    return Number(lines.shift());
};
const tspn = (arg = '') => {
  const line = ts();
  const tmpArray = line.split(arg);
  return tmpArray.map(v => Number(v));
};
reader.on("line", (line) => {
  lines.push(line);
});

reader.on("close", () => {
  const [a, b, c, x] = lines[0].split(' ').map(Number);
  const n = 1.000000000000,
        m = 0.000000000000;
  if (x > a && x <= b) {
    to(c / (b - a));
  } else if (x <= a) {
    to(n.toFixed(12));
  } else 
    to(m.toFixed(12))
});