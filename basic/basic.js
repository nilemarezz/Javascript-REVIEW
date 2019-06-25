/* 
   Variable var(not use),let,const
   const เป็นค่าคงที่ เปลี่ยนไม่ได้ เช่น ค่าPi
   let เปลี่ยนค่าได้ เช่น Score 
*/

//Datatype String, Number, Boolean, null, undefined
const name = 'John';
const age = 30;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
console.log(typeof name)

//Concatenation
const oldConcat = 'My name is '+name+' and My age is '+age;
console.log(oldConcat);
const newConcat = `My name is ${name} and My age is ${age}`;
console.log(newConcat);

//String Method
console.log(name.length)
console.log(`${name.toUpperCase()} ${name.toLowerCase()}`)
console.log(name.substring(0,2));
const s = 'technology, computer, Science, IT'
console.log(s.split(', '))

// Arrays
const fruits = ['Apple','Orange','Pineapple']
fruits[3] = 'grapes';
fruits.push('mango');
fruits.unshift('blueberry')
fruits.pop();
console.log(fruits)
console.log(fruits.indexOf('Apple'))

//Object
const person = {
    name:'John',
    age:30,
    hobbies:['Swimming','Sports'],
    address:{
        street:'Pracha-U-tid',
        city:'Bangkok',
        country:'Thailand'
    }
}
person.email = 'johm@mail.com'
console.log(person.name , person.hobbies[0] , person.address.city, person.email)

//JSON
const personJSON = JSON.stringify(person);
console.log(personJSON);