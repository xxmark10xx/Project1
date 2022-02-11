/*
    THIS IS TO SHOW THE NEXT BUTTON ON CLICK OF THE FIRST (FOR PLAYER 1'S LEFT HAND)
    IF NOT THE OTHER BUTTONS WILL NOT WORK.
*/

var disp = document.querySelector('#winner')
let countp1LeftHand = 0;
let countp1RightHand = 0;
let countp2LeftHand = 0;
let countp2RightHand = 0;

 

// document.querySelector('#reset-button').addEventListener('click', resetButton)

document.querySelector('#player1Left2').style.display = 'none';
let p1L1 = document.querySelector('#player1Left1').addEventListener('click', showLeft2)

document.querySelector('#player1Left3').style.display = 'none';
let p1L2 = document.querySelector('#player1Left2').addEventListener('click', showLeft3)

document.querySelector('#player1Left4').style.display = 'none';
let p1L3 = document.querySelector('#player1Left3').addEventListener('click', showLeft4)

document.querySelector('#player1Left5').style.display = 'none';
let p1L4 = document.querySelector('#player1Left4').addEventListener('click', showLeft5)


/*
    THIS IS TO SHOW THE NECT BUTTON ON CLICK OF THE FIRST (FOR PLAYER 1'S RIGHT HAND)
    IF NOT THE OTHER BUTTONS WILL NOT WORK.
*/
document.querySelector('#player1Right2').style.display = 'none';
let p1R1 = document.querySelector('#player1Right1').addEventListener('click', showRight2)

document.querySelector('#player1Right3').style.display = 'none';
let p1R2 = document.querySelector('#player1Right2').addEventListener('click', showRight3)

document.querySelector('#player1Right4').style.display = 'none';
let p1R3 = document.querySelector('#player1Right3').addEventListener('click', showRight4)

document.querySelector('#player1Right5').style.display = 'none';
let p1r4 = document.querySelector('#player1Right4').addEventListener('click', showRight5)

/* 
    THESE FUNCTION WILL BE TO SHOW THE BUTTONS FOR PLAYER1'S LEFT HAND
*/
function showLeft2 (e) {
    countp1LeftHand++
    document.querySelector('#player1Left2').style.display = 'block';
    e.preventDefault();
}

function showLeft3 (e) {
    countp1LeftHand++
    document.querySelector('#player1Left3').style.display = 'block';
    e.preventDefault();
}

function showLeft4 (e) {
    countp1LeftHand++
    document.querySelector('#player1Left4').style.display = 'block';
    e.preventDefault();
}
function showLeft5 (e) {
    countp1LeftHand++
    document.querySelector('#player1Left5').style.display = 'block';
    e.preventDefault()
    if (countp1LeftHand =4){
        document.querySelector('#player1Left1').style.display = 'none';
        document.querySelector('#player1Left2').style.display = 'none';
        document.querySelector('#player1Left3').style.display = 'none';
        document.querySelector('#player1Left4').style.display = 'none';
        document.querySelector('#player1Left5').style.display = 'none';
    }
    displayWinner()
}

/*
    THESE FUNCTIONS WILL BE TO SHOW THE BUTTONS FOR PLAYER1'S RIGHT HAND
*/

function showRight2 (e) {
    countp1RightHand++
    document.querySelector('#player1Right2').style.display = 'block';
    e.preventDefault();
}

function showRight3 (e) {
    countp1RightHand++
    document.querySelector('#player1Right3').style.display = 'block';
    e.preventDefault();
}

function showRight4 (e) {
    countp1RightHand++
    document.querySelector('#player1Right4').style.display = 'block';
    e.preventDefault();
}
function showRight5 (e) {
    countp1RightHand++
    document.querySelector('#player1Right5').style.display = 'block';
    e.preventDefault();
    if (countp1RightHand = 4){
        document.querySelector('#player1Right1').style.display = 'none';
        document.querySelector('#player1Right2').style.display = 'none';
        document.querySelector('#player1Right3').style.display = 'none';
        document.querySelector('#player1Right4').style.display = 'none';
        document.querySelector('#player1Right5').style.display = 'none';
    }
    displayWinner()
}

