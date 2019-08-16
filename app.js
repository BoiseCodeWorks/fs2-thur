let leftSidePoints = 0;
let rightSidePoints = 0;

let leftElem = document.getElementById('left')
let rightElem = document.getElementById('right')
let winnerElem = document.getElementById('winner')


function increment(side) {
  if (side == 'left') {
    leftSidePoints++
  } else {
    rightSidePoints++
  }
  draw()
  checkWinner();

}

/**
 * determine largest
 * 
 * if largest score is greater than 11
 * AND 
 * largest score differnce > 2 
 * DRAW WINNER()
 */
function checkWinner() {
  let winning = Math.max(leftSidePoints, rightSidePoints)
  let losing = Math.min(leftSidePoints, rightSidePoints)
  let diff = Math.abs(winning - losing)
  if (winning >= 11 && diff >= 2) {

    if (winning == leftSidePoints) {
      drawWinner("LEFT SIDE WINS")
    } else {
      drawWinner("RIGHT SIDE WINS")
    }

  }
}


/**
 * Draws left and right points to the screen
 */
function draw() {
  leftElem.textContent = leftSidePoints.toString();
  rightElem.textContent = rightSidePoints.toString();
}

/**
 * Draws the winner to the winnerElem and hides the pointElems
 * @param {string} winner 
 */
function drawWinner(winner) {
  leftElem.classList.add('hidden')
  rightElem.classList.add('hidden')
  winnerElem.classList.remove('hidden')
  let span = document.createElement('span')
  span.innerText = `
  ${winner}, left: ${leftSidePoints}, right: ${rightSidePoints}
`;
  winnerElem.appendChild(span)
}


function replay(){
  leftSidePoints = 0;
  rightSidePoints = 0;
  leftElem.classList.remove('hidden')
  rightElem.classList.remove('hidden')
  winnerElem.classList.add('hidden')
  draw()
}