function addToGroceryList(){
    let itemField=document.getElementById('new-item');

    let itemName=itemField.value;
    let GroceryList=document.getElementById('grocery-list-items');

    if(itemName){
        
        let newListitem=document.createElement('li');

        newListitem.innerText=itemName;
        GroceryList.appendChild(newListitem);
    }
    else{
        alert('You need to provide both a name and major!');
    }
}
document.getElementById('add-item').addEventListener('click',addToGroceryList);