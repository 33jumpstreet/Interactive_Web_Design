$(document).ready(function(){

  $("li").on("click", function(){
    var txt = $(this).text();
    $("div").text(txt);
    $("div").css({"background":txt});
  });

});