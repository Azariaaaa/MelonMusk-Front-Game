CreateANewGame();
GetTwentyBestGames();

async function GetTwentyBestGames() {

    await fetch("https://localhost:5000/GetTwentyBestGames",{
        method: "GET", 
    })
    .then((response) => response.json())
    .then(async function(data){

        let count = 1;
        let rank = document.getElementById("ranking-body");
            
        for (const element of data)
        {
            let newRow = document.createElement('tr');
            let newTH = document.createElement('th');
            newTH.setAttribute("scope", "row");
            newTH.textContent = count;
            let newTD = document.createElement('td');
            newTD.textContent = await GetPlayerById(element.playerId);
            let newTDScore = document.createElement('td');
            newTDScore.textContent = element.score;

            newRow.appendChild(newTH);
            newRow.appendChild(newTD);
            newRow.appendChild(newTDScore);
            rank.appendChild(newRow);

            count++;
        }
    });
} 

async function GetPlayerById(playerId) {

    let dataToSend = {
        id : playerId
    }

    let playerRequest = await fetch("https://localhost:5000/GetPlayerById",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
        })
        .then((playerResponse) => playerResponse.json())
        .then(function(playerData){
            return playerData.name;
        });
        return playerRequest;
}

async function CreateANewGame(){

    let data = {
        score : localStorage.getItem("playerScore"),
        playerId : localStorage.getItem("playerId")
    };
    try {
        addPlayerRequestAndGetId = await fetch("https://localhost:5000/AddScore", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.error("Error: " + error);
    }
}
