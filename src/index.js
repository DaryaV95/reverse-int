module.exports = function reverse (n) {
    if (n > 0) {
        n = n + "";
        return n.split("").reverse().join("");
    } else {
        n *= -1;
        n = n + "";
        return n.split("").reverse().join("");
    }
}
