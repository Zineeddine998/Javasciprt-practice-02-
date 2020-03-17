class Book {   
    constructor(name,author,isbn){
        this.name=name;
        this.author=author;
        this.isbn=isbn;
    }
}
Book.prototype.addBook= function(){
   let container = document.getElementById("content");
   let bookui = document.createElement("tr");
   bookui.innerHTML=`<td>${this.name}</td>
   <td>${this.author}</td>
   <td>${this.isbn}</td>
   <td><button class="delete">delete</button></td>`;
   console.log(bookui);
   container.appendChild(bookui);    
}
document.getElementById("submit").addEventListener("click",add);
function add(e)
{   
   let name=document.getElementById("name").value;
   let author = document.getElementById("author").value;
   let isbn = document.getElementById("isbn").value;
  if(name!=""&&author!=""&&isbn!=""){ 
   let book = new Book(name,author,isbn);
   book.addBook();
   document.getElementById("name").value="";
   document.getElementById("author").value="";
   document.getElementById("isbn").value="";
  } else{
    document.getElementById("name").value="";
    document.getElementById("author").value="";
    document.getElementById("isbn").value="";
      let alert = document.createElement("h5");
      alert.innerText="Please fill all the forms";
      document.querySelector(".container").insertBefore(alert,document.getElementById("title"));
      setTimeout(function(){alert.style.display="none"},2000);
  }
   e.preventDefault();
}
document.getElementById("content").addEventListener("click",deletelement);

function deletelement(e){

    if(e.target.className=="delete"){
   e.target.parentElement.parentElement.remove();
   }
    e.preventDefault();
}