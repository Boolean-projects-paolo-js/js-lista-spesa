const arrList = [
    'Latte',
    'Pomodori',
    'Acqua',
    'Caffè',
    'Peperoni',
    'Pasta',
    'SALMONE',
    'Uova',
];

const eleList = document.querySelector('#lista');
let i = 0


while (i < arrList.length) {
    console.log(arrList[i]);
    eleList.innerHTML += `<li>${arrList[i]}</li>`;
    i++;
}

