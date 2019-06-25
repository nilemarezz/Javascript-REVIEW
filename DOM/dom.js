console.log(document.domain);
console.log(document.title);

// Selector
let headerTitle = document.getElementById('header-title');
let items = document.querySelectorAll(".list-group-item");
let input = document.getElementsByTagName('input');
let oddItem = document.querySelectorAll(".list-group-item:nth-child(odd)")
let evenItem = document.querySelectorAll(".list-group-item:nth-child(even)")

console.log(headerTitle);
console.log(items);
console.log(input);
console.log(oddItem);

headerTitle.textContent = "Hello"; // สนใจ css
headerTitle.innerText = "Hello";  //  ไม่สนใจ css
headerTitle.innerHTML = '<h3>Hello</h3>'

// Style
headerTitle.style.borderBottom = 'solid 3px black';
evenItem.forEach((item) => item.style.background = "pink");
input[0].value = 'NIlE';


// createElement => <div class="hello" id="hello1" title="HELLO DIV">Hello World</div>
let newDiv = document.createElement('div')
newDiv.classList = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title','HELLO DIV')
let newDivTag = document.createTextNode('Hello world')
newDiv.appendChild(newDivTag);
console.log(newDiv)

// Event click,dblclick,mousedown,mouseenter,mouseleave,mouseover
let button = document.getElementById('button').addEventListener('click',buttonClick);
function buttonClick(e){
    console.log(e.target);
    document.querySelector('#main').style.background = "grey";
}

let box = document.getElementById('box');
box.addEventListener('mouseover' ,changecolorEvent);
function changecolorEvent(e){
    
    box.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
}



let addForm = document.getElementById('addForm');
let itemList = document.getElementById('items');

addForm.addEventListener('submit',addItem);
function addItem(e){
    e.preventDefault();
    // create new Item
    // let newItem = document.getElementById('item').value;
    // let li = document.createElement('li');
    // li.className = 'list-group-item';
    // // Add item
    // li.appendChild(document.createTextNode(newItem));
    // itemList.appendChild(li)
    // // Create btn
    // let deletebtn = document.createElement('button');
    // deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    // // Add btn
    // deletebtn.appendChild(document.createTextNode('X'))
    // li.appendChild(deletebtn);

    let item = document.getElementById('item').value;
    let li = document.getElementById('li');
    let newItem = document.createAttribute('li');
    newItem.innerText = item;
    li.appendChild(newItem);

}