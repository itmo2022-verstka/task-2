let current = 1
let number = 9

window.addEventListener('touchstart', function (event) {
  touchstartX = event.changedTouches[0].screenX;
}, false);

window.addEventListener('touchend', function (event) {
  touchendX = event.changedTouches[0].screenX;
  swipe();
}, false);


function swipe() {
  if (Math.abs(touchendX - touchstartX) < 20) {
    return
  }

  // if (touchendX < touchstartX - 10) {
  //   current = (number + current - 2) % number + 1
  // }
  //
  // if (touchendX > touchstartX + 10) {
  //   current = current % number + 1
  // }

  current = current % number + 1

  document.getElementById("pig" + current).checked = true;
}
