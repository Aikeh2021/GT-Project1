// console.log("oh hey!");

// APPLICATION VARIABLES
var btnOne = $("#btn-one");
var btnTwo = $("#btn-two");
var btnThree = $("#btn-three");
var btnFour = $("#btn-four");
var catHeadline = $("#cat-headline");
var catDesc = $("#cat-desc");
var form = $("form");
var content = $("#generated-content");

function init() {
  form.css("visibility", "hidden");
}

init();

// DOM ELEMENTS

function catOne(event) {
  console.log("music");
  // Visible attributes //
  form.css("visibility", "visible");
  catHeadline.html("Music");
  catDesc.html(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum culpa itaque dolore cumque ut doloremque expedita et, laborum nostrum harum."
  );

  content.append('<img src="https://www.fillmurray.com/g/600/300" />');
  content.css("padding-bottom", "100px");
  // Navigate down the page //
  $("html, body").animate({ scrollTop: form.height() }, 750);
}

function catTwo() {
  console.log("film");
    // Visible attributes //
    form.css("visibility", "visible");
    catHeadline.html("Film");
    catDesc.html(
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum culpa itaque dolore cumque ut doloremque expedita et, laborum nostrum harum."
    );
  
    content.append('<img src="https://www.fillmurray.com/g/600/300" />');
    content.css("padding-bottom", "100px");
    // Navigate down the page //
    $("html, body").animate({ scrollTop: form.height() }, 750);
}

function catThree() {
  console.log("art");
    // Visible attributes //
    form.css("visibility", "visible");
    catHeadline.html("Art");
    catDesc.html(
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum culpa itaque dolore cumque ut doloremque expedita et, laborum nostrum harum."
    );
  
    content.append('<img src="https://www.fillmurray.com/g/600/300" />');
    content.css("padding-bottom", "100px");
    // Navigate down the page //
    $("html, body").animate({ scrollTop: form.height() }, 750);
}

function catFour() {
  console.log("read");
    // Visible attributes //
    form.css("visibility", "visible");
    catHeadline.html("Read");
    catDesc.html(
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum culpa itaque dolore cumque ut doloremque expedita et, laborum nostrum harum."
    );
  
    content.append('<img src="https://www.fillmurray.com/g/600/300" />');
    content.css("padding-bottom", "100px");
    // Navigate down the page //
    $("html, body").animate({ scrollTop: form.height() }, 750);
}

// SET EVENT LISTENERS/HANDLERS

btnOne.on("click", catOne);
btnTwo.on("click", catTwo);
btnThree.on("click", catThree);
btnFour.on("click", catFour);

// API CALLS
// API RESPONSES
// APPLICATION LOGIC
// STORAGE
