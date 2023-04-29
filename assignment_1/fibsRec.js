function fibsRec(n) {
    if (n > 2) return fibsRec(n-1).concat(+((fibsRec(n-1)[n-2]) + (fibsRec(n-1)[n-3])));
    if (n === 2) return [0, 1];
    return [0];
}

console.log(fibsRec(8));