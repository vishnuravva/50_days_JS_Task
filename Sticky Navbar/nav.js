const nav = document.querySelector('.nav')
window.addEventListener('scroll',fixNav)

function fixNav(){
    console.log('window scrollY',window.scrollY,'nav offsetHeight',nav.offsetHeight,'nav offsetHeight + 150',nav.offsetHeight + 150)

    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')

    }
}