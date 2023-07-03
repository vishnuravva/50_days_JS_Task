const addBtn = document.getElementById('add')
const notes = JSON.parse(localStorage.getItem('notes'))

if(notes){
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click',() => addNewNote())

function addNewNote(text = ''){
    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = `
    <div class='tools'>
        <button class='edit'><i class='fas fa-edit'></i></button>
        <button class='delete'><i class='fas fa-trash-alt'></i></button>
    </div>
    <div class='main ${text ? '' : 'hidden'}'></div>
    <textarea class='${text ? 'hidden':''}'></textarea>
    `
/* If text is provided (not an empty string), the hidden class is not added, so the note will be visible. 
If text is an empty string, the hidden class is added, which will hide the note initially.

The second line within the backticks creates a <textarea> element. Again, the class is conditional based on the text parameter. 
If text is provided, the hidden class is added, hiding the textarea. If text is an empty string, the hidden class is not added, 
so the textarea will be visible.*/

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main =  note.querySelector('.main')
    const textarea = note.querySelector('textarea')

    textarea.value = text
    // main.innerHTML = marked(text)

    deleteBtn.addEventListener('click',() => {
        note.remove()
        updateLs()
    })

    editBtn.addEventListener('click',() => {
        main.classList.toggle('hidden')
        textarea.classList.toggle('hidden')
    })

    textarea.addEventListener('input',(e) => {
        const {value} = e.target
        // main.innerHTML = marked(value)

        updateLs()
    })
document.body.appendChild(note)

    
}

function updateLs(){
    const notesText = document.querySelectorAll('textarea')
    const notes = []

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes',JSON.stringify(notes))
}