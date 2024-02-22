$(function(){			
  mainInit();
});

function mainInit(){
  var idx = 0;
  var interval;

  /* 첫방문시 팝업띄우기 */
  if(!FFUtil.getCookie('_ioniq6_intro') > 0) togglePopup('#popup_main_video');
  FFUtil.setCookie("_ioniq6_intro", 1, 365);

  $(".iq6_main > ul > li").on({
    mouseenter: function(){
      $(".iq6_main .title_area").stop().fadeOut(); // 중앙타이틀

      // 컷초기화
      $(".cut_list").hide();
      $(".iq6_main > ul > li").removeClass("on");

      //컷노출 및 재생
      $(this).find(".cut_list").show()
      $(this).addClass("on");
      $(".cut_list li").hide();
      $(this).find(".cut_list li").eq(0).show();
      idx = 1;
      interval = setInterval(loop, 1000);
      console.log("over");
    },
    mouseleave: function(){
      $(".iq6_main .title_area").stop().fadeIn(); // 중앙타이틀
      // 컷초기화
      $(".cut_list").hide()
      $(this).removeClass("on");
      clearInterval(interval);
      console.log("leave");
    }
  });

  $(".btn_fiilm").on("click", function(){    
    togglePopup('#popup_main_video');
    player_main.playVideo();
  });
  $("#popup_main_video .btn_close").on("click", function(){
    player_main.pauseVideo();
  });

  function loop(){
    var slideNum = $(".iq6_main > ul > li.on .cut_list li").length; //각슬라이드안 이미지갯수
    if(idx >= slideNum) idx = 0;    
    console.log(idx);
    $(".cut_list li").hide();
    $(".iq6_main > ul > li.on .cut_list li").eq(idx).show();
    idx++;	
  } 
}		