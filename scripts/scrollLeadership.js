$(document).on("scroll", function () {
  if (
    $(document).scrollTop() >=
    $(".footer").offset().top - $(window).height()
  ) {
    $(".footer").addClass("on-scroll");
  }

  if (
    $(document).scrollTop() >=
    $(".leadershipers").offset().top - $(window).height()
  ) {
    $(".leadershipers__container").addClass("on-scroll");
  }
});
