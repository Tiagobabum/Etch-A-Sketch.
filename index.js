const container = document.getElementById('container');
container.style.width = "512px"
container.style.height = "512px"
divNumber = 16
elementDiv(divNumber)

function elementDiv(divNumber) {
    container.innerHTML = '';
    const divBox = 512 / divNumber

//// Create divElements
for (let i = 0; i < divNumber; i++) {
    const square = document.createElement("div")  
    for (let j = 0; j < divNumber; j++) {
        const squareDown = document.createElement("div")
        squareDown.className ='squareDown'
        square.appendChild(squareDown)
        squareDown.style.width = `${divBox}px`
        squareDown.style.height = `${divBox}px`
        }
        container.appendChild(square)
    }
//// Set inicial color + Paint elements   
const squaresDown = document.querySelectorAll('.squareDown');
squaresDown.forEach(squareDown => {
    squareDown.style.backgroundColor = 'white';
});
squaresDown.forEach(squareDown => {
    squareDown.addEventListener('mouseenter', function () {
        squareDown.style.backgroundColor = 'black'
    })
})
}
const resizeButton = document.getElementById('resize')
resizeButton.addEventListener('click', function () {
     const size = prompt('Enter a number between 4-90')
     const sizeNumber = +size /// Transform String to number
     /// Checks if it is a number
     if (typeof sizeNumber !== 'number' || Number.isNaN(sizeNumber))  {
         alert("Enter a valid number")
         return;
     }
     /// Check the interval
     if (sizeNumber < 4 || sizeNumber > 90){
         alert ("the number must be between 4 and 90")
         return;
     }
     divNumber = parseInt(size)
     elementDiv(divNumber)
})
const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', function () {
    elementDiv(divNumber)
})

