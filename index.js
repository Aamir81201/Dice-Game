
document.querySelector("button.playbtn").addEventListener("click", game);

function game(){


// Player Score

    var scoreOFPlayer1 = parseInt(document.querySelector(".score1").innerHTML)

    var scoreOFPlayer2 = parseInt(document.querySelector(".score2").innerHTML)


// Actual code for dice game

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomImage1 = "dice" + randomNumber1 + ".png";

    document.querySelector(".img1").setAttribute("src", "images/" + randomImage1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImage2 = "dice" + randomNumber2 + ".png";

    document.querySelector(".img2").setAttribute("src", "images/" + randomImage2);


    if(randomNumber1 > randomNumber2) {

        document.querySelector("h1").innerHTML = "<img class = 'victory' src = 'images/victory_1.png'> Player 1 Wins!";

        scoreOFPlayer1 = scoreOFPlayer1 + 1;

        document.querySelector(".score1").innerHTML = scoreOFPlayer1;
    }
    else if(randomNumber1 < randomNumber2) {

        document.querySelector("h1").innerHTML = "Player 2 Wins! <img class = 'victory' src = 'images/victory_2.png'>";

        scoreOFPlayer2 = scoreOFPlayer2 + 1;

        document.querySelector(".score2").innerHTML = scoreOFPlayer2;
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    }


// Adding Animations
            
    // Heading Animation
    document.querySelector("h1").classList.add("headingAnimation");
            
    setTimeout(function(){
        document.querySelector("h1").classList.remove("headingAnimation");
    }, 501);

    // Dice roll Animation
    
    document.querySelector(".img1").classList.add("diceAnimation");
    
    setTimeout(function(){
        document.querySelector(".img1").classList.remove("diceAnimation");
    }, 201);

    document.querySelector(".img2").classList.add("diceAnimation");
    
    setTimeout(function(){
        document.querySelector(".img2").classList.remove("diceAnimation");
    }, 201);

}