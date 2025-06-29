/*------------ Constants ------------------*/
const choice = ['rock', 'paper', 'scissors']


/*------------- Variables -----------------*/
let msg
let playerChoice
let computerChoice


/*------ Cached Element References ---------*/
const rockBtnEl = document.querySelector('#rock')
const paperBtnEl = document.querySelector('#paper')
const scissorsBtnEl = document.querySelector('#scissors')
const resultDisplayEl = document.querySelector('#result-display')


/*-------- Functions -----------------------*/
function getComputerChoice() {
    // generate a random number 0-2
    const randomIndex = Math.floor(Math.random() * choice.length)
    // select the item from the array
    return choice[randomIndex]
}

// initialize game state
function play() {
    computerChoice = getComputerChoice()

    // after updating state, render to html
    render()
}


// updates our UI/html directly
function render() {
    resultDisplayEl.textContent = `Computer chose ${computerChoice} and you chose ${playerChoice}.`
}

function test() {
    console.log('you clicked me')
}

/*--------- Event Listeners ----------------*/
rockBtnEl.addEventListener('click', play)
paperBtnEl.addEventListener('click', play)
scissorsBtnEl.addEventListener('click', play)