// Новая картинка

var name_arr = new Array(
  'Матильда',
  'Евдокия',
  'Василиса',
  'Богдана',
  'Раиса',
  'Зарина',
  'Антонина',
  'Жанна',
  'Любовь',
  'Клавдия',
  'Лидия'
)

var description_arr = new Array(
  'Студент, голодный',
  'Безработная, 1 месяц',
  'Меломанка, 2 месяца',
  'Роковая красотка, 3 месяца',
  'Повар, 4 месяца',
  'Выпускница, 5 месяцев',
  'Проводница, 6 месяцев',
  'Модель, 7 месяцев',
  'Художница, 8 месяцев',
  'Лягушка, 9 месяцев',
  'Бутерброд, 10 месяцев'
)

var i = 0;
var img_arr = Array();
for (let k = 0; k < 11; k++) {
  img_arr.push(new Object(`${k}.jpg`));
  img_arr[k].name_arr = name_arr[k];
  img_arr[k].description_arr = description_arr[k];
} //это занимает больше по памяти, я не совсем поняла что хотелось наверное

console.log(img_arr)


// Свайп

function changes() {
  var image = document.getElementById("image");
  var name = document.getElementsByClassName("name")[0];
  var descript = document.getElementsByClassName("description")[0];
  if (i === img_arr.length) i = 0;
  image.src = `img/${img_arr[i]}`;
  name.textContent = img_arr[i].name_arr;
  descript.textContent = img_arr[i].description_arr;
  i++;
}

/* 

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
*/
