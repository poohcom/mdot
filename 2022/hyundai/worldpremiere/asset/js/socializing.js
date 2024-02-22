function socializingInit() {

  const handleLocalData = {
    getData: function (cube) { 
      return JSON.parse(localStorage.getItem(cube));

    },
    setData: function (cube, roomNum) {
      const data = JSON.parse(localStorage.getItem(cube));
      data[roomNum - 1]++;
      console.log(data)

      localStorage.setItem(cube, JSON.stringify(data));
      return JSON.parse(localStorage.getItem(cube));
    }
  }

  function setCubeElem(cubeData) {
    

    function getblockNum(countNum) {
      var result = countNum;
      var boxSize = [1, 10, 20, 40];
      // count 숫자가 어느 영역인지 체크하고 색칠할 박스 갯수 구하기
      var idx = 0;
      while (result - 36 * boxSize[idx] > 0) {
        result = result - 36 * boxSize[idx];
        idx++;
      }
      // 최대 득표수(2556) 넘어갈 때 분기 처리
      if (idx >= boxSize.length) {
        return 36 * boxSize.length;
      }
      return 36 * idx + Math.ceil(result / boxSize[idx]);
    }

    // 큐브채우기
    for (var g = 0; g < 6; g++) {
      $(".graph_area li:nth-child(" + (g + 1) + ") .count").text(cubeData[g]); // 공유수
      for (var i = 0; i < getblockNum(cubeData[g]); i++) {
        $(".graph_area li:nth-child(" + (g + 1) + ") .cube_list li").eq(i).addClass('on'); // 큐브칸수
      }
    }
  }
  cubeBlockInit();

  function cubeBlockInit() {

    // 큐브생성
    for (var i = 0; i < 144; i++) {
      $(".graph_area li .cube_list").append("<li><span></span></li>");
    }

    // 로컬인지 아닌지 구분
    var cubeData = [];
    if (!_gV.isLocalServer) {
      $.ajax({
        async: false,
        method: 'POST',
        url: '/api/getCube',
        dataType: 'json',
        data: {},
        success: function (data, textStatus, jqXHR) {
          if (data.result == '200') {
            const resultData = data.data.map((item) => {
              return item.cnt
            });
            cubeData = resultData; // 데이터값
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {}
      });
    } else {
      cubeData = handleLocalData.getData('myCube');
      if (cubeData === null) {
        localStorage.setItem('myCube', JSON.stringify([1, 1, 1, 1, 1, 1]));
        cubeData = handleLocalData.getData('myCube');
      }
    }
    setCubeElem(cubeData);

  }


  var isShare = false;
  $(".iq6_socializing").on({
    mousemove: function (e) {
      if(!$(".pointer").length > 0) return false;
      var pointSize = $(".pointer").width() / 2;
      $(".pointer").stop().fadeIn(300);
      gsap.to($(".pointer"), {
        left: e.pageX - pointSize,
        top: e.pageY - pointSize,
        duration: 0.3
      });
    },
    mouseleave: function () {
      $(".pointer").stop().fadeOut(300);
    }
  });
  $(".socializing_area .graph_area li a").on({
    mouseenter: function (e) {
      $('.pointer').addClass("on");
    },
    mouseleave: function () {
      $('.pointer').removeClass("on");
    },
    mousedown: function () {
      $('.pointer').css("transform:scale(1.2)");
    },
    mouseup: function () {
      $('.pointer').css("transform:scale(1)");
    },
    click: function (e) {
      if (isShare) return false;
      isShare = true;
      var roomName = $(this).parent().attr("class");
      var roomNum = $(this).parent().index() + 1;
      var count = Number($(this).parent().find(".count").text());
      count = count + 1;
      $(this).parent().find(".count").text(count); //숫자증가   
      $(this).parent().find(".click_motion").addClass("on");
      $("#popup_share .share_img img").attr("src", "/worldpremiere/asset/img/socializing/" + ioniqApp.data.lang + "/share_" + roomName + ".jpg");       
      setTimeout(function(){
        togglePopup('#popup_share'); //모션후 팝업띄우기
        snsShare(roomName);
        $(".click_motion").removeClass("on");
        isShare = false;
      }, 2000);


      const cubeDataSet = {};

      cubeDataSet['lang'] = ioniqApp.data.lang;
      cubeDataSet['device'] = ioniqApp.data.device === 'P' ? 'PC' : 'MO';
      cubeDataSet['country'] = ioniqApp.data.lang;
      cubeDataSet['room'] = roomNum;

      setCubeData(cubeDataSet);

      function setCubeData(cubeDataSet) {
        let cubeData = [];
        if (!_gV.isLocalServer) {
          $.ajax({
            async: false,
            method: 'POST',
            url: '/api/setCube',
            dataType: 'json',
            data: cubeDataSet,
            success: function (data, textStatus, jqXHR) {
              if (data.result == '200') {
                const resultData = data.data.map((item) => {
                  return item.cnt
                });
                cubeData = resultData; // 데이터값
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              //alert('시스템 이상으로 잠시 후 다시 이용해주세요.');
            }
          });

        } else {
          cubeData = handleLocalData.setData('myCube', roomNum);
        }
        setCubeElem(cubeData);
      }
    },
  });

  // SNS공유버튼
  function snsShare(roomName){
    var shareUrl = _gV.mainUrl + "/worldpremiere/" + ioniqApp.data.lang + "/socializing/sns_" + roomName + ".html";
    var twitterText = "";
    if(roomName == "fundriving") twitterText = "IONIQ 6 Fun Driving Room에서 주행 본능을 깨워보세요";
    if(roomName == "stressfreedriving") twitterText = "IONIQ 6 Stress-Free Driving Room에서 여행 감성을 깨워보세요";
    if(roomName == "work") twitterText = "IONIQ 6 Work Room에서 업무 센스를 깨워보세요";
    if(roomName == "socializing") twitterText = "IONIQ 6 Socializing Room에서 셀럽본능을 깨워보세요";
    if(roomName == "healing") twitterText = "IONIQ 6 Healing Room에서 내면의 힘을 깨워보세요";
    if(roomName == "entertainment") twitterText = "IONIQ 6 Entertainment Room에서 덕후 본능을 깨워보세요";
    
    $("#popup_share #share_fb").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + shareUrl); //페이스북공유
    $("#popup_share #share_tw").attr("href", "http://twitter.com/share?url=" + shareUrl + "&text=" + twitterText); //트위터공유
    $("#popup_share #download_img").attr("href", "/worldpremiere/asset/img/socializing/" + ioniqApp.data.lang + "/img_" + roomName + ".jpg"); //이미지다운로드
  }

  // 공유팝업
  $("#popup_share .btn_area a").on("click", function(){
    setTimeout(function(){
      if(successData.thisRoom() === true) {
        togglePopup('#popup_share', '#popup_finish'); // 다시하기팝업
      } else {
        togglePopup('#popup_share', '#popup_end'); // 큐브획득팝업
      }
    }, 1000);
  }); 
}

$(function () {

  socializingInit();
});