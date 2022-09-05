var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');
var filter = document.querySelector('#filter');

//addform
form.addEventListener('submit', addItem);
filter.addEventListener('keyup',filterItems);

// event to item list to delete the items 
itemList.addEventListener('click', removeItem);
//add item 
function addItem(e){
    e.preventDefault();

   // console.log("ubo");
    //get input value
    var newItem = document.getElementById('item').value;
   
    //create new li element 
    var li = document.createElement('li');
    //Add class
    li.className = "list-group-item";
     //console.log(li);
     
     //Add text node with input value 
     li.appendChild(document.createTextNode(newItem));

     var deleteBtn = document.createElement('button');
    
     deleteBtn.className = "btn btn-danger btn-sm float-right delete";
     deleteBtn.appendChild(document.createTextNode('X'));
    
    li.appendChild(deleteBtn);
    
     itemList.appendChild(li);


}



function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?!')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }