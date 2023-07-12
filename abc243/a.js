
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
  const [v, a, b, c] = lines[0].split(' ').map(Number);
  const v2 = v % (a + b + c);
  if (v2 < a) {
    to('F');
  } else if (v2 < a + b) {
    to('M');
   } else
    to('T');
});
