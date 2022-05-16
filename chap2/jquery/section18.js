$(document).ready(function(){
  // 첫번째 버튼 클릭 시, 이미지 경로와 해당 이미지의 alt 속성 반환
  $(".btn1").on("click", function(){
    $(".frame img").attr({"src":"../img/pengsu.png", "alt":"펭러뷰"});
  });
  // 두 번째 버튼 클릭 시, 이미지 경로와 해당 이지미의 alt 속성 반환
  $(".btn2").on("click", function(){
    $(".frame img").attr({"src":"../img/happyCat.png", "alt":"고양이"});
  });
});

// $(document)(function(){
//   // 첫번째 버튼 클릭 시, 이미지 경로와 해당 이미지의 alt 속성 반환
//   $(".btn1").click(function(){
//     $(".frame img").attr({"src":"../img/pengsu.png", "alt":"펭러뷰"});
//   });
//   // 두 번째 버튼 클릭 시, 이미지 경로와 해당 이지미의 alt 속성 반환
//   $(".btn2").click(function(){
//     $(".frame img").attr({"src":"../img/happyCat.png", "alt":"고양이"});
//   });
// });

