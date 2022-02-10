const left = document.querySelector(".btn ");
const right = document.querySelector(".btn-2 ");
const box = document.querySelector(".box");
const img = document.querySelectorAll(".img");
const imgLength = img.length;
const imgWidth = img[0].offsetWidth;
console.log(imgWidth)
var positionX = 0;
var index = 0;
left.addEventListener('click', function () {
    handleClick(-1)
})
right.addEventListener('click', function () {
    handleClick(1)
})
function handleClick(der) {
    if (der === 1) {
        index++;
        if (index >= imgLength) {
            index = 4;
            return;
        }
        console.log(index)
        positionX = positionX - imgWidth;
        box.style = `transform: translateX(${positionX}px)`;
    } else if (der === -1) {
        index--;
        if (index < 0) {
            index = 0;
            return;
        }
        console.log(index)
        positionX = positionX + imgWidth;
        box.style = `transform: translateX(${positionX}px)`;
    }
}