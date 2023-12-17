const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];
let res = [];
for (let i = 0; i < numbers.length; i++) {
    res.push(numbers[i].filter(e => e % 2 === 0));
}
console.log(res)
