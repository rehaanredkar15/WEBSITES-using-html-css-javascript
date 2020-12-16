console.group("welcome to notes");
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
    console.log(notesobj);
    showNotes();
});

function showNotes() {
    let  notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    }else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
  
        html += ` <div class="card mx-2 my-2 card" style="width: 18rem;">
                       <div class="card-body">
                       <h5 class="card-title">Note ${index + 1} </h5>
                       <p class="card-text">${element}</p>
                       <button  id= "${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note </button> 
                       </div>
               </div>`;

    });

    let noteselm = document.getElementById("notes");
    if(notesobj.length != 0){
        noteselm.innerHTML = html; 
    }else{
        noteselm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

function deleteNote(index){

    //console.log('i am deleting', index);

    let notes = localStorage.getItem("notes");

    if(notes == null)
    {
        notesobj = [];
    }else {
        notesob = JSON.parse(notes);
    }

    notesob.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}


let search = document.getElementById('SearchTxt');
search.addEventListener("input",function(){

     let inputval = search.value.toLowerCase();
   //  console.log('input event fired!',inputval);

     let  cards = document.getElementsByClassName('card');
     Array.from(cards).forEach(function(element){
       let cardTxt= element.getElementsByTagName("p")[0].innerText;
       // console.log(cardtext);
       if(cardTxt.includes(inputval))
       {
           element.style.display = "block";
       }
       else
       {
           element.style.display = "none";
       }
    });
});