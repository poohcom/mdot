var FFUtil = {};
var console = window.console || {log: function () {}};    
FFUtil.isInvalidName = function(text) {
    //첫글자를 확인해서 영문이름인지 한글 이름인지 확인한다.
    var firstChar = text.substring(0, 1);
    var lang = /[가-힣]/.test(firstChar) ? 'kor' : 'eng';

    var result = true;
    switch(lang) {
        case 'kor':
            result = /([^(가-힣\x20)])/i.test(text);
            break;
        case 'eng':
            result = /[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/.test(text);
            result = !result;
            break;
        default :
            result = true;
            break;
    }
    return result;
};
FFUtil.isEmpty = function(data) {
    if (data == null || data == undefined || data == "undefined" || data === null || data === undefined || data === "undefined" || data=='' || data==='') {
        return true;
    } else {
        return false;
    }
};
FFUtil.cpn_Chk = function(str){
    rtnVal = false;
    var cpn = str;
    var regexcpn = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
    if( regexcpn.test(cpn) == true ){
        rtnVal = true;
    }
    return rtnVal;
};
FFUtil.isEmail = function(email) {
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (email.match(regExp) != null) {
        return true;
    }
    else {
        return false;
    }
};
FFUtil.special_check = function(str) {
    var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
    if( special_pattern.test(str) == true ){
        return true;
    }else{
        return false;
    }
};
// 한글 영문 띄어쓰기만 가능 True
FFUtil.onlyKorEng_chk = function (str) {
    var onlyEng_pattern = /^[가-힣a-zA-Z\s]+$/;
    if (onlyEng_pattern.test(str) == true) {
        return true;
    } else {
        return false;
    }    
};
FFUtil.onlyKor_chk = function (str) {
    var onlyKor_pattern = /[^가-힣]/;
    if (onlyKor_pattern.test(str) == true) {
        return true;
    } else {
        return false;
    }
};
FFUtil.onlyEng_chk = function (str) {
    var onlyEng_pattern = /^[a-zA-Z\s]+$/;
    if (onlyEng_pattern.test(str) == true) {
        return true;
    } else {
        return false;
    }
};
FFUtil.onlyNum_chk = function (str) {
    var onlyNum_pattern = /[^0-9]/;
    if (onlyNum_pattern.test(str) == true) {
        return true;
    } else {
        return false;
    }
};
FFUtil.isURL_chk = function(str){
    var isURL_pattern = /((?:https?:\/\/))?(www\.)?(m\.facebook|facebook)\.(com|me)\/([\w\-\.]+)/g;
    if (isURL_pattern.test(str) == true) {
        return true;
    } else {
        return false;
    }
}
FFUtil.isURL_TWchk = function (str) {
    var isURL_pattern = /((?:https?:\/\/))?(www\.)?(twitter)\.(com)\/([\w\-\.]+)/g;
    if (isURL_pattern.test(str) == true) {
        return true;
    } else {
        return false;
    }
}
//comma
FFUtil.addCommas = function (str) {
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
FFUtil.num_chked = function (str) {
    var onlyNum_pattern = /[0-9]/gi;
    if (onlyNum_pattern.test(str) == true) {
        return true;
    } else {
        return false;
    }
};
//parse query string
FFUtil.getQueryString = function() {
    var a = window.location.search.substr(1).split('&');
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
};
FFUtil.objectifyForm = function(formArray) {//serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++){
      returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
};
FFUtil.isMobile = function() {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
FFUtil.isApplyBrowser = function() {
    //alert(navigator.userAgent);
    var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
    var os;
    if ( varUA.indexOf('android') > -1) {
        //안드로이드
        os = "android";
    } else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
        //IOS
        os = "ios";
    } else {
        //아이폰, 안드로이드 외
        os = "other";
    }

    var is_safari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
                   navigator.userAgent &&
                   navigator.userAgent.indexOf('CriOS') == -1 &&
                   navigator.userAgent.indexOf('FxiOS') == -1 &&
                   navigator.userAgent.indexOf('Instagram') == -1 &&
                   navigator.userAgent.indexOf('[FB') == -1 &&
                   navigator.userAgent.indexOf('trill') == -1 &&
                   navigator.userAgent.indexOf('NAVER') == -1 &&
                   navigator.userAgent.indexOf('KAKAO') == -1 &&
                   navigator.userAgent.indexOf('Android') == -1;

    return is_safari || os != 'ios';
};
FFUtil.console = function(message) {
    if(SiteConf.env !== 'prod') {
        console.log(message)
    }
};
FFUtil.toDay = function(_dilimeter){

    var date = new Date(); 
    var year = date.getFullYear(); 
    var month = new String(date.getMonth()+1); 
    var day = new String(date.getDate()); 

    // 한자리수일 경우 0을 채워준다. 
    if(month.length == 1){ 
        month = "0" + month; 
    } 
    if(day.length == 1){ 
        day = "0" + day; 
    }
    //return (year + _dilimeter + month + _dilimeter + day); //기존소스
    return (year + month + day);
}

FFUtil.ajaxCall = function (url, async, data, okCallback, errCallback, _type) {
    okCallback = okCallback || null
    errCallback = errCallback || null
    async = async && true
    $.ajax({
        async: async
        , url: url
        , type: (_type)? _type: 'post'
        , dataType: 'json'
        , data: data
        , success: function (data, textStatus, jqXHR) {
            if(typeof okCallback === 'function') okCallback(data);           
        }
        , error : function (jqXHR, error, thrown) {
            console.log(url, jqXHR)
            if(typeof errCallback === 'function') errCallback(jqXHR);
        }
    });
};
FFUtil.getCookie = function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}
FFUtil.setCookie = function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
FFUtil.deleteCookie = function(cookieName) {
    var expireDate = new Date();
  
    //어제 날짜를 쿠키 소멸 날짜로 설정한다.
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "=" + "; expires=" + expireDate.toGMTString() + "; path=/";
 }

 //원래 ff_utill.js에 넣었는데 dev S3에 FF_util.js이라는 파일이 있어서 이 위치에 넣었습니다. (로컬에는 FF_util.js 없음)
 FFUtil.getClickKey = function() {
    // 파라미터가 담길 배열
    var param = new Array();
    
    // 현재 페이지의 url
    var url = decodeURIComponent(location.href);
    // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
    url = decodeURIComponent(url);

    var params;
    // url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
    params = url.substring( url.indexOf('?') + 1, url.length);
    // 파라미터 구분자("&") 로 분리
    params = params.split("&");

    // params 배열을 다시 "=" 구분자로 분리하여 param 배열에 key = value 로 담는다.
    var size = params.length;
    var key, value;

    for (var i = 0; i < size; i++) {
        key = params[i].split("=")[0];
        value = params[i].split("=")[1];

        param[key] = value;

        if (key == "click_key") {
            return value;
        }
    }
}