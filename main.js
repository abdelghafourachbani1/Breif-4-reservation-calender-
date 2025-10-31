/////////////////// bring the element frm html //////////////////

let activeday = document.querySelectorAll(".day");
let tform = document.getElementById("resesrvationform");
let closeform = document.getElementById("closeform");
let ajoutebtn = document.getElementById("btn-ajoute");
let saveform = document.getElementById("saveform");
let pageblur = document.querySelector(".blur-inactive");
let selectday = null;
let reservation = document.getElementsByClassName("reservation");
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
  
  ////////////////////// form validation //////////////////////////
  
  const nameregex = /^[A-Za-z\s]+$/;
  if (!nameregex.test(uname)) {
    alert("Nom incorrect (lettres seulement)");
    return; 
  }
  
  if (!start || !end) {
    alert("Veuillez entrer les heures"); 
    return; 
  }
  
  if (people < 1 || people > 10) {
    alert("1 à 10 personnes"); 
    return; 
  }
  
    if (!type) {
      alert("Choisissez le type");
      return; 
    }
    
    ///////////////////// creat the element of resesrvation /////////////////

    let creatreservation = document.createElement("div");
    creatreservation.classList.add("reservation");
    creatreservation.setAttribute("id",idcounter++);
  
  
  creatreservation.innerHTML = `
  <p>${uname} — ${start} - ${end} — ${people} pers — ${type}</p>
  <div class="btns">
      <button class="edit"><i class="fas fa-pen"></i></button>
      <button class="delete"><i class="fas fa-trash"></i></button>
  </div>`;
      
  const colortype = {
    VIP: "#ff5252",
    Standard: "#4caf50",
    Group: "#2196f3",
  };

   //  If editing, just update existing reservation
  if (editingReservation) {
    editingReservation.querySelector("p").textContent = `${uname} — ${start} - ${end} — ${people} pers — ${type}`;
    editingReservation.style.borderLeftColor = colortype[type];

    editingReservation = null; // reset edit mode
  } else {
    //  Otherwise create a new reservation
    let creatreservation = document.createElement("div");
    creatreservation.classList.add("reservation");
    creatreservation.setAttribute("id", idcounter++);

    creatreservation.innerHTML = `
      <p>${uname} — ${start} - ${end} — ${people} pers — ${type}</p>
      <div class="btns">
          <button class="edit"><i class="fas fa-pen"></i></button>
          <button class="delete"><i class="fas fa-trash"></i></button>
      </div>
    `;

    creatreservation.style.borderLeftColor = colortype[type];
    const sel = document.getElementById(selectday);
    sel.appendChild(creatreservation);

    // reattach listeners for new buttons
    creatreservation.querySelector(".delete").addEventListener("click", function (e) {
      e.stopPropagation();
      if (confirm("Supprimer cette reservation ?")) {
        creatreservation.remove();
      }
    });

    creatreservation.querySelector(".edit").addEventListener("click", function (e) {
      e.stopPropagation();
      editingReservation = creatreservation;
      selectday = creatreservation.parentElement;

      let info = creatreservation.querySelector("p").textContent;
      let parts = info.split("—").map(p => p.trim());
      let uname = parts[0];
      let time = parts[1].split("-");
      let startTime = time[0].trim();
      let endTime = time[1].trim();
      let peopleCount = parts[2].replace("pers", "").trim().split(" ")[0];
      let typePart = parts[3];

      tform.style.display = "block";
      pageblur.classList.remove("blur-inactive");
      pageblur.classList.add("blur");

      document.getElementById("name").value = uname;
      document.getElementById("start").value = startTime;
      document.getElementById("end").value = endTime;
      document.getElementById("people").value = peopleCount;
      document.getElementById("type").value = typePart;
    });
  }

  // close form after saving
  tform.style.display = "none";
  pageblur.classList.remove("blur");
  pageblur.classList.add("blur-inactive");
  tform.reset();
});
  
// })



