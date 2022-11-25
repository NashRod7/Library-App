const myLibrary = [];
let bookID=0;

class Book{
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages=pages; 
      }
}


// function addBookToLibrary() {
//     // const title = prompt("Enter Title of the Book " + myLibrary.length+1 );
//     // const author = prompt("Enter Author of the Book " + myLibrary.length+1);
//     // const pages = prompt("Enter number of pages.")
// const title="Harry Potter";
// const author = "JK Rowling";
// const pages = 630;
//     const book= new Book(title, author, pages)

// myLibrary.push(book);
// }


const newBookBtn=document.querySelector(".new-book");
const form=document.querySelector("form");

const submit=document.querySelector(".submit");

const para=document.querySelector(".demo");
newBookBtn.addEventListener("click",()=>{
form.style.display="block";
});

submit.addEventListener("click",(e)=>{
    form.style.display="none";
    e.preventDefault();
    const bookDetails= document.querySelectorAll("input");
    const title=bookDetails[0].value;
    const author=bookDetails[1].value;
    const pages=bookDetails[2].value;
    console.log(title,author,pages);
    const book= new Book(title, author, pages)

myLibrary.push(book);
const newBook = document.createElement("div");
const removeBtn = document.createElement("button");
removeBtn.setAttribute('id',++bookID);
removeBtn.style.display="block";
removeBtn.innerHTML="Remove";
removeBtn.setAttribute("class","remove");
newBook.innerHTML=`Book Name:${title}<br>Author:${author}<br>Pages:${pages}`;
para.appendChild(newBook);
newBook.appendChild(removeBtn);
console.log(myLibrary);
})

document.addEventListener("click",(e)=>{
    if(e.target.matches(".remove"))
    {
        const parent=e.target.parentNode;
        const bookID=e.srcElement.id;
        const remBook=document.getElementById(`${bookID}`);
        para.removeChild(parent);
        myLibrary.splice(bookID-1,1);
console.log(bookID);
    }
})






// function displayBooks(){
//     for(let book of myLibrary){
//         console.table(book);
//     }
// }

// addBookToLibrary();
// addBookToLibrary();
// displayBooks();


