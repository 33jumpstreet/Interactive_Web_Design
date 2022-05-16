$(document).ready(function(){

  $("div").on("click", function(){
    var wid = $(this).width(); // 뱐수 wid에 방금 클릭한 div의 넓이 값을 저장
    $(this).height(wid); // div 높이 값을 해당 div의 넓이 값으로 변경
  });

});