let passport = {
    name: "Petr",
    surname: "Petrov",
};

let copy = {...passport, name: "Ivan"};

console.log(passport.name);
console.log(copy.name);

