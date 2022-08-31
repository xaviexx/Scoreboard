let scoreEl = document.getElementById("scoreHome")
let scoreElement = document.getElementById("scoreGuest")
let countHome = 0
let countGuest = 0



function firstPointHome() {
    countHome = countHome + 1
    scoreEl.textContent = countHome
}

function secondPointHome() {
     countHome = countHome + 2
    scoreEl.textContent = countHome
    
}

function thirdPointHome() {
    countHome = countHome + 3
    scoreEl.textContent = countHome
}


function firstPointGuest() {
    countGuest = countGuest + 1
    scoreElement.textContent = countGuest
}

function secondPointGuest() {
     countGuest = countGuest + 2
    scoreElement.textContent = countGuest
    
}

function thirdPointGuest() {
     countGuest = countGuest + 3
    scoreElement.textContent = countGuest
}

