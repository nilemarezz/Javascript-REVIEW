
// Object
function PersonObj(fname,lname,dob){
    this.fname = fname;
    this.lname = lname;
    this.dob = new Date(dob);

    this.getFullname = function(){
        return `${this.fname} ${this.lname}`;
    }
}

const person1 = new PersonObj('Matas','Paosriwong','1-1-1999');
const person2 = new PersonObj('NIlE','Paosriwong','2-2-1999');
console.log(person1.fname);
console.log(person2.lname);
console.log(person1.getFullname())

//Class
 class PersonClass{
     constructor(fname,lname,dob){
        this.fname = fname;
        this.lname = lname;
        this.dob = new Date(dob);
     }
     getFullname(){
        return `${this.fname} ${this.lname}`;
     }
 }
const person3 = new PersonClass('Chawisa','Game','3-4-1999');
console.log(person3.fname)
