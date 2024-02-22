function healingInit() {
  var videoIdx = 0;
  $(".video_list li.on video")[0].play();
  $(".video_list li a").on({
    mousemove : function(e){    
      if($(this).parent("li").hasClass("on") && $(".pointer").length > 0) {
        var pointSize = $(".pointer").width()/2;
        $(".pointer").stop().fadeIn();
        gsap.to($(".pointer"), {left: e.pageX-pointSize, top:e.pageY-pointSize, duration: 1});
      }
    },
    mouseleave : function(){
      if($(".pointer").length > 0) $(".pointer").stop().fadeOut();
    },
    mouseenter : function(){
      if($(".pointer").length > 0) openVideo(this);
    },
    click : function(){
      if($(this).parent().hasClass("on")) {
        videoIdx = $(this).parent().index()+1;
        $(".iq6_healing .scene1").hide();
        $(".iq6_healing .scene2").show();    
      } else {
        openVideo(this);        
      }
    }
  });

  function openVideo(_this){
    $(".video_list li.on video")[0].pause();
    $(".video_list li").removeClass("on");
    $(_this).parent("li").addClass("on");
    $(_this).parent("li").find("video")[0].play();
  }

  $(".scene2 .btn_confirm").on("click", function(){
    $(".sound_control audio")[0].pause(); 
    togglePopup('#popup_video');	
    if (!FFUtil.isMobile()) $("#popup_video").find("video").attr("src", "/worldpremiere/asset/img/healing/healing_full_video" + videoIdx + ".mp4");
    else $("#popup_video").find("video").attr("src", "/worldpremiere/asset/m/img/healing/healing_full_video" + videoIdx + ".mp4");
    $("#popup_video").find("video")[0].play();    
  });

  $("#popup_video .btn_close").on("click", function(){
    $("#popup_video").find("video")[0].pause();		
    if (successData.thisRoom() === true) {
      togglePopup('#popup_video', '#popup_finish');
    } else { 
      togglePopup('#popup_video', '#popup_end');
    }    
  });
}

$(function(){
  healingInit();
});




