var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

var started = false;
var level = 0;

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart")
        startOver();
    }
}


function nextSequence() {
    //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    userClickedPattern = [];
    //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    level++;

    //5. Inside nextSequence(), update the h1 with this change in the value of level.
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
};

$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

$(document).keypress(function () {
    if (!started) //started is not the initial value of it,which becomes true.
    { //execute these code.
        $("#level-title").text("level " + level);
        nextSequence();
        started = true //This will change the initial value of started to true

    }
})

function playSound(name) {
    var audio = new Audio("sounds/" + name + '.mp3');
    audio.play();
}

//Step 6
function animatePress(currentColor) {
    $("#" + currentColor).click(function () {
        $("#" + currentColor).addClass("pressed");
        setTimeout(function () {
            $("#" + currentColor).removeClass("pressed");
        }, 100);

    });
};



































// var gamePattern = []
// var buttonColors = ["red", "blue", "green", "yellow"];


// function nextSequence() {
//     var randomNumber = Math.floor(Math.random() * 4);
//     var randomChosenColor = buttonColors[randomNumber]
//     gamePattern.push(randomChosenColor);
//     $("#"+randomChosenColor).click(function() {
//     $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
//     var audio = new Audio("sounds/"+randomChosenColor+".mp3" );
//     audio.play();

//     return randomChosenColor;
// });

// };

// $(".btn").click(nextSequence);