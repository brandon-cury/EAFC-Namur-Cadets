//scroll de la page
AOS.init();
//calcul taille
let heightCat =
  document.querySelector("#actualitesItems .firstColorPoint").offsetHeight +
  document.querySelector("header").offsetHeight;
//element dont on veux fixer
let element = document.querySelector("#actualitesItems .recent");
let paddingRight = window.getComputedStyle(
  document.querySelector("#actualitesItems .container")
).marginRight;
let elementWidth = document.querySelector(
  "#actualitesItems .navActualites"
).offsetWidth;
//obtenir le croll effectué vers le haut
let scrollY = window.scrollY;
//taille total de la page moins la taille du footer
let scrollAcept =
  document.querySelector("body").offsetHeight -
  document.querySelector("footer").offsetHeight -
  document.querySelector("#informations").offsetHeight;
//taille de la fenetre + le scroll
let scrollEcran = scrollY + window.innerHeight;
//largeur de l'ecran
let width = window.innerWidth;
fixed();
function fixed() {
  console.log("taille: " + heightCat + " scroll: " + scrollY);
  if (scrollY >= heightCat && scrollEcran < scrollAcept) {
    element.style.position = "fixed";
    element.style.height = "100%";
    element.style.top = "100px";
    element.style.right = paddingRight;
    element.style.width = elementWidth + "px";
  } else {
    element.style.position = "relative";
    element.style.top = "0";
    element.style.height = "auto";
    element.style.right = "0";
  }
}
//calculer la taille lors du changement d'ecran
window.addEventListener("resize", function () {
  //calcul taille
  heightCat =
    document.querySelector("#actualitesItems .firstColorPoint").offsetHeight +
    document.querySelector("header").offsetHeight;
  //element dont on veux fixer
  element = document.querySelector("#actualitesItems .recent");
  paddingRight = window.getComputedStyle(
    document.querySelector("#actualitesItems .container")
  ).marginRight;
  elementWidth = document.querySelector(
    "#actualitesItems .navActualites"
  ).offsetWidth;
  //obtenir le croll effectué vers le haut
  scrollY = window.scrollY;
  //taille total de la page moins la taille du footer
  scrollAcept =
    document.querySelector("body").offsetHeight -
    document.querySelector("footer").offsetHeight -
    document.querySelector("#informations").offsetHeight;
  //taille de la fenetre + le scroll
  scrollEcran = scrollY + window.innerHeight;
  //largeur de l'ecran
  let width = window.innerWidth;
  fixed();
});
window.addEventListener("scroll", function () {
  //calcul taille
  heightCat =
    document.querySelector("#actualitesItems .firstColorPoint").offsetHeight +
    document.querySelector("header").offsetHeight;
  //element dont on veux fixer
  element = document.querySelector("#actualitesItems .recent");
  paddingRight = window.getComputedStyle(
    document.querySelector("#actualitesItems .container")
  ).marginRight;
  elementWidth = document.querySelector(
    "#actualitesItems .navActualites"
  ).offsetWidth;
  //obtenir le croll effectué vers le haut
  scrollY = window.scrollY;
  //taille total de la page moins la taille du footer
  scrollAcept =
    document.querySelector("body").offsetHeight -
    document.querySelector("footer").offsetHeight -
    document.querySelector("#informations").offsetHeight;
  //taille de la fenetre + le scroll
  scrollEcran = scrollY + window.innerHeight;
  //largeur de l'ecran
  let width = window.innerWidth;
  fixed();
});
