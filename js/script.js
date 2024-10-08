//scroll de la page
AOS.init();
//slider des astuces
$(document).on("ready", function () {
  $(".slideActualites").slick({
    dots: true,
    infinite: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
//la taille de l'écran
let largeurEcran = window.innerWidth;
window.addEventListener("resize", () => {
  largeurEcran = window.innerWidth;
});
let copy = document.querySelector(".cardContains").cloneNode(true);
document.querySelector(".cardHeader").appendChild(copy);
let cardContains = Array.from(document.querySelectorAll(".cardContains"));
let cards = Array.from(document.querySelectorAll(".cardHeader .card"));
setSlide();
function isPaused() {
  cardContains.forEach((cardContain) => {
    cardContain.classList.toggle("running");
    cardContain.classList.toggle("paused");
  });
}
if (largeurEcran > 576) {
  // Ajouter un gestionnaire d'événements de survol pour arrêter le défilement lorsque la souris est sur le conteneur
  cards.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      isPaused(); // Mettre en pause le défilement lorsque la souris survole le conteneur
      img.classList.toggle("firstTime");
      img.classList.toggle("secondTime");
      if (img.classList.contains("secondTime")) {
        imageBg(img);
      }
    });
  });

  cards.forEach((img) => {
    img.addEventListener("mouseleave", () => {
      isPaused();
      img.classList.toggle("firstTime");
      img.classList.toggle("secondTime");
      if (img.classList.contains("secondTime")) {
        imageBg(img);
      }
    });
  });
} else {
  // Ajouter un gestionnaire d'événements de clic sur chaque image pour mettre en pause/démarrer le défilement
  cards.forEach((img) => {
    img.addEventListener("click", () => {
      isPaused();
      img.classList.toggle("firstTime");
      img.classList.toggle("secondTime");
      if (img.classList.contains("secondTime")) {
        imageBg(img);
      }
    });
  });
}

function imageBg(card) {
  card.style.background =
    "url('" + card.querySelector("img").src + "') no-repeat center / cover";
}

function setSlide() {
  cards.forEach((card) => {
    card.style.width = (largeurEcran * 80) / 100 + "px";
  });
}
window.addEventListener("resize", () => {
  largeurEcran = window.innerWidth;
  setSlide();
});
//affichage Modal
const button = document.querySelector(".popup");
closeButtons = document.querySelectorAll(".closeButton");
if (getCookieValue("popup") == "") {
  setTimeout(() => {
    button.dispatchEvent(
      new Event("click", {
        bubbles: true,
        cancelable: false,
      })
    );
  }, 1000);
}
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    creerCookie("popup", true, 1);
  });
});

function creerCookie(nom, valeur, duree) {
  const dateExpiration = new Date();
  dateExpiration.setDate(dateExpiration.getDate() + duree);
  const cookieString = `${nom}=${valeur};expires=${dateExpiration.toUTCString()};path=/`;
  document.cookie = cookieString;
}
function getCookieValue(nomCookie) {
  const nameCookie = nomCookie + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieParts = decodedCookie.split(";");
  for (let i = 0; i < cookieParts.length; i++) {
    const currentCookie = cookieParts[i].trim();
    if (currentCookie.startsWith(nameCookie)) {
      return currentCookie.substring(nameCookie.length, currentCookie.length);
    }
  }
  return ""; // Cookie non trouvé
}
