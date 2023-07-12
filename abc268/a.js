
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
  const [a, b, c, d, e] = lines[0].split(' ').map(Number);
  const arr = [a, b, c, d, e];
  let new_arr = arr.filter(function(val, i, array){
	return (array.indexOf(val) === i);
  });
  to(new_arr.length);
});
