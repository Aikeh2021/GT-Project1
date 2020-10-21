function buildQueryURL() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

    var queryParams = "api-key" = "9kyLkqDEKh0wNRVhhye7QtETVvdKstcY"; 

    queryParams.q = $("#search-term")
    .val()
    .trim();

   
    }

    console.log("---------------\nURL: " + queryURL + "\n---------------");
    console.log(queryURL + $.param(queryParams));
    return queryURL + $.param(queryParams);
{

function updatePage(NYTData) {

    console.log(NYTData);
    console.log("---------------");

    for (var i = 0; i < numArticles; i++) {
        // Get specific article info for current index
        var article = NYTData.response.docs[i];
    
        // Increase the articleCount (track article # - starting at 1)
        var articleCount = i + 1;
    
        // Create the  list group to contain the articles and add the article content for each
        var $articleList = $("<ul>");
        $articleList.addClass("list-group");
    
        // Add the newly created element to the DOM
        $("#article-section").append($articleList);
        $articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");
        console.log(article.web_url);
    
        // Append the article
        $articleList.append($articleListItem);
      }
    }
    
    // Function to empty out the articles
    function clear() {
      $("#article-section").empty();
    }

    // $("#run-search").on("click", function(event) {

        // event.preventDefault();

//         clear();

//   // Build the query URL for the ajax request to the NYT API
//   var queryURL = buildQueryURL();

//   // Make the AJAX request to the API - GETs the JSON data at the queryURL.
//   // The data then gets passed as an argument to the updatePage function
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(updatePage);
// });

// //  .on("click") function associated with the clear button
// $("#clear-all").on("click", clear);