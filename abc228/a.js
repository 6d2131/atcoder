
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
  const [s, t, x] = lines[0].split(' ').map(Number);
  if (s < t) {
    if(s <= x && x < t) {
        to('Yes');
    } else 
        to('No');
  } else if (t < s) {
    if(x < t || s <= x) {
        to('Yes');
    } else
      to('No');
  }
});