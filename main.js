
var currentTime = 20
var bestScore = 0;
var secondes;
var playerScore = 0;
const timerElement = document.getElementById("timer")

createNewDiv();

setInterval(() => {
  secondes = parseInt(currentTime % 60, 10)
  timerElement.innerText = secondes

  if(currentTime == 0){
    addScoreToBestScore();
    localStorage.setItem("playerScore", playerScore);
    window.location.href = "RankingPage.html";
  }
  else{
    currentTime--;
  }
  
}, 1000)

function createNewDiv() {
    var divWidth = 100;
    var divHeight = 100;
    var gameArea = document.getElementById("gameArea");
  
    var newDiv = document.createElement('div');
    newDiv.className = 'randomDiv';
    newDiv.style.width = divWidth + 'px';
    newDiv.style.height = divHeight + 'px';
    newDiv.style.backgroundImage = 'url("ElonFace.png")';
    newDiv.style.border = '2px solid red';
    newDiv.style.position = 'absolute';
    newDiv.style.cursor = 'pointer';
    newDiv.style.borderRadius = '100%';
  
    var newX = getRandomNumber(gameArea.offsetLeft, (gameArea.offsetLeft + gameArea.offsetWidth - divWidth));
    var newY = getRandomNumber(gameArea.offsetTop, gameArea.offsetHeight + gameArea.offsetTop - divHeight);
    newDiv.style.left = newX + 'px';
    newDiv.style.top = newY + 'px';
  
    newDiv.addEventListener('click', divClicked);
  
    document.body.appendChild(newDiv);
  }

  function moveDivRandomly(event) {
    var divWidth = 100; 
    var divHeight = 100;
  
    var div = event.target;
  
    var newX = getRandomNumber(gameArea.offsetLeft, (gameArea.offsetLeft + gameArea.offsetWidth - divWidth));
    var newY = getRandomNumber(gameArea.offsetTop, gameArea.offsetHeight + gameArea.offsetTop - divHeight);
  
    div.style.left = newX + 'px';
    div.style.top = newY + 'px';
  }
  
  function divClicked(event) {
    playerScore++;
    document.getElementById("score").innerHTML = playerScore;
    moveDivRandomly(event);
  }
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function addScoreToBestScore(){
    bestScore = playerScore;
    var divBestScore = document.getElementById("best-score").innerHTML = bestScore
  }

  function sendScoreToDatabase(){
    
  }

  

