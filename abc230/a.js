
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
reader.on("line", (line) => {
  lines.push(line);
});

reader.on("close", () => {
  const n = tn();
});