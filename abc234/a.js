
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
  const t = tn();
  const ft = (t ** 2) + (2 * t) + 3,
        ftt = ft + t,
        fftt = (ft * ft) + (ft * 2) + 3,
        ffftt = fftt + fftt,
        fffttt = (ffftt * ffftt) + (ffftt * 2) + 3;
  to(fffttt);
});