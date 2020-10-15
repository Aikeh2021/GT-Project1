// APPLICATION VARIABLES
// DOM ELEMENTS
// SET EVENT LISTENERS/HANDLERS
// API CALLS
// API RESPONSES
// APPLICATION LOGIC
// STORAGE
$(document).ready(function () {

    var apiKey = "AIzaSyAWsdDOn6l8M1xX89rUG_KTlrn_uJ8lSYw";
    var URL = "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=" + apiKey +
    "&part=snippet,contentDetails,statistics,status";


    $.ajax({
       url: URL,
       method: "GET",
     }).then(function (response) {
       console.log(response);

     });
});


