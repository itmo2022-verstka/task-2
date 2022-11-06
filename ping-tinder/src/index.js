'use strict';

const last = 8;
let currentCard = 1;

function handleSwipe(element, callback) {
  const touchElement = element;
  const threshold = 100;
  const restraint = 100;
  const allowedTime = 500;
  const handler = callback || function(swipeType) {};
  let swipeType;
  let startTime;
  let elapsedTime;
  let startX;
  let startY;
  let endX;
  let endY;
  touchElement.addEventListener(
    'touchstart',
    function(e) {
      const touchObject = e.changedTouches[0];
      swipeType = 'none';
      startX = touchObject.pageX;
      startY = touchObject.pageY;
      startTime = new Date().getTime();
      e.preventDefault();
    },
    false
  );
  touchElement.addEventListener(
    'touchmove',
    function(e) {
      e.preventDefault();
    },
    false
  );
  touchElement.addEventListener(
    'touchend',
    function(e) {
      const touchObject = e.changedTouches[0];
      endX = touchObject.pageX - startX;
      endY = touchObject.pageY - startY;
      elapsedTime = new Date().getTime() - startTime;
      if (elapsedTime <= allowedTime) {
        if (Math.abs(endX) >= threshold && Math.abs(endY) <= restraint) {
          swipeType = endX < 0 ? 'left' : 'right';
        } else if (Math.abs(endY) >= threshold && Math.abs(endX) <= restraint) {
          swipeType = endY < 0 ? 'up' : 'down';
        }
      }
      handler(swipeType);
      e.preventDefault();
    },
    false
  );
}

function addListener() {
  const currentCardElement = document.getElementById(`card${currentCard}`);
  handleSwipe(currentCardElement, swipeType => {
    switch (swipeType) {
      case 'left':
        swipeNope();
        break;
      case 'up':
        swipeSuper();
        break;
      case 'right':
        swipeLike();
        break;
    }
  });
}

addListener();

function swipeNope() {
  swipe('nope');
}

function swipeSuper() {
  swipe('super');
}

function swipeLike() {
  swipe('like');
}

function swipe(swipeId) {
  if (currentCard === last) {
    return;
  }

  const answerElement = document.getElementById(swipeId);
  const prevCardStyle = document.getElementById(`card${currentCard}`);

  answerElement.style.opacity = '1';

  switch (swipeId) {
    case 'nope':
      prevCardStyle.style.transform = `translate3d(-200%, -100%, 0) rotateZ(-60deg)`;
      break;
    case 'like':
      prevCardStyle.style.transform = `translate3d(200%, -100%, 0) rotateZ(60deg)`;
      break;
    case 'super-like':
      prevCardStyle.style.transform = `translate3d(0, -200%, 0)`;
      break;
  }

  setTimeout(() => {
    prevCardStyle.style.opacity = '0';
    prevCardStyle.style.display = 'none';
  }, 500);

  currentCard++;
  const currentCardElement = document.getElementById(`card${currentCard}`);
  currentCardElement.style.display = 'flex';
  currentCardElement.style.opacity = '0';
  addListener();
  setTimeout(() => {
    currentCardElement.style.opacity = '1';
  }, 500);
}
