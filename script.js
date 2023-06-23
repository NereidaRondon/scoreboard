let homeScore = 0;
let guestScore = 0;
let home = document.getElementById("score-div-home");
let guest = document.getElementById("score-div-guest");
home.textContent = homeScore;
guest.textContent = guestScore;

function homePoints(points){
  home.style.border= "4px solid #032455";
  let totalPoints = homeScore + points;
  homeScore = totalPoints;
  home.innerHTML = totalPoints; 
  
  if(homeScore !== guestScore){
    (homeScore > guestScore)? (home.style.border= "4px solid #ff7300", guest.style.border = "4px solid #032455" ):home.style.border= "4px solid #032455";
  } else{
    guest.style.border= "4px solid #032455";
    home.style.border= "4px solid #032455";
  }
}

function guestPoints(points){
  guest.style.border= "4px solid #032455";
  let totalPoints = guestScore + points;
  guestScore = totalPoints;
  guest.innerHTML = totalPoints;
  
  if(homeScore !== guestScore){
    (guestScore > homeScore)? (guest.style.border = "4px solid #ff7300", home.style.border= "4px solid #032455"): guest.style.border = "4px solid #032455";
  } else{
    guest.style.border= "4px solid #032455";
    home.style.border= "4px solid #032455";
  }
}

function newGame(){
  homeScore = 0;
  guestScore = 0;
  home.innerHTML = 0;
  guest.innerHTML = 0;
  guest.style.border= "4px solid #032455";
  home.style.border= "4px solid #032455";
}
