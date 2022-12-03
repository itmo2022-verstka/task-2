let items;
let num;
let intervals;
let startTouch = 0
let endTouch = 0

document.addEventListener("DOMContentLoaded", function () {
  num = -1;
  items = [
    {name: "Мару", age: "10 месяцев", image:"./../assets/Maru.jpg"},
    {name: "Абигейл", age: "9 месяцев", image:"./../assets/Abigail.jpg"},
    {name: "Лея", age: "8 месяцев", image:"./../assets/Leah.jpg"},
    {name: "Хейли", age: "11 месяцев", image:"./../assets/Hayley.webp"},
    {name: "Эмили", age: "1 год", image:"./../assets/Emily.jpg"},
    {name: "Пенни", age: "8 месяцев", image:"./../assets/Penny.jpg"},
    {name: "Джоди", age: "1 год", image:"./../assets/Jodi.jpg"}
  ]
  changeImage();
})

function changeImage(element) {
  clearInterval(intervals)
  num = (num + 1) % items.length;
  const curItem = items[num];
  document.getElementById("item-name").innerText = curItem.name;
  document.getElementById("item-age").innerText = curItem.age;
  document.getElementById("item-image").src = curItem.image
  if (curItem.name === "Мару" || curItem.name === "Эмили") {
    document.getElementById("item-name").style.color = "black";
    document.getElementById("item-age").style.color = "black"
  } else {
    document.getElementById("item-name").style.color = "white";
    document.getElementById("item-age").style.color = "white"
  }
  fadeAnimation()
  buttonAnimation(element)
}

function fadeAnimation() {
  let curBrightness = 0;
  intervals = setInterval(() => {
    if (curBrightness < 100) {
      document.getElementById("item-image").style.filter = `brightness(${curBrightness}%)`;
      curBrightness += 5;
    }
  }, 10)
}

function buttonAnimation(button) {
  if (button !== undefined) {
    button.classList.add("active");
    intervals = setInterval(() => {
        button.classList.remove("active");
    }, 50)
  }
}


//============================ swipe ==================== //

function checkDirection() {
  if (Math.abs(startTouch - endTouch) > 100) {
    if (startTouch < endTouch) {
      changeImage();
      // dislike
    } else {
      changeImage();
      // like
    }
  }
}


document.addEventListener("touchstart", e => {
  startTouch = e.changedTouches[0].screenX;
})

document.addEventListener("touchend", e => {
  endTouch = e.changedTouches[0].screenX;
  checkDirection()
})

