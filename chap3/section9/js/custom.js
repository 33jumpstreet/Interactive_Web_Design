$(document).ready(function(){

  // 페이지 로딩 시 제일 상단으로 스크롤 이동
  $("body, html").stop().animate({"scrollTop":0},1500,"swing");

  $(window).on("scroll", function(){

    // 변수 scroll에 현재 화면을 스크롤한 거리의 수치를 저장
    var scroll = $(this).scrollTop();

    // 스크롤한 수치 값을 h1 출력
    // $("h1").text(scroll);

    // 5개 박스의 현재 z축 위치 값에서 현재 스크롤한 거리만큼을 더한 뒤 다시 대입
    // $("section>article").eq(0).css({"transform":"translateZ(" + scroll  + "px)"});
    // $("section>article").eq(1).css({"transform":"translateZ(" + parseInt(-5000+scroll) + "px"});
    // $("section>article").eq(2).css({"transform":"translateZ(" + parseInt(-10000+scroll)  + "px"});
    // $("section>article").eq(3).css({"transform":"translateZ(" + parseInt(-15000+scroll)  + "px"});
    // $("section>article").eq(4).css({"transform":"translateZ(" + parseInt(-20000+scroll)  + "px"});
    
    //  간결화1)
    // for(var i=0; i<5; i++){
    //   $("section>srticle").eq(i).css({"transform":"translateZ(" + parseInt((-5000*i)+scroll)  + "px)"});
    // }

    // 스크롤한 거리에 따라 스크롤 내비게이션과 해당 박스 활성화 
    // if(scroll>=0 && scroll<5000){
    //   $(".scrollNavi li").removeClass();
    //   $(".scrollNavi li").eq(0).addClass("on");
    //   $("article").removeClass();
    //   $("article").eq(0).addClass("on");
    // }
    // if(scroll>=5000 && scroll<10000){
    //   $(".scrollNavi li").removeClass();
    //   $(".scrollNavi li").eq(1).addClass("on");
    //   $("article").removeClass();
    //   $("article").eq(1).addClass("on");
    // }
    // if(scroll>=10000 && scroll<15000){
    //   $(".scrollNavi li").removeClass();
    //   $(".scrollNavi li").eq(2).addClass("on");
    //   $("article").removeClass();
    //   $("article").eq(2).addClass("on");
    // }
    // if(scroll>=15000 && scroll<20000){
    //   $(".scrollNavi li").removeClass();
    //   $(".scrollNavi li").eq(3).addClass("on");
    //   $("article").removeClass();
    //   $("article").eq(3).addClass("on");
    // }

    // 간결화2) 1과 합쳐서
    for(var i=0; i<5; i++){
      // 스크롤값과 박스의 z축 연동
      $("Section>article").eq(i).css({"transform":"translateZ(" +parseInt((-5000*i)+scroll) + "px)"});
      // 특정 스크롤 구간에서 스크롤 네비게이션과 박스 활성화
      if(scroll>=i*5000 && scroll<(i+1)*5000){
        $(".scrollNavi li").removeClass();
        $(".scrollNavi li").eq(i).addClass("on");
        $("article").removeClass();
        $("article").eq(i).addClass("on");
      };
    };
  });

      // 스크롤 네비게이션 클릭 시, 스크롤 이동
    // $(".scroll li").eq(0).on("click", function(){
    //   $("body, html").stop().animate({"scrollTop":0});
    // });
    // $(".scroll li").eq(1).on("click", function(){
    //   $("body, html").stop().animate({"scrollTop":5000});
    // });
    // $(".scroll li").eq(2).on("click", function(){
    //   $("body, html").stop().animate({"scrollTop":10000});
    // });
    // $(".scroll li").eq(3).on("click", function(){
    //   $("body, html").stop().animate({"scrollTop":15000});
    // });
    // $(".scroll li").eq(4).on("click", function(){
    //   $("body, html").stop().animate({"scrollTop":20000});
    // });
    
    //  간결화 3) 바로 위의 코드
    $(".scrollNavi li").on("click", function(){
      var a = $(this).index();
      $("body, html").stop().animate({"scrollTop":5000*a},1500,"swing");
    });

    // 화면에서 마우스 무브 시 박스 안의 콘텐츠 움직이기
    $("body").on("mousemove", function(){
      var posX = e.pageX/100;
      var posY = e.pageY/150;

      $("obj11").css({"left": -270-posX, "bottom":-100-posY});
      $("obj12").css({"right": -593+posX, "top":-85+posY});
      $("obj13").css({"left": -100+posX, "bottom":20+posY});

      $("obj21").css({"right": -710-posX, "bottom":-420-posY});
      $("obj22").css({"right": -50+posX, "bottom":-100+posY});

      $("obj31").css({"right": 110-posX, "bottom":70-posY});
      $("obj32").css({"left": 100-posX, "bottom":-160+posY});

      $("obj41").css({"left": 350+posX, "bottom":-150-posY});
      $("obj42").css({"right": 167+posX, "top":-255-posY});
      $("obj43").css({"right": -100+posX, "bottom":-120+posY});

      $("obj51").css({"left": -100-posX, "bottom":-290-posY});
      $("obj52").css({"right": 30+posX, "top":170-posY});
      $("obj53").css({"left": -30+posX, "bottom":0-posY});



    });

});















