var _gV = {};
_gV.loc = location.href;
_gV.host = document.location.host;
_gV.isRealServer = (_gV.loc.indexOf('ioniq6.hyundai.com') >= 0 )? true:false;
_gV.mainUrl = (_gV.isRealServer)? 'https://ioniq6.hyundai.com':'https://dev-ioniq6.thebreeze.co.kr';
_gV.isLocalServer = (_gV.host.indexOf('ioni') < 0 && _gV.host.indexOf(':8000') < 0)? true:false;

/* layerpopup open */
function openPop(_id, _closeId) {
    var scroll_top = $(document).scrollTop();
    
    if ($(".dimm").is(":hidden")) {
        $(".dimm").fadeIn();
    }
    $("#" + _id).show().css({'top':scroll_top+35});
    $("#" + _closeId).hide();

    //참여하기 클릭시 (비디오일시정지)
    //if(_id == 'event_popup1') $("#kv_video")[0].pause();

}

/* layerpopup close */
function closePop(_id, _openId) {
    try{
         //개인화 영상 닫기시
        if(_id == 'event_popup6'){
            //$('#share_video').get(0).pause();
        }
        loading_reset();
        ioniqApp.process_stop = true;
    } catch(e){}
    $("#" + _id).hide();
    $("#" + _openId).show();

    if(_id == 'event_popup4_1'){
        return;
    }else{
        if (!$("#" + _openId).is(":visible")) {
            $(".dimm").fadeOut();
        }
    }
}