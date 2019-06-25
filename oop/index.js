// ---------------Literals ---------------
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year : '2013',
    getSumary: function(){
        return `${this.title} wsa written by ${this.year}`
    }
};
console.log(book1.getSumary());
console.log(Object.values(book1));


// -------------Constructure ---------------
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
}
Book.prototype.getSumary = function(){
    return `${this.title} wsa written by ${this.year}`
}
Book.prototype.getYearsold = function(){
    return `${this.title} was ${new Date().getFullYear() - this.year} years old`
}

const book2 = new Book('Harry Potter','Jane','2016');
console.log(book2.getYearsold());


//--------------- Inheritance ---------------
function Magazine(title,author,year,month){
    Book.call(this,title,author,year);
    this.month = month;
}
Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine('Mag One','John','2018','Jan');
console.log(mag1.getSumary());



//----------- ES6 CLASS--------------
class Bookclass{
    constructor(title ,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSumary() {
        return `${this.title} wsa written by ${this.year}`
    }
    revice(year){
        this.year = year;
        this.revice = true;
    }
}
const book3 = new Bookclass('Pirate','Mike','1999');
console.log(book3.getSumary())
book3.revice('2019');
console.log(book3);


// ----------- Subclass ----------------

class Magazineclass extends Bookclass{
    constructor(title ,author,year,month){
        super(title,author,year);
        this.month = month;
    }
}

const mag2 = new Magazineclass('Mag2','Nile','2016','Jan');
console.log(mag2.getSumary());