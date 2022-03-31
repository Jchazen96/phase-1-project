let playerList = document.getElementById('player-list')
let playerStats = document.getElementById('player-stats')
let addPlayerForm = document.getElementById('add-player-form')
let submitButton = document.getElementById('submit')
let teamName = document.getElementById('teamName')
let teamEntry = document.getElementById('teamEntry')
let birthCountry = document.createElement('h4')
let birthCity = document.createElement('h4')
let birthState = document.createElement('h4')
let college = document.createElement('h4')
let position = document.createElement('h4')
let jersey = document.createElement('h4')
let height = document.createElement('h4')
let weight = document.createElement('h4')
let likesString = document.createElement('h4')
let likesAmount = 0

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    playerList.innerText = "Click a player: "
    playerStats.innerText = ""
    let request = async () => {
        req = await fetch(`https://api.sportsdata.io/v3/nba/scores/json/Players/${teamEntry.value}?key=cd2a129a59b1452abe4d8cfa2ee494ce`)
        res = await req.json()
        teamName.innerText = `${res[0].Team}`
        res.forEach((element) => {
        let playerName = document.createElement('h2')
        playerName.innerText = `${element.FirstName} ${element.LastName}`
        playerName.addEventListener('click', () => {
            likesAmount = 0
            playerList.innerText = ""
            let playerLink = document.createElement('a')
            playerLink.innerText = `${element.FirstName} ${element.LastName}`
            playerLink.setAttribute('href', `https://google.com/search?q=${element.FirstName}+${element.LastName}`)
            playerLink.setAttribute('target', '_blank')
            weight.innerText = `Weight: ${element.Weight} pounds`
            height.innerText = `Height: ${parseInt(element.Height / 12)}'${element.Height%12}`
            jersey.innerText = `Jersey #: ${element.Jersey}`
            position.innerText = `Position: ${element.Position}`
            college.innerText = `College: ${element.College}`
            birthCountry.innerText = `Birth Country: ${element.BirthCountry}`
            birthCity.innerText = `City: ${element.BirthCity}`
            birthState.innerText = `State: ${element.BirthState}`
            likesString.innerText = `Likes: ${likesAmount}`
            let likesBtn = document.createElement('button')
            likesBtn.innerText = `Like ${element.FirstName} ${element.LastName}`

            likesBtn.addEventListener('click', () => {
                likesAmount += 1
                likesString.innerHTML = `Likes: ${likesAmount}`
               
            })

            playerStats.append(playerLink, birthCountry, birthCity, birthState, college, position, jersey, height, weight, likesString, likesBtn)
        })
        playerList.append(playerName)
    })
}
request()    
})

teamName.addEventListener('click', async () => {
    let req = await fetch (`https://api.sportsdata.io/v3/nba/scores/json/Players/${teamName.innerText}?key=cd2a129a59b1452abe4d8cfa2ee494ce`)
    let res = await req.json()
    playerList.innerText = "Click a player: "
    res.forEach((element) => {
        playerStats.innerText = ""
        let playerName = document.createElement('h2')
        playerName.innerText = `${element.FirstName} ${element.LastName}`
        playerName.addEventListener('click', () => {
            likesAmount = 0
            let playerLink = document.createElement('a')
            playerLink.innerText = `${element.FirstName} ${element.LastName}`
            playerLink.setAttribute('href', `https://google.com/search?q=${element.FirstName}+${element.LastName}`)
            playerLink.setAttribute('target', '_blank')
            playerList.innerText = ""
            weight.innerText = `Weight: ${element.Weight} pounds`
            height.innerText = `Height: ${parseInt(element.Height / 12)}'${element.Height%12}`
            jersey.innerText = `Jersey #: ${element.Jersey}`
            position.innerText = `Position: ${element.Position}`
            college.innerText = `College: ${element.College}`
            birthCountry.innerText = `Birth Country: ${element.BirthCountry}`
            birthCity.innerText = `City: ${element.BirthCity}`
            birthState.innerText = `State: ${element.BirthState}`
            likesString.innerText = `Likes: ${likesAmount}`
            let likesBtn = document.createElement('button')
            likesBtn.innerText = `Like ${element.FirstName} ${element.LastName}`

            likesBtn.addEventListener('click', () => {
                likesAmount += 1
                likesString.innerHTML = `Likes: ${likesAmount}`
               
            })

            playerStats.append(playerLink, birthCountry, birthCity, birthState, college, position, jersey, height, weight, likesString, likesBtn)
        })
        playerList.append(playerName)
    })
})