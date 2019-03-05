let  addButton = document.querySelector(".btn");
console.log(addButton);

let removeBtn =  document.querySelector('.listItems');
console.log(removeBtn);
let draggable ;

function dragDropStart(event){
  event.target.style.opacity = '0.5';
  draggable = event.target;
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', event.target.innerHTML);
};

function dragDropEnter(event) {
  event.target.classList.add('over');
}

function dragDropLeave(event) {
  event.stopPropagation();
  event.target.classList.remove('over');
}

function dragDropOver(event) {
  if(event.preventDefault) {
    event.preventDefault();
  }
  event.dataTransfer.dropEffect = 'move';
  return false;
}
function dragDrop(event) {
  if (draggable != event.target) {
    draggable.innerHTML = event.target.innerHTML;
    event.target.innerHTML = event.dataTransfer.getData('text/html');
  }
  return false;
}
function dragDropEnd(event) {
  var listItems = document.querySelectorAll('.draggable');
  [].forEach.call(listItems, function(item) {
    item.classList.removeBtn('over');
  });
  e.target.style.opacity = '1';
}

function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dragStart, false);
  el.addEventListener('dragenter', dragEnter, false);
  el.addEventListener('dragover', dragOver, false);
  el.addEventListener('dragleave', dragLeave, false);
  el.addEventListener('drop', dragDrop, false);
  el.addEventListener('dragend', dragEnd, false);
}

var listItens = document.querySelectorAll('.draggable');
[].forEach.call(listItens, function(item) {
  addEventsDragAndDrop(item);
});


// Add new List
function addListItem() {
  var newList = document.querySelector('.input').value;
  if (newList != '') {
    document.querySelector('.input').value = '';
    var li = document.createElement('li');
    var attr = document.createAttribute('listItems');
    var ul = document.querySelector('ul');
    li.className = 'listItems';
    attr.value = 'true';
    li.setAttributeNode(attr);
    li.appendChild(document.createTextNode(newList));
    ul.appendChild(li);
    addEventsDragAndDrop(li);
  }
}

addButton.addEventListener('click', addListItem);
