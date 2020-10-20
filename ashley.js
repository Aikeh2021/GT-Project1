$(document).ready(function(){
    //Making sure the film js is working
    console.log("The film.js is working");
    //Emptying out the fields before each new movie is generated to ensure too many don't pop up at once
//Adding the event listener to the film icon on the navbar (to generate the first randomly selected film)
 $("#btn-four").on("click", function(){
    $("#generated-content").empty("");
   $("#cat-desc").empty("").text("'Drama is life with the dullbits cut out.'  --Alfred Hitchcock");
//    $("#cat-headline").empty("").text("Film");
   var titleArray = ["399174", "399579", "313922", "16869", "110415", "376867", "291979", "42506", "37799", "426426", "487558", "158445-7", "496243", "11324", "341013", "640", "37165", "210577", "437068", "290098", "1904", "274109", "9550", "17903", "398920", "338729", "57825", "21058", "857", "535292", "205596", "264644", "203801", "458723", "16052", "109410", "354912", "2640", "396535", "15917", "10950", "570670", "350", "50646" ];
   var movieId = titleArray[Math.floor(Math.random()*titleArray.length)];
   var queryURL = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=a60b3a8bc5eefd424c235053a3248b79&append_to_response=videos"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response.videos);
        var movieTitle = $("<h1>").text("Film: " + response.title).addClass("text-center")
        var tagline = $("<p>").text("" + response.tagline).addClass("text-center")
        var moviePlot = $("<p>").text("Summary: " + response.overview)
        var runtime = $("<p>").text("Runtime: " + response.runtime + " minutes")
        var releaseDate = $("<p>").text("Release Date: " + response.release_date)
        // var randomMovieBtn = $("<button>").addClass("text-center").text("Inspire me!").attr("text-align", "center")
        $("#generated-content").append(movieTitle, tagline, moviePlot, runtime, releaseDate);
        

        // var randomMoviePoster = $("<div>").$("<img>").attr("src:", response.images.posters[0]);
        // randomMoviePoster.append($("#generated-content"));

    }); 
});


});

