
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
  const [x1, y1] = lines[0].split(' '),
        [x2, y2] = lines[1].split(' '),
        [x3, y3] = lines[2].split(' ');
  if (x1 == x2 && y1 == y2) {
    to(x3 , y3);
  } else if (x1 == x2 && y2 == y3) {
    to(x3 , y1);
  } else if(x1 == x2 && y1 == y3) {
    to(x3 , y2);
  } else if (x2 == x3 && y1 == y2) {
    to(x1 , y3);
  } else if (x2 == x3 && y2 == y3) {
    to(x1 , y1);
  } else if(x2 == x3 && y1 == y3) {
    to(x1 , y2);
  }else if (x1 == x3 && y1 == y2) {
    to(x2 , y3);
  } else if (x1 == x3 && y2 == y3) {
    to(x2 , y1);
  } else
    to(x2 , y2);

});