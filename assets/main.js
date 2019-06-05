var wins=10;
var losses;
var totalScore;
var computerNum;
var score;
// select and display the computer pick
var computerNum = Math.floor(Math.random() * 150) +50;
// console.log(computerNum);
$("#number-to-guess").html(computerNum);

// assign a random value to each gem
var blueValue= Math.floor(Math.random() * 5) +1;
// console.log(blueValue);
var purpleValue= Math.floor(Math.random() * 11) +6;
// console.log(purpleValue);
var orangeValue=Math.floor(Math.random() * 16) +11;
// console.log(orangeValue);
var goldValue=Math.floor(Math.random() * 21) +16;
// console.log(goldValue);


// click a gem button
// $("#win").text(wins);
// for(var i=0;i<4;i++){
$("#crystal-image").append("<img src='assets/pictures/Screen Shot 2019-06-05 at 8.13.39 AM.png' height='125px'>");
$("#crystal-image").append("<img src='assets/pictures/Screen Shot 2019-06-05 at 4.40.16 PM.png' height='125px'>");
$("#crystal-image").append("<img src='assets/pictures/Screen Shot 2019-06-05 at 4.40.49 PM.png' height='125px'>");
$("#crystal-image").append("<img src='assets/pictures/Screen Shot 2019-06-05 at 4.41.10 PM.png' height='125px'>");
// }

// when the gem is clicked, its value is added to totalScore
// check if totalScore > < or = computerNum

//  if totalScore === computerNum 
// alert "you win"
//  wins are incremented

//  if totalScore > computerNum
// alert you lose
//  losses are incremented

//  if totalScore < computerNum
//  wait for new click

//  restart game after win/loss while keeping the wins and losses totals