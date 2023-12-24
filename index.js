$(function () {
  // Add the hover() method for #language-wrapper
  $("#text-wrapper").hover(function () {
    $(".feature-item").fadeIn();
  });
});

$(function () {
  $(".clcik_1").on("click", function () {
    $(".clcik_2").slideToggle();
  });
});
