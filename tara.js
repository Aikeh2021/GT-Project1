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
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + id;
    $.ajax({
      type: "GET",
      url: objectAPI,
    }).then(function (obj) {
      //add data to data array
      data.push({
        imageSrc: obj.primaryImage,
        title: obj.title.replace(/"/g, "&quot;"),
        artist: obj.artistDisplayName.replace(/"/g, "&quot;"),
        date: obj.objectDate.replace(/"/g, "&quot;"),
        medium: obj.medium.replace(/"/g, "&quot;"),
      });
      //do we have all the data?
      if (data.length === qty) {
        callback(data);
      }
    });
  }

  //get random elements from an array (helper function)
  function getRandomSubset(arr, qty) {
    if (arr.length < qty) return arr.slice(0); //no infinite loops, please!
    const newArr = new Set();
    while (newArr.size < qty) {
      //set has size, not length
      //get random from arr, put it in newArr if it's unique
      let randIndex = Math.floor(Math.random() * arr.length);
      newArr.add(arr[randIndex]);
    }
    return Array.from(newArr); //return array, not Set
  }
}

$("form").on("submit", function (e) {
  if ($(this).attr("id") !== "art") return;
  e.preventDefault();
  const numberOfItems = 5;
  const searchTerm = $("#search-input").val().trim();
  getCollection(searchTerm, numberOfItems, displayCollection);
  return false;
});

function displayCollection(data) {
  var html = "";
  for (let item of data) {
    let tooltip = `Title: ${item.title} (${item.date || "?"})<br/>Artist: ${
      item.artist || "?"
    }<br/>Medium: ${item.medium}`;
    html += `<img src="${item.imageSrc}" data-tooltip="${tooltip}">`;
  }
  $("#generated-content").html(html);
  document.querySelectorAll("#generated-content img").forEach(setupTooltip);
}

function setupTooltip(img) {
  console.log(img);
  img.addEventListener("mouseover", tooltipOn);
}

function tooltipOn(e) {
  e.target.removeEventListener("mouseover", tooltipOn);
  e.target.addEventListener("mousemove", tooltipMove);
  e.target.addEventListener("mouseout", tooltipOff);
  let oldTooltip = document.querySelector("#tooltip");
  if (oldTooltip) oldTooltip.outerHTML = "";
  tooltip = document.createElement("div");
  tooltip.id = "tooltip";
  tooltip.innerHTML = e.target.getAttribute("data-tooltip");
  tooltipMove(e);
  document.body.appendChild(tooltip);
}

function tooltipMove(e) {
  tooltip.style.left = e.pageX + "px";
  tooltip.style.top = e.pageY + "px";
}

function tooltipOff(e) {
  e.target.removeEventListener("mousemove", tooltipMove);
  e.target.removeEventListener("mouseout", tooltipOff);
  e.target.addEventListener("mouseover", tooltipOn);
  document.body.removeChild(tooltip);
}
