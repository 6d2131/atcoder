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
  const [n, x] = lines[0].split(' ').map(Number);
  const str = 'A'.repeat(n) + 'B'.repeat(n) + 'C'.repeat(n) + 'D'.repeat(n) + 'E'.repeat(n) + 'F'.repeat(n) + 'G'.repeat(n) + 'H'.repeat(n) + 'I'.repeat(n) + 'J'.repeat(n) + 'K'.repeat(n) + 'L'.repeat(n) + 'M'.repeat(n) + 'N'.repeat(n) + 'O'.repeat(n) + 'P'.repeat(n) + 'Q'.repeat(n) + 'R'.repeat(n) + 'S'.repeat(n) + 'T'.repeat(n) + 'U'.repeat(n) + 'V'.repeat(n) + 'W'.repeat(n) + 'X'.repeat(n) + 'Y'.repeat(n) + 'Z'.repeat(n); 
  to(str.substr(x - 1, 1));
});