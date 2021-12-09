function addGroceryDataToTable () {

    let newItemField = document.getElementById('new-item');

    let newItemName = newItemField.value
            console.log("Right before if");
    if(newItemName) {
            console.log("Inside If");
        let entry = document.createElement('li');
        document.getElementById('grocery-list-items').appendChild(entry);
        newItemField.value = '';

        } else {
            console.log("Inside Else");
            alert('Input a value!');
        }
}

document.getElementById('add-item').addEventListener('click', addGroceryDataToTable);
