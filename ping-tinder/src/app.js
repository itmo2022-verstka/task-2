function dislike() {
  nextCard("icon1")
}

function superLike() {
  nextCard("icon2")
}

function like() {
  nextCard("icon3")
}


function nextCardId(id) {
  let num = parseInt(id.substring(3))
  num = num % 8 + 1
  return id.substring(0, 3) + num
}

function change(id, id1) {
  let id2 = nextCardId(id1)
  document.getElementById(id1).style.zIndex = 1
  document.getElementById(id2).style.display = "block"
  document.getElementById(id1).style.zIndex = 0
  document.getElementById(id1).style.display = "none"
}

function nextCard(id) {
  let start = "pig1"
  while (true) {
    if (document.getElementById(start).style.display === "block") {
      change(id, start)
      break;
    }
    start = nextCardId(start)
  }
}
