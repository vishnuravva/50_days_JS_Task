const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll',checkBoxes)

checkBoxes()
function checkBoxes(){
    const triggerBottom = innerHeight / 5*4
    console.log('triggerBottom',triggerBottom)
    // console.log(innerHeight)
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        console.log('box Top',boxTop)
        

        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}