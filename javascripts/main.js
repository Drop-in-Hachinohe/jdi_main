function hideHeader() {
  $('#js-header_main').hide(200);
  $('#js-header').addClass("hidden");
  $("#js-child_list").addClass("header_hidden");
}
function showHeader() {
  $('#js-header_main').show();
  $('#js-header').removeClass("hidden");
  $("#js-child_list").removeClass("header_hidden");
}
function headerHundler() {
  if ($(window).width() > 769) {
    if($(window).scrollTop() > 1) {
      hideHeader();
    } else {
      showHeader();
    }
  }
}

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
    headerHundler();
  });
  $(window).resize(function () {
    if ($(window).width() < 768) {
      showHeader();
    }
  });
  $("#js-to_top").click(function() {
    $("body,html").animate({scrollTop:0},800);
  });
});

