var header = $("h1");

var nameOfP1 = $(".p1");
var nameOfP2 = $(".p2");

var score1 = $(".s1");
var score2 = $(".s2");

var img1 = $(".img1");
var img2 = $(".img2");

var playBtn = $("button.playbtn");

playBtn.click(function (e) {
  var btn = this.innerHTML;
  if (btn === "Start") {
    start();
  } else {
    play();
  }
});

function start() {
  nameOfP1.html(prompt("Enter Player 1"));

  nameOfP2.html(prompt("Enter Player 2"));

  playBtn.html("Play");
}

function play() {
  var p1 = nameOfP1.html();

  var p2 = nameOfP2.html();

  var s1 = parseInt(score1.html());

  var s2 = parseInt(score2.html());

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomImage1 = "dice" + randomNumber1 + ".png";

  img1.attr("src", "images/" + randomImage1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImage2 = "dice" + randomNumber2 + ".png";

  img2.attr("src", "images/" + randomImage2);

  if (randomNumber1 > randomNumber2) {
    header.html(
      "<img class = 'victory' src = 'images/victory_1.png'> " + p1 + " Wins!"
    );

    s1 = s1 + 1;

    score1.html(s1);
  } else if (randomNumber1 < randomNumber2) {
    header.html(
      p2 + " Wins! <img class = 'victory' src = 'images/victory_2.png'>"
    );

    s2 = s2 + 1;

    score2.html(s2);
  } else {
    header.html("Draw!");
  }

  // Adding Animations

  header.addClass("headingAnimation");

  setTimeout(function () {
    header.removeClass("headingAnimation");
  }, 501);

  // Dice roll Animation

  img1.addClass("diceAnimation");

  setTimeout(function () {
    img1.removeClass("diceAnimation");
  }, 201);

  img2.addClass("diceAnimation");

  setTimeout(function () {
    img2.removeClass("diceAnimation");
  }, 201);
}
