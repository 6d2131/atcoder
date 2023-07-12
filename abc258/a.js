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
  const k = tn();
  const M = k % 60
  if (k < 60) {
    if (M < 10) {
        to('21:' + '0' + M)
    } else
        to('21:' + M);
  } else 
    if (M < 10) {
        to('22:' + '0' + M);
    }else 
        to('22:' + M);
});