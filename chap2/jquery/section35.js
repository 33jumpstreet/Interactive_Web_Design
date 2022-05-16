$(document).ready(function(){

  $(window).on("scroll", function(e){
    var ab = $(this).scrollTop();
    $("p").text(ab);
  });

});