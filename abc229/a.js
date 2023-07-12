
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
  const s1 = lines[0],
        s2 = lines[1];
    if (s1 == '.#' && s2 == '#.') {
        to('No');
    } else if (s1 == '#.' && s2 == '.#') {
        to('No');
    } else
        to('Yes');
});