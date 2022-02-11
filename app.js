/*
    WE ARE MAKING VARIABLES THAT HOLD THE VALUE OF CLICKS ON EACH PLAUERS HAND
*/
var disp = document.querySelector('#winner')
let countp1LeftHand = 0;
let countp1RightHand = 0;
let countp2LeftHand = 0;
let countp2RightHand = 0;


 
/*
    WE ARE USING QUERY SELECTOR TO CHOOSE A BUTTON AND MAKE IT DISAPPEAR AND ADD AN EVENT LISTENER
    TO CALL A FUNCTION BASED ON THE BUTTON. IN THIS CASE WE ARE WORKING PLAYER 1'S RIGHT HAND
*/
document.querySelector('#player1Left2').style.display = 'none';
let p1L1 = document.querySelector('#player1Left1').addEventListener('click', showLeft2)

document.querySelector('#player1Left3').style.display = 'none';
let p1L2 = document.querySelector('#player1Left2').addEventListener('click', showLeft3)

document.querySelector('#player1Left4').style.display = 'none';
let p1L3 = document.querySelector('#player1Left3').addEventListener('click', showLeft4)

document.querySelector('#player1Left5').style.display = 'none';
let p1L4 = document.querySelector('#player1Left4').addEventListener('click', showLeft5)


/*
    THESE SETS OF DOM SELECTORS IF FOR PLAYER 1'S "RIGHT HAND"
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
    THESE FUNCTIONS WILL BE TO SHOW THE BUTTONS FOR PLAYER1'S LEFT HAND AND ADD TO THE COUNTER OF CLICKS.
*/
function showLeft2 (e) {
    countp1LeftHand++
    document.querySelector('#player1Left2').style.display = 'block';
    // we are using this methods to make sure the button wont make a bug if clicked.
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
/*
    WE ARE ADDING A CONDITIONAL STATEMENT IN ORDER TO TEST FOR THE AMOUNT OF CLICKS AND IF WE HIT 4
    OR MORE THEN WE GET RID OF THE BUTTONS. WE ARE ALSO CALLING ANOTHER FUNTION IN THE TO DISPLAY 
    THE WINNER. 
*/
function showLeft5 (e) {
    countp1LeftHand++
    document.querySelector('#player1Left5').style.display = 'block';
    e.preventDefault()
    if (countp1LeftHand >= 4){
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
    if (countp1RightHand >= 4){
        document.querySelector('#player1Right1').style.display = 'none';
        document.querySelector('#player1Right2').style.display = 'none';
        document.querySelector('#player1Right3').style.display = 'none';
        document.querySelector('#player1Right4').style.display = 'none';
        document.querySelector('#player1Right5').style.display = 'none';
    }
    displayWinner()
}

/*
    WE ARE DOING THE SAME AS ABOVE BUT FOR THE 2ND PLAYER.
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
    WE ARE ADD IN THE ADD EVENT LISTENERS FOR THE 2ND PLAYERS RIGHT HAND
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
    THESE FUNCTION ARE TO ALLOW THE BUTTON TO BE DISPLAYED AS WELL AS ADDING TO THE COUNTER FOR CLICKS
    MADE.
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

// we are using a conditional to decide the winner based on clicks.
// i.e if player 1 hands both reach 4 clicks it leaves player 2 with 
// buttons appearing meaning they won.
function displayWinner () {
    if (countp1LeftHand && countp1RightHand >= 4) {
        disp.innerText = "Winner: Player 2"
    }else if (countp2LeftHand && countp2RightHand >= 4){
        disp.innerText = "Winner: Player 1"
    }
}

 


