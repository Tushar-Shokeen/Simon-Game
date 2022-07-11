var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
 
 
$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
});
 
 
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 3 + 1);
    //Assigning random number to desired color
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    //Animate flash using jquery
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    //Play Sound
    playSound(randomChosenColor);
}
 
 
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
 
 
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
  }


nextSequence();