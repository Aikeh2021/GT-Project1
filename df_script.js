$(document).ready(function () {
  var apiKey = "AIzaSyAWsdDOn6l8M1xX89rUG_KTlrn_uJ8lSYw";

  var video = "";

  $("#ytForm").submit(function (event) {
    event.preventDefault();

    var search = $("#search-input").val();
    console.log(search);

    videoSearch(apiKey, search, 10);
  });

  function videoSearch(key, search, maxResults) {
    $("#generated-content").empty();

    $.get(
      "https://www.googleapis.com/youtube/v3/search?key=" +
        key +
        "&type=video&part=snippet&maxResults=" +
        maxResults +
        "&q=" +
        search,
      function (data) {
        console.log(data);
        data.items.forEach((item) => {
          video = `

            <iframe width="420" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder= "0" allowfullscreen></iframe>

            `;
          $("#generated-content").append(video);
        });
      }
    );
  }
});
