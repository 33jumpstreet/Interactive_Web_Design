$(document).ready(function(){
  $("button").on("click", function(){
    var num = $("input").val();

    if (num == "") {
      alert("아무런 정보도 입력하지 않으셨습니다.")
    } else if (num >= 19) {
      alert("당신은 성인입니다.");
    } else if (num < 19) {
      alert("당신은 미성년자입니다.");
    } else {
      alert("숫자만 입력해 주세요");
    }
  });
});