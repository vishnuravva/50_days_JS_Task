const joke = document.querySelector('.joke')
const jokeBtn = document.querySelector('.btn')

jokeBtn.addEventListener('click',generateJoke)

generateJoke()
async function generateJoke(){

    const config = {
        headers:{
            Accept:'application/json',
        },
    }
    const response = await fetch('https://icanhazdadjoke.com',config)
    const data = await response.json()

    joke.innerHTML = data.joke
}