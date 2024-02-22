function socialIntroInit() {
  const introMission = {
    consent: false,
    charge: false,
    update: false,
  };
  const handleContent = {
    showContent: (id, wrapId) => {
      wrapId = wrapId ? wrapId : 'popup_intro'
      const template = document.querySelector("#" + id).content.cloneNode(true);
      const contentWrap = document.querySelector("#" + wrapId);
      const content = contentWrap.querySelector('.intro_content');
      if (content) {
        contentWrap.removeChild(content);
      }
      contentWrap.appendChild(template);
    }
  }

  let slider;
  $('body').on('click', '.show-content', function () {
    // 팝업O
    const dataId = this.attributes['data-template'].value;
    if (this.attributes['data-wrapper'] === undefined) {
      handleContent.showContent(dataId);
      if (slider) { 
        slider.destroy(true);
      }     

      // 토글 팝업
      if($('#popup_intro').is(":hidden")) {
        togglePopup('#popup_intro');   
        $("#social_intro_area .intro_content").addClass("back");
      }
      $(`button[data-template="${dataId}"]`).parent().addClass('on');
      introMission[dataId] = true;

      if($(".swiper-slide").length > 1) {
        slider = new Swiper(".swiper-container", {
          loop: true,
          navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
          },        
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          on: {
            slideChangeTransitionEnd: function(e){
              $("#popup_intro .img_title dl").hide();
              $("#popup_intro .img_title dl").eq(this.realIndex).show();
              console.log(this.realIndex);
            }
          },          
        });
      }
    } else {
      // 팝업X
      handleContent.showContent(dataId, 'social_intro_area');
    }

    
  });

  let downTarget = '';
  $('body').on('mousedown', '#popup_intro', function (e) {
    if (e.target.id !== 'popup_intro') { 
      return;
    }
    downTarget = e.target.id;
  });

  $('body').on('mouseup', '#popup_intro', function (e) {
    if (downTarget === e.target.id && e.target.id === 'popup_intro') {
      downTarget = '';     
      togglePopup('#popup_intro');
      $("#social_intro_area .intro_content").removeClass("back");
    }

    // mission 값 순회 후 end 확인
    const isComplete = (introMission) => {
      for (let key in introMission) {
        const value = introMission[key]
        if (value === false) {
          return false;
        }
      }
      return true;
    }      
    if (isComplete(introMission) === true) {
      handleContent.showContent('end', 'social_intro_area');
    }

  });

}

$(function () {
  socialIntroInit();
});