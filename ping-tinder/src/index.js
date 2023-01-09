const PIG_PHOTO_ID = 'pig-photo';
const PIG_NAME_ID = 'pig-name';
const PIG_AGE_ID = 'pig-age';
const pigs = [
  {
    name: 'Григориана',
    age: '10 месяцев'
  },
  {
    name: 'Аврора',
    age: '3 месяца'
  },
  {
    name: 'Ева',
    age: '1 год'
  },
  {
    name: 'Ласка',
    age: '4 месяца'
  },
  {
    name: 'Кэс',
    age: '6 месяцев'
  },
  {
    name: 'Шейла',
    age: '11 месяцев'
  },
  {
    name: 'Волна',
    age: '1 год'
  },
  {
    name: 'Инди',
    age: '8 месяцев'
  }
];

let index = 0;
function nextPig() {
  document.getElementById(PIG_NAME_ID).innerText = pigs[index].name;
  document.getElementById(PIG_AGE_ID).innerText = pigs[index].age;
  document.getElementById(PIG_PHOTO_ID).style.backgroundImage = `url(${getUrl()})`;
}

function getUrl() {
  index = (index + 1) % pigs.length;
  return `img/${index}.jpeg`;
}
