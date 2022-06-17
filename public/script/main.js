//script changement des points de vie en cliquant sur le bouton Attaque VIE
let attaque = document.getElementById("attaque");
let vie = document.getElementById("pvActuelle");
let mort = document.getElementsByClassName("salameche")[0];

let degat = 100;
let pvMAX = 200;
let pv = pvMAX;

attaque.addEventListener("click", function () {
  //   if (pv > 0) {
  //     pv = pv - degat;
  //     pvActuelle.style.width = (pv / pvMAX) * 100 + "%";
  //     pvActuelle.style.backgroundColor = "#7f0000";
  //   } else {
  //     mort.style.filter = "grayscale()";
  //     // alert("DEAD");
  //   }
  Combat(sante);
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
