$(document).on("scroll", function () {
  if (
    $(document).scrollTop() >=
    $(".deals").offset().top + $(".deals").height() / 2 - $(window).height()
  ) {
    $(".deals__container").addClass("on-scroll");
  }

  if (
    $(document).scrollTop() >=
    $(".deals").offset().top + $(".deals").height() / 2 - $(window).height()
  ) {
    $(".deals__filtration").addClass("on-scroll");
  }

  if (
    $(document).scrollTop() >=
    $(".deals").offset().top + $(".deals").height() / 2 - $(window).height()
  ) {
    $(".deals__pagination").addClass("on-scroll");
  }

  if (
    $(document).scrollTop() >=
    $(".footer").offset().top - $(window).height()
  ) {
    $(".footer").addClass("on-scroll");
  }
});
