document.addEventListener('touchstart', OnTouchStart, false);
document.addEventListener('touchmove', OnTouchMove, false);
document.addEventListener('touchend', OnTouchEnd, false);

const params = {
  minX: 50
};

const state = {
  initialX: null,
  initialY: null,
  endX: null,
  endY: null
};

function resetState() {
  state.initialX = null;
  state.initialY = null;
  state.endX = null;
  state.endY = null;
}

function OnTouchStart(evt) {
  const firstTouch = evt.touches[0];
  state.initialX = firstTouch.clientX;
  state.initialY = firstTouch.clientY;
}

function OnTouchMove(evt) {
  const firstTouch = evt.touches[0];
  state.endX = firstTouch.clientX;
  state.endY = firstTouch.clientY;
}

function OnTouchEnd() {
  if (!state.endX || !state.endY) {
    return;
  }
  const xDiff = state.endX - state.initialX;
  const yDiff = state.endY - state.initialY;
  if (Math.abs(xDiff) >= params.minX) {
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      console.log(xDiff);
      if (xDiff > 0) {
        const elements = document.querySelectorAll('.buttons-group');
        Array.from(elements)
          .filter(item => getComputedStyle(item).display !== 'none')[0]
          .children[0].click();
      } else {
        const elements = document.querySelectorAll('.buttons-group');
        Array.from(elements)
          .filter(item => getComputedStyle(item).display !== 'none')[0]
          .children[1].click();
      }
    }
  }
  resetState();
}
