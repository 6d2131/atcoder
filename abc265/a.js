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
  const [x, y, n] = lines[0].split(' ').map(Number);
  const rex = Math.floor(n / 1),
        rey = Math.floor(n / 3),
        res = n % 3;
  if (n * 3 < y) {
    to(rex * x);
  } else if (n * 3 > y) {
    to((rey * y) + (res * x));
  } else if (n * 3 == y) {
    if (n < 3) {
        to(n * x);
    } else if (n >= 3) {
        to((rey * y) + (res * x));
    };
  }
});