//calcul taille
let heightCat =
  document.getElementById("categories").offsetHeight +
  document.querySelector("header").offsetHeight;
//element dont on veux fixer
let element = document.querySelector(".recent");
//obtenir le croll effectué vers le haut
let scrollY = window.scrollY;
//taille total de la page moins la taille du footer
let scrollAcept =
  document.querySelector("body").offsetHeight -
  document.querySelector("footer").offsetHeight;
//taille de la fenetre + le scroll
let scrollEcran = scrollY + window.innerHeight;

//largeur de l'ecran
let width = window.innerWidth;
fixed();
function fixed() {
  if (scrollY >= heightCat && scrollEcran < scrollAcept) {
    element.style.position = "fixed";
    element.style.height = "100%";
    element.style.top = "100px";
  } else {
    element.style.position = "relative";
    element.style.top = "0";
    element.style.height = "auto";
  }
}
//calculer la taille lors du changement d'ecran
window.addEventListener("resize", function () {
  //calcul taille
  heightCat =
    document.getElementById("categories").offsetHeight +
    document.querySelector("header").offsetHeight;
  //element dont on veux fixer
  element = document.querySelector(".recent");
  //obtenir le croll effectué vers le haut
  scrollY = window.scrollY;
  //taille total de la page moins la taille du footer
  scrollAcept =
    document.querySelector("body").offsetHeight -
    document.querySelector("footer").offsetHeight;
  //taille de la fenetre + le scroll
  scrollEcran = scrollY + window.innerHeight;
  fixed();
});
window.addEventListener("scroll", function () {
  //calcul taille
  heightCat =
    document.getElementById("categories").offsetHeight +
    document.querySelector("header").offsetHeight;
  //element dont on veux fixer
  element = document.querySelector(".recent");
  //obtenir le croll effectué vers le haut
  scrollY = window.scrollY;
  //taille total de la page moins la taille du footer
  scrollAcept =
    document.querySelector("body").offsetHeight -
    document.querySelector("footer").offsetHeight;
  //taille de la fenetre + le scroll
  scrollEcran = scrollY + window.innerHeight;
  fixed();
});