/*
    THIS IS TO MAKE THE BUTTONS FOR PLAYER 2 LEFT HAND DISAPPEAR UNTIL THE FIRST ON IS CLICKED
*/

document.querySelector('#player2Left2').style.display = 'none';
let p2L1 = document.querySelector('#player2Left1').addEventListener('click', showP2Left2)

document.querySelector('#player2Left3').style.display = 'none';
let p2L2 = document.querySelector('#player2Left2').addEventListener('click', showP2Left3)

document.querySelector('#player2Left4').style.display = 'none';
let p2L3 = document.querySelector('#player2Left3').addEventListener('click', showP2Left4) 


document.querySelector('#player2Left5').style.display = 'none';
let p2L4 = document.querySelector('#player2Left4').addEventListener('click', showP2Left5) 

/*
    THIS IS TO MAKE THE BUTTONS FOR PLAYER 2 RIGHT HAND DISAPPEAR  UNTIL THE PREVIOUS BUTTON IS 
    CLICKED
*/

document.querySelector('#player2Right2').style.display = 'none';
document.querySelector('#player2Right1').addEventListener('click', showP2Right2)

document.querySelector('#player2Right3').style.display = 'none';
document.querySelector('#player2Right2').addEventListener('click', showP2Right3)

document.querySelector('#player2Right4').style.display = 'none';
document.querySelector('#player2Right3').addEventListener('click', showP2Right4)

document.querySelector('#player2Right5').style.display = 'none';
document.querySelector('#player2Right4').addEventListener('click',showP2Right5)

    /*
        THESE FUNCTION ARE TO ALOOW THE BUTTON TO BE DISPLAYED
    */

function showP2Left2 (e) {
    countp2LeftHand++
    document.querySelector('#player2Left2').style.display = 'block';
    e.preventDefault()
}

function showP2Left3 (e) {
    countp2LeftHand++
    document.querySelector('#player2Left3').style.display = 'block';
    e.preventDefault()
}

function showP2Left4 (e) {
    countp2LeftHand++
    document.querySelector('#player2Left4').style.display = 'block';
    e.preventDefault()
}

function showP2Left5 (e) {
    countp2LeftHand++
    document.querySelector('#player2Left5').style.display = 'block';
    e.preventDefault()
    if (countp2LeftHand >= 4){
        document.querySelector('#player2Left1').style.display = 'none';
        document.querySelector('#player2Left2').style.display = 'none';
        document.querySelector('#player2Left3').style.display = 'none';
        document.querySelector('#player2Left4').style.display = 'none';
        document.querySelector('#player2Left5').style.display = 'none';
    }
    displayWinner()
}

/*
    THESE FUNCTIONS ARE TO ALLOW THE BUTTONS TO BE DISPLAYED FOR THE RIGHT HAND OF PLAYER 2.
*/

function showP2Right2 (e) {
    countp2RightHand++
    document.querySelector('#player2Right2').style.display = 'block';
    e.preventDefault()
}
function showP2Right3 (e) {
    countp2RightHand++
    document.querySelector('#player2Right3').style.display = 'block';
    e.preventDefault()
}
function showP2Right4 (e) {
    countp2RightHand++
    document.querySelector('#player2Right4').style.display = 'block';
    e.preventDefault()
}
function showP2Right5 (e) {
    countp2RightHand++
    document.querySelector('#player2Right5').style.display = 'block';
    e.preventDefault()
    if (countp2RightHand >= 4) {
        document.querySelector('#player2Right1').style.display = 'none';
        document.querySelector('#player2Right2').style.display = 'none';
        document.querySelector('#player2Right3').style.display = 'none';
        document.querySelector('#player2Right4').style.display = 'none';
        document.querySelector('#player2Right5').style.display = 'none';

    }
    displayWinner()
}

function displayWinner () {
    if (countp1LeftHand && countp1RightHand >= 4) {
        disp.innerText = "Winner: Player 2"
    }else if (countp2LeftHand && countp2RightHand >= 4){
        disp.innerText = "Winner: Player 1"
    }
}

 























