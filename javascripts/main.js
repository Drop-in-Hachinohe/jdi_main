



$(document).ready(function(){
  $("#js-nav_menu").on("click", function(){
    $(this).toggleClass("opened");
    $("#js-global_nav").toggleClass("active");
  });

  if ($(window).width() < 768) {
    $("#js-nav_menu_item_parent").on("click", function(){
      $(this).toggleClass("opened");
      $("#js-child_list").toggleClass("active");
    });
  }
  $(window).scroll(function () {
    console.log($(window).scrollTop())
    if ($(window).width() > 769) {
      if($(window).scrollTop() > 1) {
        $('#js-header_main').hide(200);
        $('#js-header').addClass("hidden");
        $("#js-child_list").addClass("header_hidden");
      } else {
        $('#js-header_main').show();
        $('#js-header').removeClass("hidden");
        $("#js-child_list").removeClass("header_hidden");
      }
    }
  });
});
