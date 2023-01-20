let curPig = document.getElementById("pig1");

function change(id) {
  let num = id[id.length - 1];
  let id1 = id.substring(0, 3) + (num % 8 + 1);
  document.getElementById(id).style.zIndex = 1
  document.getElementById(id1).style.display = "block"
  curPig = document.getElementById(id1)
  document.getElementById(id).style.zIndex = 0
  document.getElementById(id).style.display = "none"
}

function nextCard() {
  let pig = "pig1"
  for (let i = 1; i <= 9; i++) {
    if (document.getElementById(pig).style.display === "block") {
      change(pig)
      break;
    } else {
      pig = pig.substring(0, 3) + i;
    }
  }
}

function like() {
  curPig.animate(swipeRight, timing);
  setTimeout(nextCard, 500);
}

function dislike() {
  curPig.animate(swipeLeft, timing);
  setTimeout(nextCard, 500);
}


const swipeRight = [
  { transform: 'translate(0px, 0%) rotate(0)' },
  { transform: 'translate(300px, 0%) rotate(30deg)' }
];

const swipeLeft = [
  { transform: 'translate(0px, 0%) rotate(0)' },
  { transform: 'translate(-300px, 0%) rotate(-30deg)' }
];

const timing = {
  duration: 600,
  iterations: 1,
}

let touchstartX = 0
let touchendX = 0

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  if (touchendX - touchstartX > 40) {
    like()
  }

  if (touchendX - touchstartX < -40) {
    dislike()
  }

})
