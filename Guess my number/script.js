"use strict"


//choosing secret number
 let secretNumber = Math.floor(Math.random() * 20) + 1;
 
//high and main scores
 let mainScore= 20;
 let highScore = 0;
const displayAnswer = function(answer){
    document.querySelector("#answer").textContent = answer;
}
document.querySelector("#Check").addEventListener("click",function(){
    const guess = Number(document.querySelector("#number").value)
    console.log(secretNumber)
    // console.log(guess)
//when no number;
    if(!guess){
        displayAnswer("⛔ No Number");
    } 
    if(guess == secretNumber){
        displayAnswer("🎊 Correct Number!");
        // document.querySelector("#highScore").textContent = ` 🎖️ High Score: ${mainScore}`;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector("#question").style.width = "17%";
        document.querySelector("#question").textContent = secretNumber;
        
         if(highScore < mainScore || highScore > mainScore){
            highScore = mainScore;
            document.querySelector("#highScore").textContent = `High score: ${mainScore}`;
        }
    }
        if(guess !== secretNumber && guess !==0){
            mainScore--;
            
            if(mainScore > 0){
            displayAnswer( guess > secretNumber ? "Too high" :"Too low");
            document.querySelector("#mainScore").textContent = `💯 score: ${mainScore}`;
            
      
        }else{
            document.querySelector("#answer").textContent = "😅 You Lost!";
        }
    
    }
});
// whan a number is more than secret number 
//     }else if(guess > secretNumber){
        
//         //decrease scoores action
        
//         // the condition1 whan a player loose the game
//         }else{
//             document.querySelector("#answer").textContent = "😅 You Lost!";
//         }
//     }else if(guess < secretNumber){
//         mainScore--;
//         //decrease scoores action2
//         if(mainScore > 0){
//             document.querySelector("#answer").textContent = " Too low";
//             document.querySelector("#mainScore").textContent = `💯 score: ${mainScore}`;
//         //the condition2 whan a player looses the game
//       }else{
        
//       }
//     }

      
    

document.querySelector("#again").addEventListener("click", function(){  
    mainScore = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector("#number").value = "";
    displayAnswer("start guessing...");
    document.querySelector("#mainScore").textContent = ` 💯 score: 20`;
    document.querySelector("#highScore").textContent = `High score: ${highScore}`
    document.querySelector("#question").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#242423";
    document.querySelector("#question").style.width = "160px";
})
