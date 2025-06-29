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



/*-------- Functions -----------------------*/
play()


function getComputerChoice() {
    // generate a random number 0-2
    const randomIndex = Math.floor(Math.random() * choice.length)
    // select the item from the array
    return choice[randomIndex]
}

// initialize game state
function play() {
    console.log('computerChoice', computerChoice)
    computerChoice = getComputerChoice()
    console.log('computerChoice', computerChoice)

    // after updating state, render to html
    render()
}



// updates our UI/html directly
function render() {

}


/*--------- Event Listeners ----------------*/