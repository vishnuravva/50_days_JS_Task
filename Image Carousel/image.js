const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightbtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let index = 0
let interval = setInterval(run,2000)

function run(){
    index++

    changeImage()
}

function changeImage(){

    if(index > img.length){
        index = 0
    }else if(index < 0){
        index = img.length - 1
    }
    imgs.style.transform = `translateX(${-index * 500}px)`
}
rightbtn.addEventListener('click',() => {
    index++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click',() => {
    index--
    changeImage()
    resetInterval()
})
function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run,2000)
}