function addGroceryDataToTable () {
    // Allocate element references
    let newItemField = document.getElementById('new-item');

    // Get the inputs from the field
    let newItemName = newItemField.value;

    // Check that it's not null
    if(newItemName) {
        // Creating a list item
        let entry = document.createElement('li');

        // Append it to the list
        document.getElementById('grocery-list-items').appendChild(entry);

        // Set the inner text of the new list item
        entry.innerText = newItemName;

        // Reset our value
        newItemField.value = '';

        } else {
            alert('Input a value!');
        }
}

document.getElementById('add-item').addEventListener('click', addGroceryDataToTable);
