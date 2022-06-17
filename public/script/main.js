// script changement des points de vie en cliquant sur le bouton Attaque VIE
// un bouton qui permet de changer la taille et le background d'une div ou section
let attaque = document.getElementById("attaque");
let vie = document.getElementById("pvActuelle");
let mort = document.getElementsByClassName("salameche")[0];

let degats = 100;
let pvMAX = 200;
let pv = pvMAX;

attaque.addEventListener("click", function () {
  if (pv > 0) {
    pv = pv - degats;
    pvActuelle.style.width = (pv / pvMAX) * 100 + "%";
    pvActuelle.style.backgroundColor = "#7f0000";
  } else {
    mort.style.filter = "grayscale()";
  }
});
// En cliquant sur le bouton d'attaque texte il remplace le texte par un autre en faisant disparaitre le premier et en laissant apparaitre le deuxieme
// lorsque l'on passe la souris sur certain textes elles doivent disparaître et faire place  à d'autres textes.
let visible = document.getElementsByClassName("visible")[0];
visible.style.display = "block";
let invissible = document.getElementsByClassName("pInvisible")[0];
invissible.style.display = "none";
let boutonChgmntDeTexte = document.getElementsByClassName("attaqueTexte")[0];
boutonChgmntDeTexte.addEventListener("click", () => {
  if ((visible.style.display = "block")) {
    visible.style.display = "none";
    invissible.style.display = "";
  } else {
    visible.style.display = "block";
    invissible.style.display = "none";
  }
});
//Changement de texte au Hover
let hoverFaitMaison = document.getElementsByTagName("footer")[0];
hoverFaitMaison.addEventListener("mouseover", () => {
  document.getElementsByTagName("p")[0].innerText = "Eh Frerot t'es en combat";
});

hoverFaitMaison.addEventListener("mouseout", () => {
  document.getElementsByTagName("p")[0].innerText =
    "Que dois-je faire Pikachu?";
});

// Redirection vers Lien Externe
let Information = document.getElementById("Info");

Information.addEventListener("click", function () {
  window.location.href = "https://www.pokemon.com/us/pokedex/charmander";
});

//changement de police
let chgmntPolice = document.getElementById("Police");

chgmntPolice.addEventListener("click", function () {
  document.getElementsByTagName("body")[0].style.fontFamily =
    "Franklin Gothic Medium";
});
