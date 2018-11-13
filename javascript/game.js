var crystalImages = ["images/blue.png", "images/red.png", "images/green.png", "images/yellow.png"];

//create an array of crystal image links



//loop through the array of crystal image links
crystalImages.forEach(function(imageUrl, index) {
    
    //for each one
    //create a new 'img' element
    var crystal = $("<img>");
   
    //set src= crystal image link
    crystal.attr("src", imageUrl);
    
    //set random value to each crystal (points value)
    // data-points will allow the points to work in all browsers
    
    crystal.attr("data-points", Math.floor(Math.random() * 12) + 1);     
    //add unique ID
    crystal.attr("id", "crystal-" + (index + 1));
    //add class
    crystal.addClass("crystal");
    $("#images").append(crystal);  
        
});

$("#images").on("click", ".crystal", function() {
    var crystalVal = $(this).attr("data-points");
    alert(crystalVal);
    console.log(this);
})















// $("button").on("click", function() {
//     alert("")
// })












