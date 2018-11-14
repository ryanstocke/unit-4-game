$(document).ready(function () {
    //need a random number between 19 and 120
    var randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    console.log("randomNumber: " + randomNumber);

    $("#random-number").append(randomNumber);

    var firstCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    console.log("firstCrystal: " + firstCrystal);
    var secondCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    console.log("secondCrystal: " + secondCrystal);
    var thirdCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    console.log("thirdCrystal: " + thirdCrystal);
    var fourthCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    console.log("fourthCrystal: " + fourthCrystal);


    var userTotalScore = 0;
    var wins = 0;
    var losses = 0;

    $("#numWins").html("wins: " + wins);
    $("#numLosses").html("losses: " + losses);


    function startGame() {

        $("#blueCrystal").click(function () {
            userTotalScore = userTotalScore + firstCrystal;
            console.log("New total score: " + userTotalScore);
            $("#total-score").html(userTotalScore);
            if (userTotalScore === randomNumber) {
                youWin();
            } else if (userTotalScore > randomNumber) {
                youLose();
            };
        });
        $("#greenCrystal").click(function () {
            userTotalScore = userTotalScore + secondCrystal;
            console.log("New total score: " + userTotalScore);
            $("#total-score").html(userTotalScore);
            if (userTotalScore === randomNumber) {
                youWin();
            } else if (userTotalScore > randomNumber) {
                youLose();
            };
        });
        $("#yellowCrystal").click(function () {
            userTotalScore = userTotalScore + thirdCrystal;
            console.log("New total score: " + userTotalScore);
            $("#total-score").html(userTotalScore);
            if (userTotalScore === randomNumber) {
                youWin();
            } else if (userTotalScore > randomNumber) {
                youLose();
            };
        });
        $("#redCrystal").click(function () {
            userTotalScore = userTotalScore + fourthCrystal;
            console.log("New total score: " + userTotalScore);
            $("#total-score").html(userTotalScore);
            if (userTotalScore === randomNumber) {
                youWin();
            } else if (userTotalScore > randomNumber) {
                youLose();
            };
        });
    };

    startGame();

    function playAgain() {
        userTotalScore = 0;
        
        randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        console.log("randomNumber: " + randomNumber);
        $("#random-number").html(randomNumber);
        
        firstCrystal = Math.floor(Math.random() * (12 - 1) + 1);
        console.log("firstCrystal: " + firstCrystal);
        secondCrystal = Math.floor(Math.random() * (12 - 1) + 1);
        console.log("secondCrystal: " + secondCrystal);
        thirdCrystal = Math.floor(Math.random() * (12 - 1) + 1);
        console.log("thirdCrystal: " + thirdCrystal);
        fourthCrystal = Math.floor(Math.random() * (12 - 1) + 1);
        console.log("fourthCrystal: " + fourthCrystal);
       

        $("#total-score").html(userTotalScore);

        
    }
        function youWin() {
        alert("You win!");
        wins++;
        console.log("Wins: " + wins);
        $("#numWins").html("Wins: " + wins);
        playAgain();
    };

        function youLose() {
        alert("You lose, try again!");
        losses++;
        console.log("Losses: " + losses);
        $("#numLosses").html("Losses: " + losses);
        playAgain();
    };





})






    //create an array of crystal image links
    // var crystalImages = ["images/blue.png", "images/red.png", "images/green.png", "images/yellow.png"];



    //loop through the array of crystal image links
    // crystalImages.forEach(function (imageUrl, index) {

        //for each one
        //create a new 'img' element
        // var crystal = $("<img>");

        //set src= crystal image link
        // crystal.attr("src", imageUrl);

        //set random value to each crystal (points value)
        // data-points will allow the points to work in all browsers

        // crystal.attr("data-points", Math.floor(Math.random() * 12) + 1);
        //add unique ID
        // crystal.attr("id", "crystal-" + (index + 1));
        //add class
        // crystal.addClass("crystal");
    //     $("#images").append(crystal);

    // });


    // $("#images").on("click", ".crystal", function () {
    //     var crystalVal = $(this).attr("data-points");
    //     alert(crystalVal);
    //     console.log(this);
        
    // })
