var score;
var crystalValue;
var counter;


$(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    counter += crystalValue;
})