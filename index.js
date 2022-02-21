class book {
    constructor(bookname, author, language, description) {
        this.bookName = bookname;
        this.author = author;
        this.subject = language;
        this.description = description;
    }
    storeToLocalStorage() {
        let LibraryBooks = {
            "Name": this.bookName,
            "Author": this.author,
            "Subject": this.subject,
            "Description": this.description

        }
        let librarybookstore = localStorage.getItem("librarybookstore");
        if (librarybookstore == null) {
            librarybookstore = [];
        } else {
            librarybookstore = JSON.parse(librarybookstore);
        }
        librarybookstore.push(LibraryBooks);
        localStorage.setItem("librarybookstore", JSON.stringify(librarybookstore));
    }


}
Display();

function Display() {
    let librarybookstore = localStorage.getItem("librarybookstore");
    if (librarybookstore == null) {
        librarybookstore = [];
    } else {
        librarybookstore = JSON.parse(librarybookstore);
    }

    let html = "";
    librarybookstore.forEach(function(element, index) {
        html += ` <tr>
        <th scope="row">${index+1}</th>
        <td>${element.Name}</td>
        <td>${element.Author}</td>
        <td>${element.Subject}</td>
        <td>${element.Description}</td>
        <td>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary" id="${index}" onclick="deletenote(this.id)">Delete</button>
            </div>
        </td>
    </tr>`
        let tableRow = document.getElementById("TableRow");
        tableRow.innerHTML = html;
    });


}


function deletenote(index) {
    let librarybookstore = localStorage.getItem("librarybookstore");
    if (librarybookstore == null) {
        librarybookstore = [];
    } else {
        librarybookstore = JSON.parse(librarybookstore);
    }

    librarybookstore.splice(index, 1);
    localStorage.setItem("librarybookstore", JSON.stringify(librarybookstore));
    location.reload();
    Display();
}

let addBook = document.getElementById("addBook");
addBook.addEventListener("click", booknote);

function booknote() {
    let bookname1 = document.getElementById("bookName").value;
    let author1 = document.getElementById("author").value;
    let description1 = document.getElementById("description").value;
    let subject = document.getElementById("subject").value;

    // let language;
    // if (subject.options.text == "C Language") {
    //     language = subject.options.text;

    // } else if (subject.options.text == "Python Language") {
    //     language = subject.options.text;

    // } else if (subject.options.text == "Java Language") {

    //     language = subject.options.text;

    // } else if (subject.options.text == "C++ Language") {
    //     language = subject.options.text;

    // } else if (subject.options.text == "JavaScript Language") {
    //     language = subject.options.text;

    // }

    let newbook = new book(bookname1, author1, subject, description1);

    console.log(newbook);
    newbook.storeToLocalStorage();
    Display();


}