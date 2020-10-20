$(document).ready(function () {
  var apiKey = "AIzaSyAWsdDOn6l8M1xX89rUG_KTlrn_uJ8lSYw";

  var video = "";
  // once the form is submitted
  $("form").on("submit", function (event) {
    if ($(this).attr("id") !== "music") return;
    // we run prevent default to keep from refreshing the page.
    event.preventDefault();
    // this variable holds the input data from the user input.
    var search = $("#search-input").val();
    // here we call the video search function.
    videoSearch(apiKey, search, 10);
  });
  // this is the video search function.
  function videoSearch(key, search, maxResults) {
    $("#generated-content").empty();
    // this variable holds the url.
    var URL =
      "https://www.googleapis.com/youtube/v3/search?key=" +
      key +
      "&type=video&part=snippet&maxResults=" +
      maxResults +
      "&q=" +
      search;
    // this is the ajax call to get the data from the api.
    $.ajax({
      url: URL,
      method: "GET",
    }).then(function (response) {
      // this dynamically generates html to hold the video.
      response.items.forEach((item) => {
        video = `

        <iframe width="420" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder= "0" allowfullscreen></iframe>

        `;
        // here we append the video to the screen.
        $("#generated-content").append(video);
      });
    });
  }
});
