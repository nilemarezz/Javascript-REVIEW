// Single Element
const form = document.getElementById('my-form')
console.log(form);
console.log(document.querySelector(".container"));

// Multiple Element
console.log(document.querySelectorAll('.item'));
const item = document.querySelectorAll('.item');
item.forEach((list) => console.log(list))

const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = "red";
btn.addEventListener('click',(e)=> {
    btn.style.background = "green";
    document.querySelector('body').classList.add('bg-dark')
})

form.addEventListener('submit',onsubmit());

function onsubmit(e){
    
    const li = document.getElementsByTagName('li')
    li.innerHTML = "<li>haha</li>"

}
