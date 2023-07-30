var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var listGroupItem = document.getElementsByClassName('list-group-item');
var submit = document.getElementById('addSubmit');

// var des = desCription.setAttribute('id', 'description');

// console.log(itemList);
var filter = document.getElementById('filter');

for(let i=0; i<listGroupItem.length; i++){
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-right edit';

    editBtn.style.marginRight = '5px';

    //Append text Node
    editBtn.appendChild(document.createTextNode('edit'));

    //Append button to li
    listGroupItem[i].appendChild(editBtn);

}


//Form submit event
form.addEventListener('submit', addItem);

//Add Item
function addItem(e){
    e.preventDefault();

    // console.log(1);

    //Get input value
    var newItem = document.getElementById('item').value;
    var newItem2 = document.getElementById('description').value;
    var newItem3 = document.getElementById('opt');
    var selectedValue = newItem3.options[newItem3.selectedIndex].text;
    

    //Create new li Element
    var li = document.createElement('li');

    //add class
    li.className = 'list-group-item';
    
    //Add text node with input value
    
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newItem2));
    li.appendChild(document.createTextNode(selectedValue));
    localStorage.setItem('input1',newItem);
    localStorage.setItem('input2',newItem2);
    localStorage.setItem('input3',selectedValue);
    //Create del button element
    var deleteBtn = document.createElement('button');


    //Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(deleteBtn);


    //add Edit button
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-right edit';

    editBtn.style.marginRight = '5px';

    //Append text Node
    editBtn.appendChild(document.createTextNode('edit'));

    //Append button to li
    li.appendChild(editBtn);

    
    //Append li to list
    itemList.appendChild(li);

}


//Delete event

let removeItem = (e)=>{
    if(e.target.classList.contains('delete')){
      if(confirm('Are Your Sure ?')){
          var li = e.target.parentElement;
          console.log(li);
          itemList.removeChild(li);
      }
    }
  }

itemList.addEventListener('click',removeItem);



//Filter Items
function filterItems(e){
  //convert text to lowercase
  var text = e.target.value.toLowerCase();
  //Get lis
  var items = itemList.getElementsByTagName('li');
  //Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var description = item.childNodes[1].textContent;
    console.log(itemName);
    if(itemName.toLowerCase().indexOf(text) != -1||description.toLowerCase().indexOf(text)!= -1){
      item.style.display = 'block';

    }
    else {
      item.style.display = 'none';
    }
  })
}
//Filter Event
filter.addEventListener('keyup', filterItems);

