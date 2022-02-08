/*
    THIS IS TO SHOW THE NEXT BUTTON ON CLICK OF THE FIRST (FOR PLAYER 1'S LEFT HAND)
    IF NOT THE OTHER BUTTONS WILL NOT WORK.
*/

player1 = document.querySelector('#player1Left1'). innerText = '1'
document.querySelector('#player1Right1'). innerText = '1'
player2 = document.querySelector('#player2Left1'). innerText = '1'
document.querySelector('#player2Right1'). innerText = '1'

 

// document.querySelector('#reset-button').addEventListener('click', resetButton)

document.querySelector('#player1Left2').style.display = 'none';
document.querySelector('#player1Left1').addEventListener('dblclick', showLeft2)
document.querySelector('#player1Left1').addEventListener('click', p1Left1)


document.querySelector('#player1Left3').style.display = 'none';
document.querySelector('#player1Left2').addEventListener('dblclick', showLeft3)


document.querySelector('#player1Left4').style.display = 'none';
document.querySelector('#player1Left3').addEventListener('dblclick', showLeft4)

document.querySelector('#player1Left5').style.display = 'none';
document.querySelector('#player1Left4').addEventListener('dblclick', showLeft5)


/*
    THIS IS TO SHOW THE NECT BUTTON ON CLICK OF THE FIRST (FOR PLAYER 1'S RIGHT HAND)
    IF NOT THE OTHER BUTTONS WILL NOT WORK.
*/
document.querySelector('#player1Right2').style.display = 'none';
document.querySelector('#player1Right1').addEventListener('dblclick', showRight2)

document.querySelector('#player1Right3').style.display = 'none';
document.querySelector('#player1Right2').addEventListener('dblclick', showRight3)

document.querySelector('#player1Right4').style.display = 'none';
document.querySelector('#player1Right3').addEventListener('dblclick', showRight4)

document.querySelector('#player1Right5').style.display = 'none';
document.querySelector('#player1Right4').addEventListener('dblclick', showRight5)




/* 
    THESE FUNCTION WILL BE TO SHOW THE BUTTONS FOR PLAYER1'S LEFT HAND
*/
function showLeft2 (e) {
    document.querySelector('#player1Left2').style.display = 'block';
    document.querySelector('#player1Left2').innerText = '2'
    e.preventDefault();
}

function showLeft3 (e) {
    document.querySelector('#player1Left3').style.display = 'block';
    document.querySelector('#player1Left3').innerText = '3'
    e.preventDefault();
}

function showLeft4 (e) {
    document.querySelector('#player1Left4').style.display = 'block';
    document.querySelector('#player1Left4').innerText = '4'
    e.preventDefault();
}
function showLeft5 (e) {
    document.querySelector('#player1Left5').style.display = 'block';
    document.querySelector('#player1Left5').innerText = '5'
    e.preventDefault();
}
/*
    THESE FUNCTIONS WILL BE TO SHOW THE BUTTONS FOR PLAYER1'S RIGHT HAND
*/

function showRight2 (e) {
    document.querySelector('#player1Right2').style.display = 'block';
    document.querySelector('#player1Right2').innerText = '2'
    e.preventDefault();
}

function showRight3 (e) {
    document.querySelector('#player1Right3').style.display = 'block';
    document.querySelector('#player1Right3').innerText = '3'
    e.preventDefault();
}

function showRight4 (e) {
    document.querySelector('#player1Right4').style.display = 'block';
    document.querySelector('#player1Right4').innerText = '4'
    e.preventDefault();
}
function showRight5 (e) {
    document.querySelector('#player1Right5').style.display = 'block';
    document.querySelector('#player1Right5').innerText = '5'
    e.preventDefault();
}

/*
    THIS IS TO MAKE THE BUTTONS FOR PLAYER 2 LEFT HAND DISAPPEAR UNTIL THE FIRST ON IS CLICKED
*/

document.querySelector('#player2Left2').style.display = 'none';
document.querySelector('#player2Left1').addEventListener('dblclick', showP2Left2)

document.querySelector('#player2Left3').style.display = 'none';
document.querySelector('#player2Left2').addEventListener('dblclick', showP2Left3)

document.querySelector('#player2Left4').style.display = 'none';
document.querySelector('#player2Left3').addEventListener('dblclick', showP2Left4) 


document.querySelector('#player2Left5').style.display = 'none';
document.querySelector('#player2Left4').addEventListener('dblclick', showP2Left5) 

/*
    THIS IS TO MAKE THE BUTTONS FOR PLAYER 2 RIGHT HAND DISAPPEAR  UNTIL THE PREVIOUS BUTTON IS 
    CLICKED
*/

document.querySelector('#player2Right2').style.display = 'none';
document.querySelector('#player2Right1').addEventListener('dblclick', showP2Right2)

document.querySelector('#player2Right3').style.display = 'none';
document.querySelector('#player2Right2').addEventListener('dblclick', showP2Right3)

document.querySelector('#player2Right4').style.display = 'none';
document.querySelector('#player2Right3').addEventListener('dblclick', showP2Right4)

document.querySelector('#player2Right5').style.display = 'none';
document.querySelector('#player2Right4').addEventListener('dblclick',showP2Right5)

    /*
        THESE FUNCTION ARE TO ALOOW THE BUTTON TO BE DISPLAYED
    */

function showP2Left2 (e) {
    document.querySelector('#player2Left2').style.display = 'block';
    document.querySelector('#player2Left2').innerText = '2'
    e.preventDefault()
}

function showP2Left3 (e) {
    document.querySelector('#player2Left3').style.display = 'block';
    document.querySelector('#player2Left3').innerText = '3'
    e.preventDefault()
}

function showP2Left4 (e) {
    document.querySelector('#player2Left4').style.display = 'block';
    document.querySelector('#player2Left4').innerText = '4'
    e.preventDefault()
}

function showP2Left5 (e) {
    document.querySelector('#player2Left5').style.display = 'block';
    document.querySelector('#player2Left5').innerText = '5'
    e.preventDefault()
}

/*
    THESE FUNCTIONS ARE TO ALLOW THE BUTTONS TO BE DISPLAYED FOR THE RIGHT HAND OF PLAYER 2.
*/

function showP2Right2 (e) {
    document.querySelector('#player2Right2').style.display = 'block';
    document.querySelector('#player2Right2').innerText = '2'
    e.preventDefault()
}
function showP2Right3 (e) {
    document.querySelector('#player2Right3').style.display = 'block';
    document.querySelector('#player2Right3').innerText = '3'
    e.preventDefault()
}
function showP2Right4 (e) {
    document.querySelector('#player2Right4').style.display = 'block';
    document.querySelector('#player2Right4').innerText = '4'
    e.preventDefault()
}
function showP2Right5 (e) {
    document.querySelector('#player2Right5').style.display = 'block';
    document.querySelector('#player2Right5').innerText = '5'
    e.preventDefault()
}

function p1Left1 () {
}

function dbl_clickP2 () {
    
}
