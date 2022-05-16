$(document).ready(function(){

  $("li").on("click", function(){
    var i = $(this).index();
    alert(i);
  });

});