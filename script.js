// STORAGE
$(document).ready(function () {
  // console.log("oh hey!");
  // APPLICATION VARIABLES
  var btnOne = $("#btn-one");
  var btnTwo = $("#btn-two");
  var btnThree = $("#btn-three");
  var btnFour = $("#btn-four");
  var catHeadline = $("#cat-headline");
  var catDesc = $("#cat-desc");
  var form = $("form");
  var searchField = $("#search");
  var content = $("#generated-content");
  var search = $("#search");
  var homeBtn = $(".home");
  var container = $(".container-fluid");

  function init() {
    form.css("visibility", "hidden");
  }

  init();

  // DOM ELEMENTS

  function catOne(event) {
    // console.log("music");
    // Visible attributes //
    form.css("visibility", "visible");
    form.attr("id", "music");
    catHeadline.html(
      '<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_vvbgxmvk.json" background="transparent" speed="1" style="width: 300px; height: 300px" hover autoplay></lottie-player>'
    );
    catDesc.html(
      "YouTube offers a wide variety of user-generated inspirational content. Try any keyword to get started!"
    );

    content.css("padding-bottom", "100px");
    // Navigate down the page //
    $("html, body").animate({ scrollTop: form.height() }, 750);
    $("#generated-content").html("");
    $("#search-input").focus().val("");
  }

  function catTwo() {
    // console.log("film");
    // Visible attributes //
    form.css("visibility", "visible");
    form.attr("id", "art");
    catHeadline.html(
      '<lottie-player src="https://assets2.lottiefiles.com/packages/lf20_hfnjb1rt.json" background="transparent" speed="1" style="width: 300px; height: 300px" hover autoplay></lottie-player>'
    );
    catDesc.html(
      "Get inspired by art masterpieces. Try any keyword to get started!"
    );

    content.css("padding-bottom", "100px");
    // Navigate down the page //
    $("html, body").animate({ scrollTop: form.height() }, 750);
    $("#generated-content").html("");
    $("#search-input").focus().val("");
  }

  function catThree() {
    // console.log("art");
    // Visible attributes //
    form.css("visibility", "visible");
    form.attr("id", "art");
    catHeadline.html(
      '<lottie-player src="https://assets8.lottiefiles.com/packages/lf20_kseho6rf.json" background="transparent" speed="1" style="width: 300px; height: 300px" hover autoplay></lottie-player>'
    );
    catDesc.html(
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum culpa itaque dolore cumque ut doloremque expedita et, laborum nostrum harum."
    );

    content.css("padding-bottom", "100px");
    // Navigate down the page //
    $("html, body").animate({ scrollTop: form.height() }, 750);
    $("#generated-content").html("");
    $("#search-input").focus().val("");
  }

  function catFour() {
    // console.log("read");
    // Visible attributes //
    form.css("visibility", "visible");
    form.attr("id", "read");
    catHeadline.html(
      '<lottie-player src="https://assets8.lottiefiles.com/packages/lf20_lllwgxdl.json" background="transparent" speed="1" style="width: 300px; height: 300px" hover autoplay></lottie-player>'
    );
    catDesc.html(
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum culpa itaque dolore cumque ut doloremque expedita et, laborum nostrum harum."
    );

    content.css("padding-bottom", "100px");
    // Navigate down the page //
    $("html, body").animate({ scrollTop: form.height() }, 750);
    $("#generated-content").html("");
    $("#search-input").focus().val("");

  }

  function homeReset() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    // searchField.html("");
  }

  // SET EVENT LISTENERS/HANDLERS

  btnOne.on("click", catOne);
  btnTwo.on("click", catTwo);
  btnThree.on("click", catThree);
  btnFour.on("click", catFour);
  homeBtn.on("click", homeReset);

});
