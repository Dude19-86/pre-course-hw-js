const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

let res = numbers.filter((e, i) => {
    console.log(e.filter(c => c % 2 === 0))
});