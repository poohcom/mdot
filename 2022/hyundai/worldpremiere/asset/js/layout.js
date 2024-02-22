var url = location.href;

/* success 정보 읽어 오기 */
const roomList = ['fundriving', 'stressfreedriving', 'work', 'socializing', 'healing', 'entertainment'];

const handleSuccessData = {
  getData: function () {
    const arr = [];
    for (let i = 0; i < 6; i++) {
      if (ioniqApp.data.missions[i] === '1') {
        arr.push(i);
      }
    }
    return arr
  },
  setData: function (idx) {
    let data = ioniqApp.data.missions;
    data = data.substring(0, idx) + '1' + data.substring(idx + 1);
    ioniqApp.data.missions = data;
    FFUtil.setCookie("_ioniq6_missions", data + ";path=/", 365)
  }
};
const successData = {
  thisRoom: function () { 
    const roomData = handleSuccessData.getData();
    const roomIdx = roomList.indexOf(getRoomName(location.href));
    if (roomData.indexOf(roomIdx) > -1) { 
      return true;
    }
    return false;
  },
  allRoom: function () { 
    const roomData = handleSuccessData.getData();
    if (roomData.indexOf('0') > -1) { 
      return true;
    }
    return false;
  }
}

const getRoomName = function(url) { 
  for(var r=0; r<roomList.length; r++) {
    if (url.search(roomList[r]) > 0) {
      return roomList[r]
    }
  }
}


$(function () {
  // 큐브 획득 클래스 on-success-button addevt
  $('body').on('click', '.on-success-button', function () {
    roomSuccess();
  });
  if (successData.thisRoom() === true) { 
    $('.btn_cube').addClass('on');
  }
});
function roomSuccess() {
  console.log('roomSuccess')
  const roomIdx = roomList.indexOf(getRoomName(location.href));
  handleSuccessData.setData(roomIdx);
  console.log(handleSuccessData.getData());
  const room = [roomIdx];
  checkRoom(room);
}

// 완료한 방 표시하기
function checkRoom(arr) {
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) { 
    try {
      $(".room_menu li:nth-child("+ (arr[i] + 1) +") a").addClass("succes"); // ROOM CUBE HEADER
      $(".cube_check_list li:nth-child("+ (arr[i] + 1) +")").addClass("on"); // ROOM CUBE FOOTER
    }catch(error) {}    
  }
}

function loadLayout() {
  var url = location.href;
  var lang = '';
  if(url.search("/kr/") > 0) lang = "kr";
  if(url.search("/en/") > 0) lang = "en";
  if(url.search("/eu/") > 0) lang = "eu";
  if(url.search("/us/") > 0) lang = "us";

  // 큐브버튼노출
  var room = ['fundriving', 'stressfreedriving', 'work', 'socializing', 'healing', 'entertainment']; // 룸페이지만
  // GNB비노출
  var room_main = ['fundriving', 'stressfreedriving', 'work', 'entertainment']; // 액티비티만 
  
  /* [S] Load */
  var $gdpr = $("<div id='gdpr'></div>");
  var gdprFilePath = url.indexOf("/kr/") > -1 ? '/worldpremiere/kr/gdpr.html' : '/worldpremiere/en/gdpr.html';
  $gdpr.load(gdprFilePath, function () {
    gdprInit();
  });
  

  var $header = $("<div id='iq6_header'></div>");
  var urlMo = '';
  if(url.search("/m/") > 0) urlMo = "/m";
  $header.load("/worldpremiere/" + lang + urlMo + "/header.html", function(){    
    header_init();
  });   
  var $footer = $("<div id='iq6_footer'></div>");
  $footer.load("/worldpremiere/" + lang + urlMo + "/footer.html", function(){    
    footer_init();
  }); 
  var $popup = $("<div></div>");
  $popup.load("/worldpremiere/" + lang + "/popup.html", function(){
    popup_init();
  });
  $("body").append($gdpr);
  $("body").prepend($header);  
  $("body").append($footer);  
  $("body").append($popup);  
  /* [E] Load */

  /* header interact */
  function header_init() {
    checkRoom(handleSuccessData.getData()); //완료룸 활성

    // 메인액티비티 GNB숨김
    if(url.search(".html") > 0) {
      for(var rm of room_main){
        if(url.search(rm) > 0) {
          $(".nav_area").hide();
        }    
      }    
    }

    $("#iq6_header .btn_menu").on("click", function(){
      $("#iq6_header .nav_area").toggleClass("on");
      if(!$(".dimmed").length > 0) $("body").prepend("<div class='dimmed'></div>");
      else $(".dimmed").remove();
    });

    // GNB메뉴활성표시
    if(url.search("main.html") > 0) $(".main_menu a").addClass("on");
    if(url.search("fundriving") > 0) $(".room_menu li:nth-child(1) a").addClass("on");
    if(url.search("stressfreedriving") > 0) $(".room_menu li:nth-child(2) a").addClass("on");
    if(url.search("work") > 0) $(".room_menu li:nth-child(3) a").addClass("on");
    if(url.search("socializing") > 0) $(".room_menu li:nth-child(4) a").addClass("on");
    if(url.search("healing") > 0) $(".room_menu li:nth-child(5) a").addClass("on");
    if(url.search("entertainment") > 0) $(".room_menu li:nth-child(6) a").addClass("on");
  }
  
  /* footer interact */
  function footer_init(){
    checkRoom(handleSuccessData.getData()); //완료룸 활성

    // 룸페이지 버튼노출
    if(url.search(".html") < 0) {
      for(var r of room) {
        if(url.search(r) > 0) {
          $("#iq6_footer .btn_cube").show();
          cubeImgShow();
        }
      }      
    }
    $("#iq6_footer .btn_cube").on("click", function(){
      togglePopup('#popup_cube_state');
    });
    $("#iq6_footer .btn_share > a").on("click", function(){
      $("#iq6_footer .share_list").toggle();
    });
  } 
  // 페이지별 버튼이미지
  function cubeImgShow(){
    for (var i = 0; i < room.length; i++) {
      if(url.search(room[i]) > 0) {
        $("#iq6_footer .btn_cube img").attr("src","/worldpremiere/asset/img/layout/btn_mycube_" + room[i] + ".png");
        $("#iq6_footer .btn_cube img").show();
      }      
    }
  }

  /* popup interact */
  function popup_init(){
    for(var r=0; r<room.length; r++) {
      if(url.search(room[r]) > 0) {
        $("#popup_end .popup_content").addClass(room[r]);
      }
    }
    $("#popup_end .popup_content .btn_cube").on("click", function(){               
      $(this).addClass("on");      
      setTimeout(function(){
          // if(directUrl.search("socializing") > 0) alert('Socializing Room 픽셀큐브를 획득하였습니다.\n6개의 공간을 모두 체험하고 이벤트에 응모하세요');
          // if(directUrl.search("healing") > 0) alert('Healing Room 픽셀큐브를 획득하였습니다.\n6개의 공간을 모두 체험하고 이벤트에 응모하세요');
          togglePopup('#popup_end', '#popup_finish');
      }, 2000);
    });
  }
}

$(function(){
  loadLayout();
});


