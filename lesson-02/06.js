let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let copy2 = {...passportWithAddress, address: {city: 'Bobryisk'}};

console.log(passportWithAddress.address.city);
console.log(copy2.address.city);