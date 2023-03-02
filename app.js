let userScore = 0;
let computerScore = 0;
document.getElementById("snake").hidden = true;
document.getElementById("water").hidden = true;
document.getElementById("gun").hidden = true;

function choice(name) {
  document.getElementById("final").innerHTML = ""
  document.getElementById("final").style.backgroundColor = "white";
  document.getElementById("u-Score").innerText = userScore;
  document.getElementById("c-Score").innerText = computerScore;
    let userChoice = name; 
    // Random value generate 
    let arr = ["snake", "water", "gun"];
    let randNum = parseInt(Math.random() * 3);
    let newRandNum = arr[randNum];
    console.log("Computer value " + newRandNum );
   
    if(newRandNum == "snake"){
       document.getElementById("snake").hidden = false;
       document.getElementById("water").hidden = true;
       document.getElementById("gun").hidden = true;
       
   }
   else if(newRandNum == "water"){
      document.getElementById("snake").hidden = true;
      document.getElementById("water").hidden = false;
      document.getElementById("gun").hidden = true;
   }
   else if(newRandNum == "gun"){
    document.getElementById("snake").hidden = true;
    document.getElementById("water").hidden = true;
    document.getElementById("gun").hidden = false;
   }

    // Logic My Game 
    if (userChoice == newRandNum){
      document.getElementById("final").innerHTML = "Draw & No point";
    } 
    
    else if(userChoice == "snake" && newRandNum == "water"){
      // alert("User +1");
      document.getElementById("u-Score").innerText = ++userScore
      console.log("userScore : " +  userScore);
    }

    else if (userChoice == "water" && newRandNum == "gun") {
      // alert("user +1");
      document.getElementById("u-Score").innerText = ++userScore
      console.log("userScore : " + userScore);
    } 

    else if (userChoice == "gun" && newRandNum == "snake") {
      // alert("user +1");
      document.getElementById("u-Score").innerText = ++userScore
      console.log("userScore : " + userScore);
    } 

    else if (newRandNum == "snake" && userChoice == "water") {
      // alert("Computer +1");
      document.getElementById("c-Score").innerText = ++computerScore
      console.log("computerScore : " + computerScore);
    } 

    else if (newRandNum == "water" && userChoice == "gun") {
      // alert("Computer +1");
      document.getElementById("c-Score").innerText = ++computerScore
      console.log("computerScore : " + computerScore);
    } 

    else if (newRandNum == "gun" && userChoice == "snake") {
      // alert("Computer +1");
      document.getElementById("c-Score").innerText = ++computerScore
      console.log("computerScore : " + computerScore);
    }

    // Condition for checking win 
    if(userScore == 5 || computerScore == 5){
      if (userScore < computerScore) {
        document.getElementById("final").innerHTML = "You Lose"
        document.getElementById("final").style.backgroundColor = "red"
      }
       else if (userScore > computerScore) {
        document.getElementById("final").innerHTML = "You Won"
        document.getElementById("final").style.backgroundColor = "Green"
      }
    }

    if(userScore == 5 || computerScore == 5){
      userScore = 0;
      computerScore = 0;
    }
  }
