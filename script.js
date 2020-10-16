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

    //for qty objectIDs, make another API call
    function getObjects(collection) {
      //get qty random objectIDs from collection.objectIDs
      const objects = getRandomSubset(collection.objectIDs, qty);
      //objects is an array of unique, random MET objectID numbers
      for (let objectId of objects) {
        getObject(objectId);
      }
    }

    function getObject(id) {
      //single API call for objectId id
      const objectAPI =
        "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
        id;
      $.ajax({
        type: "GET",
        url: objectAPI,
      }).then(function (obj) {
        //add data to data array
        data.push({
          imageSrc: obj.primaryImage,
          title: obj.title,
          artist: obj.artistDisplayName,
          bio: obj.artistDisplayBio,
          date: obj.objectDate,
          medium: obj.medium,
        });
        //do we have all the data?
        if (data.length === qty) {
          callback(data);
        }
      });
    }

  

  //testing ONLY:
  $(document).ready(function () {
    getCollection("monet", 10, gotCollectionData);
  });

  function gotCollectionData(data) {
    console.log(data);
  }

  // DOM ELEMENTS
  // SET EVENT LISTENERS/HANDLERS
  // API CALLS
  // API RESPONSES
  // APPLICATION LOGIC
  // STORAGE
});
