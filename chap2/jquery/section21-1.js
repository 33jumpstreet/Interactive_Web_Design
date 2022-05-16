$(document).ready(function(){

  // div에 마우스 커서를 올렸을 때
  $("div").on("mouseenter", function(){
    $("div").text("box1에 마우스를 올렸습니다.");
    $("div").animate({"width":"500px", "height":"500px"}, 1000, "easeOutBounce");
  });

  // div에서 마우스 커서가 벗어났을 때
  $("div").on("mouseleave", function(){
    $("div").text("box1에 마우스가 벗어났습니다.");
    $("div").animate({"width":"300px", "height":"300px"}, 1000, "easeOutBounce");
  });
});
