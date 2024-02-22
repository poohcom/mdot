
function initIntro() {
  $("#introVideo")[0].onended = function() {
    $(".btn_skip").addClass("on");
  };  
}

$(function(){
  initIntro();
});


