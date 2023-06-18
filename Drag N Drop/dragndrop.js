const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

for(const empty of empties){
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',dragDrop)

}
function dragStart() {
    this.className += ' hold'

    setTimeout(() => this.className = 'invisible',0)
    
}
function dragEnter(e) {
    e.preventDefault()
    console.log('drag enter')
    this.className += ' hovered'
}
function dragLeave() {
    console.log('drag leave')
    this.className = 'empty'

} 
function dragOver(e) {
    e.preventDefault()
    console.log('drag over')
}
function dragEnd() {
    // console.log('drag end')
    this.className = 'fill'
}

function dragDrop() {
    console.log('drop')
    this.className = 'empty'
    this.append(fill)
}