const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click',function(e){
        const x = e.clientX
        const y = e.clientY

        console.log('x y',x,y)

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        console.log('buttonTop buttonLeft',buttonTop,buttonLeft)

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        console.log('xInside yIndise',xInside,yInside)

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(),500) // if this not added then it will just add onto the dom 
        // if added then it will just gets removed form the dom after some time
        

    })
})