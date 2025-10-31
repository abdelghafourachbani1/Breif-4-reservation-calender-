/////////////////// bring the element from html //////////////////

let activeday = document.querySelectorAll(".day");
let tform = document.getElementById("resesrvationform");
let closeform = document.getElementById("closeform");
let ajoutebtn = document.getElementById("btn-ajoute");
let saveform = document.getElementById("saveform");
let pageblur = document.querySelector(".blur-inactive");
let reservation = document.getElementsByClassName("reservation");
let selectday = null;
let idcounter = 1;
let editingReservation = null;
///////////////////// open the form  /////////////////////////

ajoutebtn.addEventListener("click", function () {
    tform.style.display = "block";
    tform.reset();
    pageblur.classList.remove("blur-inactive");
    pageblur.classList.add("blur");
});

closeform.addEventListener("click", function () {
    tform.style.display = "none";
    pageblur.classList.remove("blur");
    pageblur.classList.add("blur-inactive");
    selectday = null;
});

activeday.forEach(function (day) {
    day.addEventListener("click", function () {
        if (!day.classList.contains("inactive")) {
            selectday = day.id;
            tform.reset();
            tform.style.display = "block";
            pageblur.classList.remove("blur-inactive");
            pageblur.classList.add("blur");
        }
    });
});
//////////// save and check and change the form (reservation info) \\\\\\\\\\\\\\\\\\\\\\\\\ 
saveform.addEventListener("click", function (e) {
    e.preventDefault();

    let uname = document.getElementById("name").value.trim();
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    let people = document.getElementById("people").value;
    let type = document.getElementById("type").value;

