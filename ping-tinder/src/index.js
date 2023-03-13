let currentPig = 0;
const lastPig = 8;

function changeCard(action) {
  let previousPig = currentPig;
  if (action == "prev") {
    if (currentPig == 0) return;
    currentPig--;
  }
  if (currentPig == lastPig) ruturn;
  if (action == "like" || action == "dislike" || action == "superlike") {
    currentPig++;
  }
  displayPig(previousPig, currentPig, action);
}

function displayPig(previousPig, currentPig, effect = "neutral") {
  const cards = document.querySelectorAll(".card");
  const title = document.querySelector(".title");
  cards[previousPig].style.display = "none";
  cards[currentPig].style.display = "flex";
  if (effect == "like"){
    title.innerHTML = "Pig😍Tinder";
  } else if (effect == "dislike") {
    title.innerHTML = "Pig😬Tinder";
  } else if (effect == "superlike") {
    title.innerHTML = "Pig🤩Tinder";
  } else {
    title.innerHTML = "Pig🙂Tinder";
  }
}
