$(document).ready(function(){
  // 클릭 했을 때
  $(".box1").on("click", function(){
    $("p").text("box1을 클릭했습니다.");
  });

  // 선택 영역에 마우스를 올렸을 때
  $(".box1").on("mouseenter", function(){
    $("p").text("box1에 마우스를 올렸습니다.");
  });

  // 선택 영역에서 마우스가 벗어날 을 때
  $(".box1").on("mouseleave", function(){
    $("p").text("box1에 마우스가 벗어났습니다.");
  });

  // 선택 영역에서 마우스가 움직일 때
  $(".box2").on("mousemove", function(){
    $("p").text("box2 위에서 마우스가 움직입니다.");
  });

  // 브라우저를 스크롤 했을 때
  $(window).on("scroll", function(){
    $("p").text("화면을 스크롤합니다.");
  });

  // 브라우저를 리사이즈 했을 때
  $(window).on("resize", function(){
    $("p").text("화면을 리사이즈합니다.");
  });
});