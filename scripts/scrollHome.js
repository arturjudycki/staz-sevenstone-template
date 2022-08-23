$(document).on("scroll", function () {
  if (
    $(document).scrollTop() >=
    $(".about").offset().top - $(window).height()
  ) {
    $(".about").addClass("on-scroll");
  }

  if (
    $(document).scrollTop() >=
    $(".deals").offset().top + $(".deals").height() / 2 - $(window).height()
  ) {
    $(".deals").addClass("on-scroll");
  }

  if (
    $(document).scrollTop() >=
    $(".loan-options").offset().top +
      $(".loan-options").height() / 2 -
      $(window).height()
  ) {
    $(".loan-options").addClass("on-scroll");
  }

  if (
    $(document).scrollTop() >=
    $(".footer").offset().top - $(window).height()
  ) {
    $(".footer").addClass("on-scroll");
  }
});
