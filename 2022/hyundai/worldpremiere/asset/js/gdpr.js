function gdprInit() {

  const handleGdprData = {
    setData: function (preference) {
      const date = new Date().toISOString();
      const data = {
        'date': date,
        'setCookie': 'Y',
        'preference': preference
      }
      FFUtil.setCookie("_gdpr_settings", JSON.stringify(data) + ";path=/", 365)

    },
    getData: function (cookieConsented) {
      if (cookieConsented === false) {
        return {
          "advertising_marketing": "true",
          "analytics": "true",
          "functional": "true"
        }
      } else {
        return ioniqApp.data._gdpr_settings.preference
      }
    },
  }

  const handleBanner = {
    showBanner: function () {
      showContent('gdpr_banner', 'gdpr_banner_wrap')
    },
    hideBanner: function () {
      //console.log('hide banner')
      $('.gdpr-banner').hide();
    }
  }



  // 쿠키 설정 불러오기
  let cookieConsented = ioniqApp.data._gdpr_settings === 'none' ? false : true;
  let preference = handleGdprData.getData(cookieConsented);

  //console.log(cookieConsented, preference);
  //console.log(handleGdprData.getData(cookieConsented[0]));

  // 배너 보이기
  if (cookieConsented === true) {
    handleBanner.hideBanner();
  } else {
    handleBanner.showBanner();
  }

  // add event
  $('body').on('click', '.toggle-gdpr-popup', function () {
    // gdpr 팝업 여는 버튼에 toggle-gdpr-popup 클래스 추가해서 사용
    console.log('click')
    console.log($('.media-dialog'));
          $('.media-dialog').removeClass('on');
    toggleGdpr('#popup_gdpr');
  });

  // 쿠키 설정 배너 add event
  $('.gdpr-banner').on('click', '#btn_all_accept, .btn_banner_close', function () {
    if ($(this).is("#btn_all_accept")) {
      savePreference();
    }
    hideBanner();
  })

  $('.gdpr-banner').on('click', '.btn_banner_close', hideBanner);



  function updatePreference() {
    try {
      //preference.length = 0;
      const switchList = document.querySelectorAll('#prc-tp-cat-container .breeze-switch');
      //console.log(switchList);

      for (let i = 0; i < 3; i++) {
        preference[switchList[i].attributes['id'].nodeValue] = switchList[i].attributes['aria-checked'].nodeValue;
      }
      //console.log(preference);
    } catch {}
  }

  function savePreference() {
    // 변경 사항 저장
    updatePreference();

    handleGdprData.setData(preference);

    // 배너 및 팝업 닫기
    hideBanner();
    if ($('#popup_gdpr').is(":visible")) {
      toggleGdpr('#popup_gdpr');
    }
  }


  // 하단 쿠키 배너 닫기
  function hideBanner() {
    $('.gdpr-banner').hide();
  }

  // 레이어 팝업 열고 닫기	toggleGdpr(#id)
  function toggleGdpr(id) {
    if ($(id).is(":visible")) {
      // full page 스크롤 막기
      if (FFUtil.isMobile() === true) {
        $('body').css('overflow', 'visible');
      } else { 
        try {
          $.fn.fullpage.setMouseWheelScrolling(true);
          $.fn.fullpage.setAllowScrolling(true);
        } catch {}
      }
      closeGdpr(id);
    } else {
      if (FFUtil.isMobile() === true) {
        $('body').css('overflow', 'hidden');
      } else { 
        try {
          $.fn.fullpage.setMouseWheelScrolling(false);
          $.fn.fullpage.setAllowScrolling(false);
          
        } catch {}
      }
      

      openGdpr(id);
    }

    function addDim() {
      // dim 추가
      if ($('#dimLayer').length >= 1) {
        return;
      }
      const dimLayer = "<div id='dimLayer'></div>";
      $("body").append(dimLayer);
    }

    function openGdpr(id) {
      addDim();
      $(id).fadeIn("fast").scrollTop(0).addClass("on");
      $("body").addClass('popup-open');

      $('.gdpr-banner').addClass('hide'); // 배너 숨기기
      showContent('tab_index'); // 처음 화면 불러오기
      $(id).on('click', '.btn-accept', savePreference);

      const initToggle = function () {
        const allowMaxNum = 3; // 최대 허용 갯수
        let allowNum = allowMaxNum;

        const updateByNumber = function () {
          //console.log(allowNum);
          if (allowNum === 0) {
            $('.breeze-switch-slider').removeClass('slideron');
            $('#prc-tp-cat-all-toggle .breeze-switch-slider').removeClass('slideron');
            $('#prc-tp-cat-all-toggle').attr('aria-checked', 'false');
            $('.breeze-switch').attr('aria-checked', 'false');
          }

          if (allowNum === 1) {
            $('#prc-tp-cat-all-toggle .breeze-switch-slider').addClass('slideron');
            $('#prc-tp-cat-all-toggle').attr('aria-checked', 'true');
          }

          if (allowNum === allowMaxNum) {
            $('.breeze-switch-slider').addClass('slideron');
            $('.breeze-switch').attr('aria-checked', 'true');
          }

          $('#prc-tp-cat-all-toggle-label .number').text(allowNum);
        }
        const clickSwitchHandler = function () {
          const $this = $(this);
          const $parent = $this.parent();
          const isChecked = $parent.attr('aria-checked') === 'false';
          const changeString = $parent.attr('aria-checked') === 'false' ? 'true' : 'false';
          const allToggleBtnClicked = $this.is('#prc-tp-cat-all-toggle .breeze-switch-slider');

          if (allToggleBtnClicked) { // 전체 토글 버튼 클릭했을 때
            allowNum = isChecked ? allowMaxNum : 0;
          } else { // 각각
            allowNum = isChecked ? allowNum + 1 : allowNum - 1;
            $parent.attr('aria-checked', changeString);
          }
          $this.toggleClass('slideron');

          // 숫자 따라 업데이트
          updateByNumber(allowNum);
        }


        // 쿠키 정보 읽어와서 토글 버튼 셋팅하기
        const switchList = document.querySelectorAll('#prc-tp-cat-container .breeze-switch');
        switchList.forEach(item => {
          item.attributes['aria-checked'].nodeValue = preference[item.attributes['id'].nodeValue];
          if (preference[item.attributes['id'].nodeValue] === 'false') {
            item.querySelector('.breeze-switch-slider').classList.remove('slideron');
            allowNum--;
          }
        });
        // 토글버튼 이벤트 add
        $(id).on('click', '.breeze-switch-slider', clickSwitchHandler);
        updateByNumber(allowNum);

      }
      initToggle();
    }

    function closeGdpr(id) {
      $(id).off('click');
      $(id).fadeOut("fast", function () {
        $(this).removeClass("on");
        $('body').removeClass('popup-open');
        $('.gdpr-banner').removeClass('hide');
      });
    }
  }

  // 유튜브 쿠키 막았을 때 문구 변경
  blockYoutube(cookieConsented, preference);

  function blockYoutube(cookieConsented, preference) {
    const youtubeBox = document.querySelectorAll('.gdpr_youtube_box');
    if (youtubeBox.length === 0) {
      return;
    }

    if (cookieConsented === true && preference.functional === 'false') {
      let text = '';
      if (ioniqApp.data.lang === 'kr') {
        text = `비디오를 보시려면 <a href="javascript:;" style="color:rgb(0, 174, 240);"class="toggle-gdpr-popup">쿠키 허용</a>을 해주세요`;
      } else {
        text = `Please accept <a href="javascript:;" style="color:rgb(0, 174, 240);"class="toggle-gdpr-popup">publisher cookies</a> to watch the video`
      }
      for (let i = 0; i < youtubeBox.length; i++) {
        youtubeBox[i].innerHTML = `<div style="display: block; text-align:center; background: rgb(246, 243, 242); padding: 0px;">${text}</div>`;
      }
      $(".gdpr_youtube_box").addClass("remove");
    } else { 

      const youtubeIframeList = document.querySelectorAll('.gdpr_youtube_box iframe');
      console.log(youtubeIframeList)
      if (youtubeIframeList.length > 0) { 
        youtubeIframeList.forEach(iframe => {
          iframe.attributes['src'].value = iframe.attributes['data-src'].value
        });
      }
      

      
    }
  }

  // go to privacy policy

  // go to cookie policy
  //$('.link_cookies_policy').attr('href', 'test');
  
}

// show content
function showContent(id, wrapId) {
  wrapId = wrapId ? wrapId : 'template_content_wrap'
  const template = document.querySelector("#" + id).content.cloneNode(true);
  const contentWrap = document.querySelector("#" + wrapId);
  const content = document.querySelector('.content');
  if (content) {
    contentWrap.removeChild(content);
  }
  contentWrap.appendChild(template);
}