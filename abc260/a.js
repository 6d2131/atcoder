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
  const arr = [a, b, c]
  if (a != b && a != c &&  b != c)  {
    to(a);
  } else if (a == b || a == c || b == c) {
    const result = arr.filter( function( x, i, s ) { 
        return s.indexOf( x ) === i 
    }).length;
    if (result == 2) {
        const  d = arr.filter(function (x, i, self) {
            return self.indexOf(x) === i && i !== self.lastIndexOf(x);
        });
    const rd = d.join('');
    const re = lines[0].replace(rd, '');
    to(re.replace(rd, ''));
    } else 
        to(-1);
  };
});