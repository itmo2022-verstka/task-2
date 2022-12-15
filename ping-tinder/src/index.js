const pigCount = 7
let currentPig = 1

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;
let yDown = null;

function getTouches(event) {
  return event.touches;
}

function handleTouchStart(event) {
  const firstTouch = getTouches(event)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(event) {
  if (xDown === null || yDown === null) {
    return;
  }

  const xDiff = event.touches[0].clientX - xDown;
  const yDiff = event.touches[0].clientY - yDown;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      swipe("right")
    } else {
      swipe("left")
    }
  } else {
    if (yDiff < 0) {
      swipe("up")
    }
  }
  xDown = null;
  yDown = null;
}

function swipe(direction) {
  if (currentPig <= pigCount) {
    const currentPigCard = document.getElementById(`card${currentPig}`);

    switch (direction) {
      case "left":
        currentPigCard.style.transform = 'translate3d(-100%, 100%, 0) rotateZ(-720deg) scale(0.1)';
        break;
      case "right":
        currentPigCard.style.transform = 'translate3d(100%, -100%, 0) rotateZ(720deg) scale(0.1)';
        break;
      case "up":
        currentPigCard.style.transform = 'translate3d(0%, -60%, 0) rotateX(720deg) scale(0.1)';
        break;
    }
    setTimeout(() => {
      currentPigCard.style.opacity = "0";
    }, 400);

    currentPig++;
    if (currentPig !== pigCount + 1) {
      document.getElementById(`card${currentPig}`).style.opacity = "1";
    } else {
        document.getElementById("end").style.opacity = "1";
    }
  }
}
