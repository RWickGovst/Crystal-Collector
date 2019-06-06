var wins = 0;
var losses = 0;
var totalScore = 0;
var computerNum;
var score;

function randomNumCrystal() {
    return {
        blue: {
            points: Math.floor(Math.random() * 5) + 1,
            imageUrl: "assets/pictures/blueGem.png",
        },
        purple: {
            points: Math.floor(Math.random() * 11) + 6,
            imageUrl: "assets/pictures/purpleGem.png",
        },
        orange: {
            points: Math.floor(Math.random() * 16) + 11,
            imageUrl: "assets/pictures/orangeGem.png",
        },
        gold: {
            points: Math.floor(Math.random() * 21) + 16,
            imageUrl: "assets/pictures/goldGem.png",
        }
    }
}
// display computer number
function startGame() {
    totalScore = 0;
    crystals = randomNumCrystal();
    // select and display the computer pick
    computerNum = Math.floor(Math.random() * 150) + 50;
    // console.log(computerNum);
    $("#number-to-guess").html(computerNum);
}
// assign a random value to each gem
// display each gem
function renderCrystal() {
    for (var key in crystals) {
        var crystalDiv = $("<div class='crystal-button' data-name='" + key + "'>");
        var crystalImage = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageUrl);
        crystalDiv.append(crystalImage);
        $("#crystal-image").append(crystalDiv);
        console.log(crystalDiv)
    }
}


startGame();
renderCrystal();


// click a gem button
$(".crystal-button").on("click", function (event) {
    // totalScore = totalScore + crystals[crystal.attr("data-name")].points;
});
// when the gem is clicked, its value is added to totalScore
// totalScore = totalScore + (clicked gem value);
$("#total-score").html(totalScore);
// check if totalScore > < or = computerNum

// if(totalScore === computerNum){
// alert ("You win");
// wins++;
$("#win").html(wins);
// }

// else if(totalScore > computerNum){
// alert ("You lose!");
// losses++;
$("#loss").html(losses);
// }

// else(totalScore < computerNum){
// wait for new click
// }
//  restart game after win/loss while keeping the wins and losses totals
