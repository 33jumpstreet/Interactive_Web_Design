$(document).ready(function(){

  var vid = $("video").get(0);

  $(".load").on("click", function(){
    vid.load();
  });

  $(".play").on("click", function(){
    vid.play();
  });

  $(".pause").on("click", function(){
    vid.pause();
  });
});