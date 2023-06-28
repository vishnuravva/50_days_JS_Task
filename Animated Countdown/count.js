const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function runAnimation(){
    nums.forEach((num,index) => {
        // console.log(num,index)
        const nextToLast = nums.length - 1

        num.addEventListener('animationend',(e) => {
            if(e.animationName === 'goIn' && index !== nextToLast){
                num.classList.remove('in')
                num.classList.add('out')
            }else if(e.animationName === 'goOut' && num.nextElementSibling){
                num.nextElementSibling.classList.add('in')
            }else{
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}
replay.addEventListener('click',() => {
    resetDom()
    runAnimation()
})

function resetDom(){
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    nums.forEach((num) => {
        console.log(num.classList.value)
        num.classList.value = ''
        console.log(num.classList.value)
    })
    nums[0].classList.add('in')
}

