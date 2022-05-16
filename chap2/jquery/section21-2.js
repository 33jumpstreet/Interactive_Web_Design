$(document).ready(function(){

  // div에 마우스 커서를 올렸을 때
  $("div").on("mouseenter", function(){
    $("div").stop().animate({"width":"500px", "height":"500px"}, 1000, function(){
      $("div").stop().animate({"background-color":"blue"}, 700);
    });
  });

  // div에서 마우스 커서가 벗어났을 때
  $("div").on("mouseleave", function(){
    $("div").stop().animate({"width":"300px", "height":"300px"}, 1000, function(){
      $("div").stop().animate({"background-color":"red"}, 700);
    });
  });
  
});
