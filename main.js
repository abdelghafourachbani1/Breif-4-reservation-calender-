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

