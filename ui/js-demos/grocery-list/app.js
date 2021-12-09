
// Adds an item to the list
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

// Testing a tutorial
let dragged;
let id;
let index;
let indexDrop;
let list;

  document.addEventListener("dragstart", ({target}) => {
      dragged = target;
      id = target.id;
      list = target.parentNode.children;
      for(let i = 0; i < list.length; i += 1) {
        if(list[i] === dragged){
          index = i;
        }
      }
  });

  document.addEventListener("dragover", (event) => {
      event.preventDefault();
  });

  document.addEventListener("drop", ({target}) => {
   if(target.className == "dropzone" && target.id !== id) {
       dragged.remove( dragged );
      for(let i = 0; i < list.length; i += 1) {
        if(list[i] === target){
          indexDrop = i;
        }
      }
      console.log(index, indexDrop);
      if(index > indexDrop) {
        target.before( dragged );
      } else {
       target.after( dragged );
      }
    }
  });



document.getElementById('add-item').addEventListener('click', addGroceryDataToTable);
