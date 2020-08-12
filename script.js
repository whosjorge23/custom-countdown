const inputContainer = document.getElementById('input-container')
const countdownForm = document.getElementById('countdownForm')
const dateElement = document.getElementById('date-picker')

const countdownElement = document.getElementById('countdown')
const countdownElementTitle = document.getElementById('countdown-title')
const countdownButton = document.getElementById('countdown-button')
const timeElements = document.querySelectorAll('span')

const completeElement = document.getElementById('complete')
const completeElementInfo = document.getElementById('complete-info')
const completeButton = document.getElementById('complete-button')

let countdownTitle = ''
let countdownDate = ''
let countdownValue = Date
let countdownActive

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

//Set Date Input Min With Today's Date
const today = new Date().toISOString().split('T')[0]
dateElement.setAttribute('min',today)

//Populate Countdown / Complete UI
function updateDOM() {
    countdownActive = setInterval(() => {
        const now = new Date().getTime()
        const distance = countdownValue - now
        //console.log('distance:',distance)

        const days = Math.floor(distance / day)
        const hours = Math.floor((distance % day) / hour)
        const minutes = Math.floor((distance % hour) / minute)
        const seconds = Math.floor((distance % minute) / second)
        //console.log(days,hours,minutes,seconds)

        //Hide Input
        inputContainer.hidden = true

        //If The Countdown Has Ended, Show Complete
        if (distance < 0) {
            countdownElement.hidden = true
            clearInterval(countdownActive)
            completeElementInfo.textContent = `${countdownTitle} Finished On ${countdownDate}`
            completeElement.hidden = false
        }else {
        //Else Show Countdown In Progress
            //Populate Countdown
            countdownElementTitle.textContent = `${countdownTitle}`
            timeElements[0].textContent = `${days}`
            timeElements[1].textContent = `${hours}`
            timeElements[2].textContent = `${minutes}`
            timeElements[3].textContent = `${seconds}`
            completeElement.hidden = true
            //Show Countdown
            countdownElement. hidden = false
        }

        
        
    },second)
}

//Take Values From Form Input
function updateCountdown(e) {
    e.preventDefault()
    countdownTitle = e.srcElement[0].value
    countdownDate = e.srcElement[1].value
    //console.log(countdownTitle, countdownDate)

    //Check For Valid Date
    if (countdownDate === '') {
        alert('Please select a date for a countdown')
    }else {
        //Get Number Version Of Current Date, Update DOM 
        countdownValue = new Date(countdownDate).getTime()
        //console.log('countdownValue:',countdownValue)
        updateDOM()
    }
}

//Reset All Values
function reset() {
    //Hide Countdowns / Show Inputs
    countdownElement.hidden = true
    completeElement.hidden = true
    inputContainer.hidden = false
    //Stop Countdown
    clearInterval(countdownActive)
    //Reset Values
    countdownTitle = ''
    countdownDate = ''
}

//Event Listener
countdownForm.addEventListener('submit',updateCountdown)
countdownButton.addEventListener('click',reset)
completeButton.addEventListener('click',reset)