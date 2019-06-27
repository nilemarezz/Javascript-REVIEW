document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJSON);
document.getElementById('button3').addEventListener('click',getAPI);
document.getElementById('addPost').addEventListener('submit',addPost);

async function getText(){
    let response = await fetch('example.txt')
    let data = await response.text();
    document.getElementById('text').innerHTML = data;
}

async function getJSON(){
    let response = await fetch('user.json');
    let data = await response.json();
    var output = 'Output JSON FILE';
    for(let i in data){
        output += `<li>${data[i].id}</li>
                   <li>${data[i].user}</li>
                   <li>${data[i].email}</li>`
    }
    document.getElementById('text').innerHTML = output;
}


async function getAPI(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    var output = 'Output API';
    for(let i =0 ; i<5;i++){
        output += `<li>${data[i].id}</li>
                   <li>${data[i].title}</li>
                   <li>${data[i].body}</li>`
    }
    document.getElementById('text').innerHTML = output;
}


async function addPost(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Accept': 'application/json, */*',
            'content-type' : 'application/json'

        },
        body:JSON.stringify({title,body})
    });
    let data = await response.json();
    console.log(data);



}