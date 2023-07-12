
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
  const s = lines[0];
  const a = s.length
  const [n, m] = lines[1].split(' ');
  const re = s.slice(0, n - 1) + s.substr(m - 1, 1) + s.slice(n, a);
  const res = re.slice(0, m - 1) + s.substr(n - 1, 1) + s.slice(m, a);
  to(res);
});