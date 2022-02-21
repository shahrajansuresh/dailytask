let notebtn = document.getElementById("notebtn");
shownote();
notebtn.addEventListener("click", function(e) {

    let writetitle = document.getElementById("writetitle");
    let writenote = document.getElementById("writenote");

    console.log(writenote.value);
    let notestorage = localStorage.getItem("notestorage");

    // console.log(notestorage);
    if (notestorage == null) {
        addnotestorage = [];
    } else {
        addnotestorage = JSON.parse(notestorage);
    }
    let localnotesstorage = {
        title: writetitle.value,
        task: writenote.value
    }
    addnotestorage.push(localnotesstorage);
    console.log(writenote.value)
    localStorage.setItem("notestorage", JSON.stringify(addnotestorage));
    writetitle.value = "";
    writenote.value = "";
    shownote();



});

function shownote() {
    let notestorage = localStorage.getItem("notestorage");
    // console.log(notestorage);
    if (notestorage == null) {
        addnotestorage = [];
    } else {
        addnotestorage = JSON.parse(notestorage);
    }
    let showtask = ""
    addnotestorage.forEach(function(element, index) {

        showtask += ` <div class="card-body c12"  > 
         <div class="card my-3 c15" style="margin: 1vh 2vw; border-radius: 2vh; padding: 0.5vh 1vw;">
    <h5 class="card-title">${index+1}.  ${element.title}  </h5>
    <div class="form-group">
       <p class="todotask">${element.task} </p>
    </div>
    <button class="btn btn-primary" id="${index}" onclick="deletenote(this.id)">Delete</button>
</div>  </div>`
    });

    let textbox = document.getElementById("addnote");
    if (addnotestorage.length != 0) {
        textbox.innerHTML = showtask;
    } else {
        textbox.innerHTML = ` <div class="card-body" id ="taskboxcon">
            <div class="form-group">
               <h3 class="todotask" style="background-color :rgba(244, 250, 249, 0.938) ;width: 35% ;border-radius : 0.5vh;">Write your task above to store here</h3>
            </div>
        </div> `
    }
}

function deletenote(index) {
    let notestorage = localStorage.getItem("notestorage");
    // console.log(notestorage);
    if (notestorage == null) {
        addnotestorage = [];
    } else {
        addnotestorage = JSON.parse(notestorage);
    }
    addnotestorage.splice(index, 1);
    localStorage.setItem("notestorage", JSON.stringify(addnotestorage));
    shownote();
}
let searchbox = document.getElementById("searchbox");

searchbox.addEventListener("input", function search() {
    let searchtext = searchbox.value;
    console.log(searchtext);
    let taskcard = document.getElementsByClassName("c12");
    console.log(taskcard);
    Array.from(taskcard).forEach(function(element) {
        let alltext = element.getElementsByTagName("p")[0].innerText;
        let alltext1 = element.getElementsByTagName("h5")[0].innerText;
        console.log(alltext1);
        if (alltext.includes(searchtext)) {

            element.style.display = "block";
        } else if (alltext1.includes(searchtext)) {

            element.style.display = "block";

        } else {
            element.style.display = "none";
        }
    })


})
let searchbtn = document.getElementById("searchbtn");
searchbtn.addEventListener("click", function search() {

})