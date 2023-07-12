
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
  const re = Math.round((y / 10) * 10)
  const a = Math.floor((x - re) / 10);
  if (a < 0) {
    to(Math.abs(a));
  } else
    to(0);
});