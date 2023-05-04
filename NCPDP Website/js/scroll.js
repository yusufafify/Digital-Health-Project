$(document).ready(function() {
    var expanded = false;

    // Hide the nav image when the user is at the top of the page
    if ($(window).scrollTop() === 0) {
      $(".logo").hide();
      $(".right").show();
    }

    // Toggle the nav image and the content when the user scrolls down
    $(window).scroll(function() {
      if ($(window).scrollTop() > 0) {
        $(".logo").show();
        $(".right").slideUp({
          duration: 500,
          easing: "linear",
          complete: function() {
            if (expanded) {
              $(".nav-img").removeClass("expanded");
              expanded = false;
            }
          }
        });
      } else {
        $(".logo").hide();
        $(".right").slideDown({
          duration: 500,
          easing: "linear",
          complete: function() {
            if (expanded) {
              $(".logo").removeClass("expanded");
              expanded = false;
            }
          }
        });
      }
    });

    // Toggle the nav image and the content when the user clicks on the nav image
    $(".logo").click(function() {
      $(".right").slideToggle({
        duration: 500,
        easing: "linear",
        complete: function() {
          $(".logo").toggleClass("expanded");
          expanded = !expanded;
        }
      });
    });
  });