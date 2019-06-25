const todo = [{
    id: 1,
    text: 'Clean the bathroom',
    isCompleted: true
},
{
    id: 2,
    text: 'Go to School',
    isCompleted: true
},
{
    id: 3,
    text: 'Do homework',
    isCompleted: false
}]


//loop
for (let i = 0; i < 10; i++) {
    console.log(`For loop : ${i}`);
}
let i = 0;
while (i < 10) {
    console.log(`While loop : ${i}`)
    i++;
};

todo.forEach(function(todo){
    console.log(todo.text);
})

const todotext = todo.map(function(todo){
    return todo.text;
})
console.log(todotext);

const todoCompleted = todo.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text
})
console.log(todoCompleted);