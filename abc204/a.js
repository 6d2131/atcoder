
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
  const [x, y] = lines[0].split(' ').map(Number);
  if (x == y) {
    to(x);
  } else if (x == 0 && y == 1 || x == 1 && y == 0) {
    to(2);
  } else if (x == 0 && y == 2 || x == 2 && y == 0) {
    to(1);
  } else if (x == 1 && y == 2 || x == 2 && y == 1) {
    to(0);
  }
});