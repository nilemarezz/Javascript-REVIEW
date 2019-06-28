const books = [{title:'jjj',author:'nile',price:520}];
document.getElementById("book-form").addEventListener("submit", getbook);


function addBooks(newbook) {
    books.push(newbook);
    
}

function getbook(e) {
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let price = document.querySelector("#price").value;
    let newbook = { title: title, author: author, price: price };
    showBooks(newbook);
}

function showBooks(book) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.price}</td> <button class='delete'>Delete</button>`;
    document.getElementById("book-list").appendChild(tr);
    addBooks(book);
}
function deleteBooks(e){
    if(e.classList.contains('delete')){
        console.log(1)
    }
}

document.getElementById("book-list").addEventListener("click", (e)=>{
    let target = e.target;
    console.log(target);
    if(e.target.classList.contains('delete')){
        target.parentElement.remove();
    }
});