$(document).ready(function () {
  function getCollection(keyword, qty, callback) {
    const searchAPI =
      "https://collectionapi.metmuseum.org/public/collection/v1/search?q=" +
      keyword;
    let data = [];
    //make first API call, get array of objectIDs from MET
    $.ajax({
      type: "GET",
      url: searchAPI,
    }).then(getObjects);

   

  // DOM ELEMENTS
  // SET EVENT LISTENERS/HANDLERS
  // API CALLS
  // API RESPONSES
  // APPLICATION LOGIC
  // STORAGE
});
