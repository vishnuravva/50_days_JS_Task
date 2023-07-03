const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-img')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

let index = 0
const roles = ['Developer','Finance','Analyst','SDE','SWE',
               'Embedded Engineer','Programmer','MTS-1','Full Stack Developer']
async function updateTestimonials(){

    // const response = await fetch('https://randomuser.me/api?results=50')
    // const {results} = await response.json()
    // console.log(results)
    const { data } = await axios('https://randomuser.me/api?results=10')

    console.log(data.results[0])

    testimonial.innerHTML = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          earum eveniet ex quae architecto rem vel pariatur illum nisi, incidunt
          vitae facere dolores porro neque ducimus? Quod, impedit dolorem
          voluptatem asperiores eum ut excepturi iste repellendus facere
          blanditiis animi magni? Dolores eaque quod nobis voluptas cum
          corrupti. Quae vel libero cum voluptate, aliquid dicta nemo facilis
          eos odit rerum ducimus architecto pariatur dignissimos, iusto atque et
          id ipsam suscipit laborum incidunt! Quidem omnis temporibus ratione
          iusto error sint ullam dolor deleniti, praesentium animi asperiores ea
          odit. Similique tenetur possimus quaerat, suscipit alias voluptate
          porro dicta at delectus inventore repellat pariatur.
    `
    userImage.src = data.results[index].picture.large
    username.innerHTML = data.results[index].login.username
    role.innerHTML = roles[index]
    index++

    if(index > data.results.length - 1){
        index = 0
    }

    // console.log(userImage)
}
setInterval(updateTestimonials,10000)