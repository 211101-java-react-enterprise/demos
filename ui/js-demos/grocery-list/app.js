function addItemToGroceryList() {
    let itemField = document.getElementById('new-item');
    let item = itemField.value;
    if (item) {
        let li = document.createElement('li');
        li.innerText = item;
        li.addEventListener('click', moveItemToPurchList)
        let ul = document.getElementById('grocery-list-items');
        ul.appendChild(li);
        itemField.value = '';
    } else {
        alert('You need to provide an item!');
    }
}

function moveItemToGrocList() {
    let grocList = document.getElementById('grocery-list-items');
    grocList.appendChild(this);
    this.addEventListener('click', moveItemToPurchList);
    this.removeEventListener('click', moveItemToGrocList);
}

function moveItemToPurchList() {
    let purchList = document.getElementById('purchased-items');
    purchList.appendChild(this);
    this.addEventListener('click', moveItemToGrocList);
    this.removeEventListener('click', moveItemToPurchList);
}

document.getElementById('add-item').addEventListener('click', addItemToGroceryList);
