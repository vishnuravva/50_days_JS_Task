const progress = document.getElementById('progress')
const prevBtn = document.getElementById('prev')
const nxtBtn = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

nxtBtn.addEventListener('click',(e) => {
    currentActive++
console.log(currentActive)
console.log(circles.length)
    if(currentActive > circles.length){
        currentActive = circles.length
    }
    update()
})
prevBtn.addEventListener('click',(e) => {
    currentActive--

    if(currentActive < 1){
        currentActive = 1
    }
    update()
})
function update(){
    circles.forEach((circle,index) => {
        console.log('index',index)
        if(index < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')

        }
    })
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    console.log('actives ka length',actives.length)
    console.log('circles ka length',circles.length)

    console.log('progress.style.width',progress.style.width)
    if(currentActive === 1){
        prevBtn.disabled = true
    }
    else if(currentActive === circles.length){
        next.disabled = true
    }
    else{
        prevBtn.disabled = false
        nxtBtn.disabled = false
    }
}