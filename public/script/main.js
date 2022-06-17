//script changement des points de vie en cliquant sur le bouton Attaque VIE
let attaque = document.getElementById("attaque");
let vie = document.getElementById("pvActuelle");
let mort = document.getElementsByClassName("salameche")[0];

let degat = 100;
let pvMAX = 200;
let pv = pvMAX;

attaque.addEventListener("click", function () {
  if (pv > 0) {
    pv = pv - degat;
    pvActuelle.style.width = (pv / pvMAX) * 100 + "%";
    pvActuelle.style.backgroundColor = "#7f0000";
  } else {
    mort.style.filter = "grayscale()";
    // alert("DEAD");
  }
});

// function Combat(sante) {
//   if (pv > 0) {
//     pv = pv - degat;
//     pvActuelle.style.width = (pv / pvMAX) * 100 + "%";
//     pvActuelle.style.backgroundColor = "#7f0000";
//   } else {
//     mort.style.filter = "grayscale()";
//     // alert("DEAD");
//   }
// }
//script qui hide et unhide le texte
// pourquoi ça ne fonctionne pas
function Disparait() {
  let invisible = document.getElementsByTagName("pInvisible")[0];
  let visible = document.getElementsByTagName("question")[0];
  if (invisible.style.display = "none") {
    invisible.style.display = "block";
    visible.style.display = "none";
  } else {
    invisible.style.display = "none";
    visible.style.display = "block";
  }
}
