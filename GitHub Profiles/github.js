const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main  = document.getElementById('main')

async function getUser(username){
    try{
        // We are using destructuring syntax because we do not need the whole response
        // we just need data out of that 
        const { data } = await axios(APIURL + username)
    console.log(data)

    createUserCard(data)
    getRepos(username)
    }catch(err){
        console.log(err)

        if(err.response.status == 404){

        createErrorCard('No profile with this username')
        }
    }
}

async function getRepos(username){
    try{
        // We are using destructuring syntax because we do not need the whole response
        // we just need data out of that 
        const { data } = await axios(APIURL + username+'/repos')
    console.log(data)

    addReposToCard(data)
    }catch(err){
        console.log(err)

        if(err.response.status == 404){
        createErrorCard('Problem fetching repos')
        }
    }
}
form.addEventListener('submit',(e) => {
    e.preventDefault()
    
    const user = search.value

    if(user){
        getUser(user)
        search.value = ''
    }
})

function createUserCard(user){
    const cardHtml = `
    <div class="card">
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar" />
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul>
                    <li>${user.followers} <strong> Followers </strong></li>
                    <li>${user.following} <strong> Following </strong></li>
                    <li>${user.public_repos} <strong> Repos </strong></li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `
main.innerHTML = cardHtml
}
function createErrorCard(message){
    const cardHtml = `
    <div class='card'>
    <h1>${message}</h1>
    </div>
    `
    main.innerHTML = cardHtml
}
function addReposToCard(repos){
    const reposEl = document.getElementById('repos')

    repos.slice(0,5).forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'

        repoEl.innerText = repo.name
        reposEl.appendChild(repoEl)
    });
}