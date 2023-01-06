function card(img, name, info) {
  return {
    img: img,
    name: `${name}`,
    description: `${info}`
  }
}

const cards = [
  card('0.jpg', 'Maтильда', 'Студент, голодный'),
  card('1.jpg', 'Евдокия', 'Безработная, 1 месяц'),
  card('2.jpg', 'Василиса', 'Меломанка, 2 месяца'),
  card('3.jpg', 'Богдана', 'Роковая красотка, 3 месяца'),
  card('4.jpg', 'Раиса', 'Повар, 4 месяца'),
  card('5.jpg', 'Зарина', 'Выпускница, 5 месяцев'),
  card('6.jpg', 'Антонина', 'Проводница, 6 месяцев'),
  card('7.jpg', 'Жанна', 'Модель, 7 месяцев'),
  card('8.jpg', 'Любовь', 'Художница, 8 месяцев'),
  card('9.jpg', 'Клавдия', 'Лягушка, 9 месяцев'),
  card('10.jpg', 'Лидия', 'Бутерброд, 10 месяцев'),
]

var i = 0;

function changes() {
  var image = document.getElementById("image");
  var name = document.getElementsByClassName("name")[0];
  var descript = document.getElementsByClassName("description")[0];
  if (i === cards.length) i = 0;
  image.src = `img/${cards[i].img}`;
  name.textContent = cards[i].name;
  descript.textContent = cards[i].description;
  i++;
}
