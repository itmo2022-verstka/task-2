// Новая картинка
var i = 0;
var img_arr = new Array('1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '0.jpg',
);

var name_arr = new Array(
  'Евдокия',
  'Василиса',
  'Богдана',
  'Раиса',
  'Зарина',
  'Антонина',
  'Жанна',
  'Любовь',
  'Клавдия',
  'Лидия',
  'Матильда'
)

var description_arr = new Array(
  'Безработная, 1 месяц',
  'Меломанка, 2 месяца',
  'Роковая красотка, 3 месяца',
  'Повар, 4 месяца',
  'Выпускница, 5 месяцев',
  'Проводница, 6 месяцев',
  'Модель, 7 месяцев',
  'Художница, 8 месяцев',
  'Лягушка, 9 месяцев',
  'Бутерброд, 10 месяцев',
  'Студент, голодный'
)

// Свайп

function changes() {
  var image = document.getElementById("image");
  var name = document.getElementById("name");
  var descript = document.getElementById("description");
  if (i === img_arr.length) i = 0;
  image.src = `img/${img_arr[i]}`;
  name.textContent = name_arr[i];
  descript.textContent = description_arr[i];
  i++;
}

document.addEventListener('touchstart', startCoordinates, false);
document.addEventListener('touchmove', checkSwipe, false);
var x_before = null, y_before = null;


function startCoordinates(event) {
    x_before = event.touches[0].clientX;
    y_before = event.touches[0].clientY;
};

function sleep(millis) { //плохо разбираюсь пока с промисами и сетаймаутами так что пока так
    var t = (new Date()).getTime();
    var imil = 0;
    while (((new Date()).getTime() - t) < millis) {
        imil++;
    }
}

function checkSwipe(event) {
    if ( !x_before || !y_before ) return;
    let x_after = event.touches[0].clientX;
    let y_after = event.touches[0].clientY;
    let x = x_before - x_after;
    let y = y_before - y_after;
    if (Math.abs(x) > Math.abs(y) && Math.abs(x) > 200) {
        if (x > 0) {
          changes();
          sleep(400);
        } else {
          changes();
          sleep(400);
        }
    }
  x = null;
  y = null;
};
