console.log("welcome to the hermione library");

//constructor  
function Book(name, author, type) {

    this.name = name;
    this.author = author;
    this.type = type;
    //to enter books having name author and type
}

// DIsplay consttructor 

function Display() {

}
// now we need  to put add in displays prototype(extra properties)

Display.prototype.add = function (book) 
{
    console.log("Adding to UI");
    tablebody = document.getElementById('tablebody');
    let uistring = `<tr>
                      <td>${book.name}</td>
                      <td>${book.author}</td>
                      <td>${book.type}</td>
                    <tr>`;

    tablebody.innerHTML += uistring;

}

Display.prototype.clear = function () {
    let libraryform = document.getElementById('libraryform');
    libraryform.reset();
}
//Add methods to display prototype 

//Add submit event listener to libraryform

let libraryform = document.getElementById('libraryform');  // here we get the element by id
libraryform.addEventListener('submit', libraryFormSubmit);  //this is event listener which will be triggered when we submit the form

function libraryFormSubmit(e) {
    console.log('Your have added');
    let name = document.getElementById('bookname').value;   //this is to get the values by their respecting values i.e their ids
    let author = document.getElementById('author').value;   //this is to get the values by their respecting values i.e their ids

    let Fiction = document.getElementById('Fiction');   //this is to get the values by their respecting values i.e their ids
    let History = document.getElementById('History');   //this is to get the values by their respecting values i.e their ids
    let Biography = document.getElementById('Biography'); //this is to get the values by their respecting values i.e their ids
    let type;

    if (Fiction.checked) {
        type = Fiction.value; //this helps to set the type when the radio is checked 
    }
    else if (History.checked) {
        type = History.value;
    }
    else if (Biography.checked) {
        type = Biography.value;
    }

    let book = new Book(name, author, type) //this will create a object of the book whihc will contain name author and type and which will be shown below in the table
    console.log(book);
    e.preventDefault();
    let display = new Display();
    display.add(book);
    display.clear();
    //when we were submiting the page was getting refreshed so here we stopped 
} 