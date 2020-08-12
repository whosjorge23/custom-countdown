const inputContainer = document.getElementById('input-container')
const countdownForm = document.getElementById('countdownForm')
const dateElement = document.getElementById('date-picker')

let countdownTitle = ''
let countdownDate = ''

//Set Date Input Min With Today's Date
const today = new Date().toISOString().split('T')[0]
//dateElement.setAttribute('min',today)

//Take Values From Form Input
function updateCountdown(e) {
    e.preventDefault()
    countdownTitle = e.srcElement[0].value
    countdownDate = e.srcElement[1].value
    console.log(countdownTitle, countdownDate)
}

//Event Listener
countdownForm.addEventListener('submit',updateCountdown)