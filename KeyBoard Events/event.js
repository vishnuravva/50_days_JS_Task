const insert = document.getElementById('insert')

window.addEventListener('keydown',(e) => {
    insert.innerHTML = `
    <div class='key'>
        ${e.key === ' ' ? 'Space':event.key}
        <small>e.key</small>
    </div>
    <div class='key'>
        ${e.keyCode}
        <small>e.keyCode</small>
    </div>
    <div class='key'>
        ${e.keyCode}
        <small>e.Code</small>
    </div> 
    `
})