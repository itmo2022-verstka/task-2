const pigs = [
  {
    photos: ['pig1-senechka-1', 'pig1-senechka-2', 'pig1-senechka-3'],
    name: 'Сенечка'
  },
  {
    photos: ['pig2-korzhik'],
    name: 'Коржик'
  },
  {
    photos: ['pig3-margareth-1', 'pig3-margareth-2'],
    name: 'Маргарет'
  },
  {
    photos: ['pig4-kaetana-1', 'pig4-kaetana-2', 'pig4-kaetana-3'],
    name: 'Каэтана'
  },
  {
    photos: ['pig5-diona-1', 'pig5-diona-2'],
    name: 'Диона'
  },
  {
    photos: ['pig6-veronika-1', 'pig6-veronika-2'],
    name: 'Вероника'
  },
  {
    photos: ['pig7-snezhok-1', 'pig7-snezhok-2', 'pig7-snezhok-3'],
    name: 'Снежок'
  }
];
const animationTime = 400;
let currentPigIndex = 0;
let touchStartX = 0;

function nextPig() {
  currentPigIndex = (currentPigIndex + 1) % pigs.length;

  let currentPig = pigs[currentPigIndex];
  let pigElement = document.getElementsByClassName('pig')[0];
  let pigElementImages = pigElement.getElementsByTagName('ul')[0];
  let leftArrow = document.getElementsByClassName('arrow left')[0];
  let rightArrow = document.getElementsByClassName('arrow right')[0];

  pigElement.getElementsByClassName('pig-name')[0].innerHTML = currentPig.name;
  pigElementImages.innerHTML = '';

  if (currentPig.photos.length > 1) {
    leftArrow.style.display = 'block';
    rightArrow.style.display = 'block';
  } else {
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'none';
  }

  currentPig.photos.forEach(photoName => {
    let liElement = document.createElement('li');
    let imgElement = document.createElement('img');

    imgElement.setAttribute('src', `img/${photoName}.jpg`);
    imgElement.setAttribute('alt', currentPig.name);
    imgElement.setAttribute('class', 'pig-image');

    if (pigElementImages.innerHTML === '') {
      imgElement.style.display = 'block';
    }

    liElement.appendChild(imgElement);
    pigElementImages.appendChild(liElement);
  });
}

let findPhotoAndShow = function(allPhotos, scrollCnt) {
  for (let i = 0; i < allPhotos.length; i++) {
    if (allPhotos[i].style.display === 'block') {
      allPhotos[i].style.display = 'none';
      allPhotos[(i + scrollCnt + allPhotos.length) % allPhotos.length].style.display = 'block';

      return;
    }
  }
};

function previousPhoto() {
  let allPhotos = document.getElementsByClassName('pig-image');

  findPhotoAndShow(allPhotos, -1);
}
function nextPhoto() {
  let allPhotos = document.getElementsByClassName('pig-image');

  findPhotoAndShow(allPhotos, 1);
}

let swipeLeft = function() {
  let pig = document.getElementsByClassName('pig')[0];

  pig.animate(
    [{ transform: 'translate(0, 0) rotate(0)' }, { transform: 'translate(-70vh, 0) rotate(7deg)' }],
    { duration: animationTime }
  );
};

let swipeRight = function() {
  let pig = document.getElementsByClassName('pig')[0];

  pig.animate(
    [{ transform: 'translate(0, 0) rotate(0)' }, { transform: 'translate(70vh, 0) rotate(-7deg)' }],
    { duration: animationTime }
  );
};

function like() {
  swipeRight();
  setTimeout(nextPig, animationTime - 10); /* Картинка не моментально меняется */
}

function superLike() {
  like();
}

function reject() {
  swipeLeft();
  setTimeout(nextPig, animationTime - 10);
}

document.getElementsByClassName('pig')[0].addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});

document.getElementsByClassName('pig')[0].addEventListener('touchend', e => {
  let width =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (e.changedTouches[0].screenX - touchStartX > width / 4) like();
  if (e.changedTouches[0].screenX - touchStartX < -width / 4) reject();
});
