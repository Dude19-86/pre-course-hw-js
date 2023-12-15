const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter(e => e === 'черный' || e === 'красный' || e === 'желтый' ? e : null).join('-');
}

console.log(createColorString());