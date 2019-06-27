document.getElementById('button1')
.addEventListener('click',loadText);
document.getElementById('button2')
.addEventListener('click',loadJSON);


function loadText(){
    // Create XHR Object
    let xhr = new XMLHttpRequest();
    // OPEN - type, url/file , asyn
    xhr.open('GET', 'example.txt' , true);

   xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        document.getElementById('text').innerHTML = this.responseText;
    }
   }    
   // Send Request
    xhr.send();
}

function loadJSON(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','user.json',true);

    xhr.onreadystatechange = function(){
        if(this.readyState ==4 && this.status ==200){
            let users = JSON.parse(this.responseText);
            var output = 'Output';
            for(let i in users){
                output +=
            `<li>${users[i].id}</li>
            <li>${users[i].user}</li>
            <li>${users[i].email}</li>`
            }
            document.getElementById('json').innerHTML = output;
            
        }
    }
    xhr.send();
} 