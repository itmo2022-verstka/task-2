let topPig = 1
const maxPigs = 8   

function animateOnClick(action) {
    if (topPig == 0) {
        return
    }

    const cards = document.querySelectorAll(".card")
    cards[topPig - 1].style.display = "none"
    cards[topPig].style.display = "flex"

    topPig = (topPig+1)%maxPigs
}

function addToFavourites() {
    const cards = document.querySelectorAll(".card")
    const node = document.createElement("div")
    node.textContent = cards[topPig - 1].querySelector(".info").innerText
    document.querySelector(".sidenav").appendChild(node)
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

function refreshSuggests() {
    const cards = document.querySelectorAll(".card")
    cards[0].style.display = "flex"
    for (let i = 1; i < cards.length; i++) {
        cards[i].style.display = "none"
    }
    topPig = 1
}  

