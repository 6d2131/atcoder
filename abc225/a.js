
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
  const [a, b, c] = lines[0].split('');
  const arr = [a, b, c];
  if (arr.every(v => v === arr[0])) {
      console.log(1);
  } else if (arr.every((v, i, self) => self.indexOf(v) === i)) {
      console.log(6);
  }else
      console.log(3);
});