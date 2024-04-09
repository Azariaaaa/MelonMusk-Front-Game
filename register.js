async function SendPseudoToDatabase() {

  let pseudoValue = document.getElementById("pseudo").value;
  let displayError = false; 

  if(/^[a-zA-Zàéè ]{2,16}$/.test(pseudoValue)){
    
    let data = {
        name: pseudoValue
    };
    try {
        addPlayerRequestAndGetId = await fetch("https://localhost:5000/AddNewPlayer", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((Response) => Response.json())
        .then(function(playerData){
            return playerData.id;
        });
    } catch (error) {
        console.error("Error: " + error);
    }
  
    localStorage.setItem("playerId", addPlayerRequestAndGetId);
    window.location.href = "index.html";

  }
  else{

    let errorMessageH1Container = document.getElementById("error");
    errorMessageH1Container.classList.remove('d-none');
    
  }
}