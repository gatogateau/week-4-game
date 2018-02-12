
// api for jquery
{/* <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */}


$(document).ready(function () {

// random number for computer generated  
// tag with computerGen class
    var random= (Math.floor((Math.random()*101)+19));



// random number for Crystal value
    var randomCrys = (Math.floor((Math.random()*12)+1));

    // onclick from number to generate random number
    $(".numNum").on("click", function () {
        $("#compGen").append(random);
    })

    
    $(".shrink-button").on("click", function() {
        $(".captain-planet").animate({ height: "100px" });
      });

// Diamond button

// emerald button

// ruby button

// saphire button





});