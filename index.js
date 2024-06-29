let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]

function getRandomCard(){
    return 5
}

let hasBlackJack = false
let isAlive = true

let message = " "

messageEl = document.getElementById("message-el")
sumEl = document.getElementById("sum-el")
cardsEl = document.getElementById("cards-el")

function startGame() {
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
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}