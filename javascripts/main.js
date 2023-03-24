



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
});