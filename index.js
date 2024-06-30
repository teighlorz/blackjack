let sum = 0
let cards = [ ]
let hasBlackJack = false
let isAlive = false
let message = " "

let player = {
    name: "Player",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

messageEl = document.getElementById("message-el")
sumEl = document.getElementById("sum-el")
cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    let randomNumber= Math.floor(Math.random() * (13) + 1);
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    isAlive = true
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack == false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    }
