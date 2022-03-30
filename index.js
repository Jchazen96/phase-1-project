
let playerList = document.getElementById('player-list')
let playerStats = document.getElementById('player-stats')
let addPlayerForm = document.getElementById('add-player-form')
let submitButton = document.getElementById('submit')


let request = async () => {
    req = await fetch('https://api.sportsdata.io/v3/nba/scores/json/Players/BKN?key=cd2a129a59b1452abe4d8cfa2ee494ce')
    res = await req.json()
    console.log(res)
    res.forEach((element) => {
        let playerName = document.createElement('h2')
        playerName.innerText = `${element.FirstName} ${element.LastName}`
        playerName.addEventListener('click', () => {
            addPlayerForm.remove() //deletes player form
            playerList.remove() //deletes the list of players on the left
            let birthCountry = document.createElement('h4')
            let birthCity = document.createElement('h4')
            let birthState = document.createElement('h4')
            let college = document.createElement('h4')
            let position = document.createElement('h4')
            let jersey = document.createElement('h4')
            let height = document.createElement('h4')
            let weight = document.createElement('h4')
            weight.innerText = `Weight: ${element.Weight} pounds`
            height.innerText = `Height: ${parseInt(element.Height / 12)}'${element.Height%12}`
            jersey.innerText = `Jersey #: ${element.Jersey}`
            position.innerText = `Position: ${element.Position}`
            college.innerText = `College: ${element.College}`
            birthCountry.innerText = `Birth Country: ${element.BirthCountry}`
            birthCity.innerText = `City: ${element.BirthCity}`
            birthState.innerText = `State: ${element.BirthState}`
            playerStats.append(playerName, birthCountry, birthCity, birthState, college, position, jersey, height, weight)
        })
        playerList.append(playerName)
    })
}


request()

submitButton.addEventListener('click', () => {
    preventDefault()
    
})