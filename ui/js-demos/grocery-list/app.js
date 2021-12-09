function addToGroceryList() {

    // Allocate common element references
    let itemNameField = document.getElementById('new-item');
    
    // Get values from input fields
    let itemName = itemNameField.value;

    // Validate the provided values (ensure that they are not empty strings)
    if (itemName) {

        // Create a TR object and TD objects for the student table
        let row = document.createElement('tr');
        let product = document.createElement('td');

        // Append cells to the row
        row.appendChild(product);

        // Append the row to the pre-existing table
        document.getElementById('grocery-list-body').appendChild(row);

        // Add info to the newly appended row
        product.innerText = itemName; 
    
        // Clear the input fields
        itemNameField.value = '';

    } else {
        alert('YUM!');
    }
}

function buyItems() {
    let purchaseList = document.getElementById('grocery-list-body');
    document.getElementById('purchase-table-body').append(purchaseList);
}

document.getElementById('add-item').addEventListener('click', addToGroceryList);
document.getElementById('purchase-items').addEventListener('click', buyItems);