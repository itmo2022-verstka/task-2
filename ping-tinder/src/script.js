let carusel = document.querySelector('.carusel');

const sensitivity = 20;

let touchStart = null;
let touchPosition = null;

carusel.addEventListener("touchstart", function (e) {
  TouchStart(e);
});
carusel.addEventListener("touchmove", function (e) {
  TouchMove(e);
});
carusel.addEventListener("touchend", function () {
  TouchEnd();
});
carusel.addEventListener("touchcancel", function () {
  TouchEnd();
});

function TouchStart(e) {
  touchStart = {x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY};
  touchPosition = {x: touchStart.x, y: touchStart.y};

}

function TouchMove(e) {
  touchPosition = {x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY};

}

function TouchEnd() {
  CheckAction();
  touchStart = null;
  touchPosition = null;
}

function CheckAction() {
  let d = {
    x: touchStart.x - touchPosition.x,
    y: touchStart.y - touchPosition.y
  };

  if (Math.abs(d.x) > sensitivity) {
    if (d.x > 0) {
      let red = document.querySelector(".carusel input:checked + label + label + label + div + input");
      red.setAttribute('checked', 'true');
      console.log("red");
      carusel = document.querySelector('.carusel input:checked + label + label + label + div .carusel__item');
    } else {
      let red = document.querySelector(".carusel input:checked + label + label + label + div + input");
      red.setAttribute('checked', 'true');
      console.log("love");
      carusel = document.querySelector('.carusel input:checked + label + label + label + div .carusel__item');
    }
  }
}
