function scrollDown() {
  $('html, body').animate({
    scrollTop: $("#content-container").offset().top
  }, 1000);
}