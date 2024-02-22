var ioniqApp;
var pScale = 1;//팝업 리사이징
var IoniqApp = function() {

	var _this = this;

	this.data = {};					//DB등록용 

	function init() {
		_this.data.lang = (location.href.indexOf('/kr/') > 0)? 'kr': ((location.href.indexOf('/us/') > 0)? 'us':(location.href.indexOf('/eu/') > 0)? 'eu':'en')
		_this.data.device = (location.href.indexOf('/m/') > 0)? 'M': 'P';
		_this.data.site_gubun = (_gV.loc.indexOf('designunveil') > 0)? 'unveil':'wp';
		_this.data.missions = FFUtil.getCookie('_ioniq6_missions') || '000000';
		_this.data._gdpr_settings = FFUtil.getCookie('_gdpr_settings')? JSON.parse(FFUtil.getCookie('_gdpr_settings')) : 'none';
	}
	init();

}//app [E]

ioniqApp = new IoniqApp();

$(function () {
	
	/************************* */
	//1. 모바일 이동
	console.log('location.search', ioniqApp.data, FFUtil.getCookie('eu-agree'), location.search, _gV.loc, FFUtil.isMobile(), _gV.isLocalServer);
	if (!_gV.isLocalServer) {
		if (FFUtil.isMobile()) {
			if (location.href.indexOf("/m/") < 0) location.href = location.href.replace('/'+ioniqApp.data.lang+'/', '/'+ioniqApp.data.lang+'/m/');
		}
	}

	$(window).resize(wnd_resizing);
	wnd_resizing(); //리사이징	
	
	function wnd_resizing() {
		try{
			var windowW = $(window).width();
			pScale = windowW/640;
			//$('#event_popup2').css({ 'transform-origin':'center 0', 'transform':'scale(' + pScale + ')', '-webkit-transform-origin':'center 0', '-webkit-transform':'scale(' + pScale + ')'});
		}catch(e){}
	}
});
