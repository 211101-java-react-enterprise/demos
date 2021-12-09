// function* idGenerator() {
//     let idCounter = 1;
//     while(true) {
//         yield idCounter++;
//     }
// }

// let idGen = idGenerator();

function addItemToGroceryList() {

    let itemField = document.getElementById('new-item');
    
    let item = itemField.value;

    if (item) {

        let li = document.createElement('li');
        li.innerText = item;
        li.addEventListener('click', moveItemToPurchased)

        let ul = document.getElementById('grocery-list-items');
        ul.appendChild(li);


        itemField.value = '';

    } else {
        alert('You need to provide an item!');
    }
}

function moveItemToPurchased(params) {
    let li = document.createElement('li');
    li.innerText = this.innerText;
    let ul = document.getElementById('purchased-items');
    ul.appendChild(li);
    let grocList = document.getElementById('grocery-list-items');
    
}

document.getElementById('add-item').addEventListener('click', addItemToGroceryList);