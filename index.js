// Your code here
const dodger = document.querySelector("#dodger")

function moveDodgerLeft(){
        let leftNumbers = dodger.style.left.replace("px", '')
        let left = parseInt(leftNumbers, 0)
        if(left > 0){
        dodger.style.left = `${left - 10}px`
        }
    }


function moveDodgerRight(){
        let leftNumber = dodger.style.left.replace("px", "")
        let left = parseInt(leftNumber, 0)
        if(left < 360){
            dodger.style.left = `${left + 10}px`
        }
}


document.addEventListener('keydown', function(event){
    if(event.key === "ArrowLeft"){
        moveDodgerLeft()
    } else if(event.key === "ArrowRight"){
        moveDodgerRight()
    }
})
