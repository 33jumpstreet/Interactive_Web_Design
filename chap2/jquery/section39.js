$(document).ready(function(){

  var ab = setInterval(function(){

    var now = new Date();
    var hr = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    $("span").eq(0).text(hr);
    $("span").eq(1).text(min);
    $("span").eq(2).text(sec);
  });

});