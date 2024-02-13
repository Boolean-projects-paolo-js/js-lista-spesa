let arrayList = document.querySelector('#lista');


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

function createList(array){
    arrayLength = array.length;
    // Pulisce il contenuto della lista
    arrayList.innerHTML = '';
    for (let i = 0; i < arrayLength; i++) {
        //crea un elemento <li></li>
        let listItem = document.createElement('li');
        //aggiunge nel tag gli elementi degli array
        listItem.textContent = array[i];
        //aggiunge l'elemento <li> (contenente il testo specificato)
        arrayList.appendChild(listItem);
    }
}

function addToList(array){ 
    let inputList = document.querySelector('#input');
    let buttonList = document.querySelector('button');

    buttonList.addEventListener('click', function(){
        array.push(inputList.value);
        console.log(array);
        createList(array);
    });
}


createList(arrList);
addToList(arrList);


