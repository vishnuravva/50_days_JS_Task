const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let int = setInterval(blurring, 30);
let load = 0
function blurring(){
    load++

    if(load > 99){
        clearInterval(int)
    }
    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale(load, 0,100,1,0)
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`

}
const scale = (num,in_min,in_max,out_min,out_max) => {
    return((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
//           1  -  0      *     0  -   1     /     100  -  0         + 1  = -1 / 101 = 
}