module.exports = function reverse (n) {
    n > 0
    ? (a = Number(("" + n).split("").reverse().join("")))
    : (a = Number(("" + Math.abs(n)).split("").reverse().join("")));
return a;
}
