const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

function findOrange(arr) {
    console.log(arr.indexOf('апельсин') > -1 ? 'Ура! нашел' : 'Придется поискать в другом магазине…');
}

findOrange(words);