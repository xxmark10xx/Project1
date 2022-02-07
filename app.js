/*
    THIS IS TO SHOW THE NEXT BUTTON ON CLICK OF THE FIRST (FOR PLAYER 1'S LEFT HAND)
    IF NOT THE OTHER BUTTONS WILL NOT WORK.
*/
document.querySelector('#player1Left2').style.display = 'none';
document.querySelector('#player1Left1').addEventListener('click', showLeft2)

document.querySelector('#player1Left3').style.display = 'none';
document.querySelector('#player1Left2').addEventListener('click', showLeft3)

document.querySelector('#player1Left4').style.display = 'none';
document.querySelector('#player1Left3').addEventListener('click', showLeft4)

document.querySelector('#player1Left5').style.display = 'none';
document.querySelector('#player1Left4').addEventListener('click', showLeft5)


/*
    THIS IS TO SHOW THE NECT BUTTON ON CLICK OF THE FIRST (FOR PLAYER 1'S RIGHT HAND)
    IF NOT THE OTHER BUTTONS WILL NOT WORK.
*/
document.querySelector('#player1Right2').style.display = 'none';
document.querySelector('#player1Right1').addEventListener('click', showRight2)

document.querySelector('#player1Right3').style.display = 'none';
document.querySelector('#player1Right2').addEventListener('click', showRight3)

document.querySelector('#player1Right4').style.display = 'none';
document.querySelector('#player1Right3').addEventListener('click', showRight4)

document.querySelector('#player1Right5').style.display = 'none';
document.querySelector('#player1Right4').addEventListener('click', showRight5)




/* 
    THESE FUNCTION WILL BE TO SHOW THE BUTTONS FOR PLAYER1'S LEFT HAND
*/
function showLeft2 (e) {
    document.querySelector('#player1Left2').style.display = 'block';
    e.preventDefault();
}

function showLeft3 (e) {
    document.querySelector('#player1Left3').style.display = 'block';
    e.preventDefault();
}

function showLeft4 (e) {
    document.querySelector('#player1Left4').style.display = 'block';
    e.preventDefault();
}
function showLeft5 (e) {
    document.querySelector('#player1Left5').style.display = 'block';
    e.preventDefault();
}
/*
    THESE FUNCTIONS WILL BE TO SHOW THE BUTTONS FOR PLAYER1'S RIGHT HAND
 */

function showRight2 (e) {
    document.querySelector('#player1Right2').style.display = 'block';
    e.preventDefault();
}

function showRight3 (e) {
    document.querySelector('#player1Right3').style.display = 'block';
    e.preventDefault();
}

function showRight4 (e) {
    document.querySelector('#player1Right4').style.display = 'block';
    e.preventDefault();
}
function showRight5 (e) {
    document.querySelector('#player1Right5').style.display = 'block';
    e.preventDefault();
}

/*
    THIS IS TO MAKE THE BUTTONS FOR PLAYER 2 DISAPEAR UNTIL THE FIRST ON IS CLICKED
*/


