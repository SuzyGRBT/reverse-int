module.exports = function reverse (n) {
  let num = Math.abs(n);
  let str = String(num);
  let newStr = str.split("").reverse().join("");
  return Number(newStr);
}
