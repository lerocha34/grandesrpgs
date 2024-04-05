window.addEventListener("scroll", function () {
  var gotopButton = document.getElementById("gotop");
  if (window.scrollY > 10) {
    gotopButton.style.display = "block";
  } else {
    gotopButton.style.display = "none";
  }
});

let menu = document.querySelector(".menu-opener");
let menuOpened = false;
menu.addEventListener("click", () => {
  if (!menuOpened) {
    document.querySelector("nav").style.width = "80vw";
    menuOpened = true;
  } else if (menuOpened == true) {
    document.querySelector("nav").style.width = "0vw";
    menuOpened = false;
  }
});
