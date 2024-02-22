
var url = location.href;
var iq6_util = {};

/* Edge from IE */
var directUrl = location.href;
if(navigator.userAgent.indexOf("Trident") > 0){ 
    window.location = 'microsoft-edge:' + directUrl;
    setTimeout(function(){
        window.location = "https://support.microsoft.com/ko-kr/topic/%EC%9D%B4-%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8%EB%8A%94-microsoft-edge%EC%97%90%EC%84%9C-%EB%8D%94-%EC%9E%98-%EC%9E%91%EB%8F%99%ED%95%A9%EB%8B%88%EB%8B%A4-160fa918-d581-4932-9e4e-1075c4713595?ui=ko-kr&rs=ko-kr&ad=kr";
    },100);
} else if(/MSIE \d |Trident.*rv:/.test(navigator.userAgent)){
    window.location = 'microsoft-edge:' + directUrl;
    setTimeout(function(){
        window.location = "https://support.microsoft.com/ko-kr/topic/%EC%9D%B4-%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8%EB%8A%94-microsoft-edge%EC%97%90%EC%84%9C-%EB%8D%94-%EC%9E%98-%EC%9E%91%EB%8F%99%ED%95%A9%EB%8B%88%EB%8B%A4-160fa918-d581-4932-9e4e-1075c4713595?ui=ko-kr&rs=ko-kr&ad=kr";
    },100);
}

$(function(){
  // iq6_util.redirectUrl();
  commonInit();
});

function commonInit(){
  /* sound control */
  $(".sound_control .btn_sound").on("click", function(){
    $(this).parent().toggleClass("on");
    // intro
    if($(".sound_control").hasClass("intro")) {      
      if($(this).parent().hasClass("on")) $("#introVideo")[0].muted = false;
      else $("#introVideo")[0].muted = true;
    // etc
    } else {
      if($(this).parent().hasClass("on")) $(".sound_control audio")[0].play();   
      else $(".sound_control audio")[0].pause();            
    }
  }); 

  if(url.search("/configurator") > 0) {
  /* Facebook */
  $('body').on('click', '#btnFacebook', function () {
    snsShare("fb");      
  })
  /* Twitter */
  $('body').on('click', '#btnTwitter', function () {
    snsShare("tw");
  })
  /* Download */
  $('body').on('click', '#btnDownload', function () {
    var imgUrl = $("#screenshot").attr("src");
    var link = document.createElement('a');
    link.href = imgUrl;
    link.download = 'img';
    link.click();
  })    

  function snsShare(sns) {
    FFUtil.ajaxCall('/api/capture', true, {base64:$('#screenshot').attr('src'), lang:ioniqApp.data.lang}, 
    function(rtn){
      console.log(rtn);
      /**TODO : 영문트윗메세지 수정해야함 */
      var tw_text = (ioniqApp.data.lang == 'kr')? "IONIQ 6를 VR/AR로 직접 체험하고, 나만의 IONIQ 6를 만들어보세요.":"IONIQ 6 Digital Studio";
      if(sns == "fb") window.open('https://www.facebook.com/sharer/sharer.php?u='+rtn.share_url);
      if(sns == "tw") window.open('http://twitter.com/share?text='+ tw_text +'&url='+rtn.share_url);      
    }, function(err){
      console.log(err)
    })
  }
  }
}

iq6_util.redirectUrl = function(){
  if (FFUtil.isMobile()) {
    if (location.href.indexOf("/m/") < 0) location.href = "./m/" + location.pathname.split("/")[location.pathname.split("/").length - 1] + location.search + location.hash;
  } else {
    if (location.href.indexOf("/m/") > -1) location.href = "../" + location.pathname.split("/")[location.pathname.split("/").length - 1] + location.search + location.hash;
  }
}

// 레이어 팝업
function togglePopup(id) {
    // 팝업 열고 닫기	togglePopup(#id)
    // 팝업 창 전환	togglePopup(#current_id, #open_id)
    if (arguments.length < 2) {
        if ($(id).is(":visible")) {
            $(id).fadeOut("fast").removeClass("on");
        } else {
            $(id).fadeIn("fast").addClass("on");
        }
    } else {
        var pop1 = arguments[0];
        var pop2 = arguments[1];
        if ($(pop1).is(":visible")) {
            $(pop1).fadeOut("fast").removeClass("on");
            $(pop2).fadeIn("fast").addClass("on");
        }
    }
}