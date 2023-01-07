function change(id) {
  let num = id[id.length - 1];
  let id1 = id.substring(0, 3) + (num % 8 + 1);
  document.getElementById(id).style.zIndex = 1
  document.getElementById(id1).style.display = "block"
  document.getElementById(id).style.zIndex = 0
  document.getElementById(id).style.display = "none"
}

function nextCard() {
  let pig = "pig1"
  for (let i = 1; i <= 9; i++) {
    if (document.getElementById(pig).style.display === "block") {
      change(pig)
      break;
    } else {
      pig = pig.substring(0,3) + i;
    }
  }
}