document.querySelector('#reset-button').addEventListener('click', resetGame)

function resetGame () {
    // document.querySelector('#reset-button').addEventListener('click', resetButton)
    var disp = document.querySelector('#winner')
let countp1LeftHand = 0;
let countp1RightHand = 0;
let countp2LeftHand = 0;
let countp2RightHand = 0;

 

// document.querySelector('#reset-button').addEventListener('click', resetButton)

document.querySelector('#player1Left2').style.display = 'none';
let p1L1 = document.querySelector('#player1Left1').addEventListener('click', showLeft2)

document.querySelector('#player1Left3').style.display = 'none';
let p1L2 = document.querySelector('#player1Left2').addEventListener('click', showLeft3)

document.querySelector('#player1Left4').style.display = 'none';
let p1L3 = document.querySelector('#player1Left3').addEventListener('click', showLeft4)

document.querySelector('#player1Left5').style.display = 'none';
let p1L4 = document.querySelector('#player1Left4').addEventListener('click', showLeft5)


/*
    THIS IS TO SHOW THE NECT BUTTON ON CLICK OF THE FIRST (FOR PLAYER 1'S RIGHT HAND)
    IF NOT THE OTHER BUTTONS WILL NOT WORK.
*/
document.querySelector('#player1Right2').style.display = 'none';
let p1R1 = document.querySelector('#player1Right1').addEventListener('click', showRight2)

document.querySelector('#player1Right3').style.display = 'none';
let p1R2 = document.querySelector('#player1Right2').addEventListener('click', showRight3)

document.querySelector('#player1Right4').style.display = 'none';
let p1R3 = document.querySelector('#player1Right3').addEventListener('click', showRight4)

document.querySelector('#player1Right5').style.display = 'none';
let p1r4 = document.querySelector('#player1Right4').addEventListener('click', showRight5)

/* 
    THESE FUNCTION WILL BE TO SHOW THE BUTTONS FOR PLAYER1'S LEFT HAND
*/
function showLeft2 (e) {
    countp1LeftHand++
    document.querySelector('#player1Left2').style.display = 'block';
    e.preventDefault();
}

function showLeft3 (e) {
    countp1LeftHand++
    document.querySelector('#player1Left3').style.display = 'block';
    e.preventDefault();
}

function showLeft4 (e) {
    countp1LeftHand++
    document.querySelector('#player1Left4').style.display = 'block';
    e.preventDefault();
}
function showLeft5 (e) {
    countp1LeftHand++
    document.querySelector('#player1Left5').style.display = 'block';
    e.preventDefault()
    if (countp1LeftHand =4){
        document.querySelector('#player1Left1').style.display = 'none';
        document.querySelector('#player1Left2').style.display = 'none';
        document.querySelector('#player1Left3').style.display = 'none';
        document.querySelector('#player1Left4').style.display = 'none';
        document.querySelector('#player1Left5').style.display = 'none';
    }
    displayWinner()
}

/*
    THESE FUNCTIONS WILL BE TO SHOW THE BUTTONS FOR PLAYER1'S RIGHT HAND
*/

function showRight2 (e) {
    countp1RightHand++
    document.querySelector('#player1Right2').style.display = 'block';
    e.preventDefault();
}

function showRight3 (e) {
    countp1RightHand++
    document.querySelector('#player1Right3').style.display = 'block';
    e.preventDefault();
}

function showRight4 (e) {
    countp1RightHand++
    document.querySelector('#player1Right4').style.display = 'block';
    e.preventDefault();
}
function showRight5 (e) {
    countp1RightHand++
    document.querySelector('#player1Right5').style.display = 'block';
    e.preventDefault();
    if (countp1RightHand = 4){
        document.querySelector('#player1Right1').style.display = 'none';
        document.querySelector('#player1Right2').style.display = 'none';
        document.querySelector('#player1Right3').style.display = 'none';
        document.querySelector('#player1Right4').style.display = 'none';
        document.querySelector('#player1Right5').style.display = 'none';
    }
    displayWinner()
}

/*
    THIS IS TO MAKE THE BUTTONS FOR PLAYER 2 LEFT HAND DISAPPEAR UNTIL THE FIRST ON IS CLICKED
*/

document.querySelector('#player2Left2').style.display = 'none';
let p2L1 = document.querySelector('#player2Left1').addEventListener('click', showP2Left2)

document.querySelector('#player2Left3').style.display = 'none';
let p2L2 = document.querySelector('#player2Left2').addEventListener('click', showP2Left3)

document.querySelector('#player2Left4').style.display = 'none';
let p2L3 = document.querySelector('#player2Left3').addEventListener('click', showP2Left4) 


document.querySelector('#player2Left5').style.display = 'none';
let p2L4 = document.querySelector('#player2Left4').addEventListener('click', showP2Left5) 

/*
    THIS IS TO MAKE THE BUTTONS FOR PLAYER 2 RIGHT HAND DISAPPEAR  UNTIL THE PREVIOUS BUTTON IS 
    CLICKED
*/

document.querySelector('#player2Right2').style.display = 'none';
document.querySelector('#player2Right1').addEventListener('click', showP2Right2)

document.querySelector('#player2Right3').style.display = 'none';
document.querySelector('#player2Right2').addEventListener('click', showP2Right3)

document.querySelector('#player2Right4').style.display = 'none';
document.querySelector('#player2Right3').addEventListener('click', showP2Right4)

document.querySelector('#player2Right5').style.display = 'none';
document.querySelector('#player2Right4').addEventListener('click',showP2Right5)

    /*
        THESE FUNCTION ARE TO ALOOW THE BUTTON TO BE DISPLAYED
    */

function showP2Left2 (e) {
    countp2LeftHand++
    document.querySelector('#player2Left2').style.display = 'block';
    e.preventDefault()
}

function showP2Left3 (e) {
    countp2LeftHand++
    document.querySelector('#player2Left3').style.display = 'block';
    e.preventDefault()
}

function showP2Left4 (e) {
    countp2LeftHand++
    document.querySelector('#player2Left4').style.display = 'block';
    e.preventDefault()
}

function showP2Left5 (e) {
    countp2LeftHand++
    document.querySelector('#player2Left5').style.display = 'block';
    e.preventDefault()
    if (countp2LeftHand >= 4){
        document.querySelector('#player2Left1').style.display = 'none';
        document.querySelector('#player2Left2').style.display = 'none';
        document.querySelector('#player2Left3').style.display = 'none';
        document.querySelector('#player2Left4').style.display = 'none';
        document.querySelector('#player2Left5').style.display = 'none';
    }
    displayWinner()
}

/*
    THESE FUNCTIONS ARE TO ALLOW THE BUTTONS TO BE DISPLAYED FOR THE RIGHT HAND OF PLAYER 2.
*/

function showP2Right2 (e) {
    countp2RightHand++
    document.querySelector('#player2Right2').style.display = 'block';
    e.preventDefault()
}
function showP2Right3 (e) {
    countp2RightHand++
    document.querySelector('#player2Right3').style.display = 'block';
    e.preventDefault()
}
function showP2Right4 (e) {
    countp2RightHand++
    document.querySelector('#player2Right4').style.display = 'block';
    e.preventDefault()
}
function showP2Right5 (e) {
    countp2RightHand++
    document.querySelector('#player2Right5').style.display = 'block';
    e.preventDefault()
    if (countp2RightHand >= 4) {
        document.querySelector('#player2Right1').style.display = 'none';
        document.querySelector('#player2Right2').style.display = 'none';
        document.querySelector('#player2Right3').style.display = 'none';
        document.querySelector('#player2Right4').style.display = 'none';
        document.querySelector('#player2Right5').style.display = 'none';

    }
    displayWinner()
}

function displayWinner () {
    if (countp1LeftHand && countp1RightHand >= 4) {
        disp.innerText = "Winner: Player 2"
    }else if (countp2LeftHand && countp2RightHand >= 4){
        disp.innerText = "Winner: Player 1"
    }
}
}
