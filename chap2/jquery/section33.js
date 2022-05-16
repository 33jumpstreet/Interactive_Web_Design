$(document).ready(function(){

  $("button").on("click", function(){
    $("div").html("<h1> 변경 후 입니다.</h1>");
  });

  $("div").on("click", function(){
    var abc = $(this).html();
    alert(abc)
  });

});