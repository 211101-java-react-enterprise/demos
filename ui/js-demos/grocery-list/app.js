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

// ------------------------------------------------------------------------------------------

// function addItem() {
//     let newItemField = document.getElementById('new-item');
//     let newItem = newItemField.value;
//     let groceryList = document.getElementById('grocery-list-items');
//     if (newItem) {
//         let newListItem = document.createElement('li');
//         newListItem.innerText = newItem;
//         groceryList.appendChild(newListItem);
//         newItemField.value = '';
//     }
// }

// document.getElementById('add-item').addEventListener('click', addItem);

// document.getElementById('grocery-list-items').addEventListener('click', e => {
//     console.log(e.target)
//     let eventTarget = e.target;
//     if (eventTarget.tagName === 'LI') {
//         let purchasedList = document.getElementById('purchased-items');
//         purchasedList.appendChild(eventTarget);
//     }
// });

// document.getElementById('purchased-items').addEventListener('click', e => {
//     if (e.target.tagName === 'LI') {
//         document.getElementById('grocery-list-items').appendChild(e.target);
//     }
// });
