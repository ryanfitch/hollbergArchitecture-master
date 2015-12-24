$(document).ready(function() {

  //menu slide down effect
  $(".dropdown-menu").hide();
  $(".dropdown-toggle").click(function() {
    $(".dropdown-menu").toggle(500);
  });
});

//bio text slide in effect
$(document).ready(function() {
  $(".bio-slide").hide().show(2000);
});

//contact text slide in effect
$(document).ready(function() {
  $(".contact-slide").hide().show(2000);
});



