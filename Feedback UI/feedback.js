const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')

const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

// 👇 if we add panel.eventlsitener then the whole elements in the panel will get the event listeners
// go to 20
// thats why we changed it to ratings-container so that it fires when targets any rating container
// and excludes other elements except ratings-container
ratingsContainer.addEventListener('click',(e) => {
    if(e.target.parentNode.classList.contains('rating')){
        // console.log(e.target)
        removeActiveClasses()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
        console.log(selectedRating)
    }
})

// we are setting a event listener on send btn independent so it will clash with the panel.event listener go to 10
sendBtn.addEventListener('click',(e) => {
    panel.innerHTML = `
    <i class='fas fa-heart'></i>
    <strong>Thank You</strong>
    <br>
    <strong>FeedBack : ${selectedRating}</strong>
    <p>We will use your feedback to improve our customer support </p>
    `
})
function removeActiveClasses(){
    // ratings.forEach(rating => {
    //     rating.classList.remove('active')
    // })
    for(let i=0;i<ratings.length;i++){
        ratings[i].classList.remove('active')
    }
}