// device and browser 구분
const canUseOsBroswer = (userAgent) => {

  const ANDROID = "Android";
  const IPHONE = "iPhone";
  const CHROME = "Chrome/";
  const SAFARI = "Safari/";
  const iosCHROME = "CriOS/";

  console.log(userAgent);
  // 안드로이드일때는 크롬만,
  if (userAgent.includes(ANDROID) && userAgent.includes(CHROME)) {
    return true;
  }
  // 아이폰일 때는 사파리만,
  else if (
    userAgent.includes(IPHONE) &&
    !userAgent.includes(iosCHROME) &&
    userAgent.includes(SAFARI)
  ) {
    return true;
  }
  // 나머지는 안됨.
  else {
    return false;
  }
};


// check if the device is android
if(typeof isAndroid == 'undefined'){
  const isAndroid = (userAgent) => {
    if (userAgent.toLowerCase().includes("android")) {
      return true;
    } else {
      return false;
    }
  };
}

// check if the device is ios
if(typeof isIOS == 'undefined'){
  const isIOS = (userAgent) => {
    if (userAgent.toLowerCase().includes("iphone") || userAgent.toLowerCase().includes("ipad") || userAgent.toLowerCase().includes("ipod")) {
      return true;
    } else {
      return false;
    }
  };
}

// get browser name
function getBrowser() {
    agent = window.navigator.userAgent.toLowerCase()
    // alert('agent: ' + agent)
    switch (true) {
      case agent.indexOf("edge") > -1: 
        return "edge";
      case agent.indexOf("edg/") > -1: 
        return "edge-chromium";
      case agent.indexOf("opt") > -1: 
        return "opera-touch";
      case agent.indexOf("opx") > -1: 
        return "opera-gx";
      case agent.indexOf("opr") > -1: 
        return "opera";
      case agent.indexOf("trident") > -1: 
        return "internet-explorer";
      case agent.indexOf("miuibrowser") > -1: 
        return "mi-browser";
      case agent.indexOf("samsungbrowser") > -1: 
        return "samsung-browser";
      case agent.indexOf("ucbrowser") > -1: 
        return "uc-browser";
      case agent.indexOf("fulldivebrowser") > -1: 
        return "fulldive-browser";
      case agent.indexOf("mint browser") > -1: 
        return "mint-browser";
      case agent.indexOf("puffin") > -1: 
        return "puffin";
      case agent.indexOf("phx") > -1: 
        return "phoenix";
      case agent.indexOf("hibrowser") > -1: 
        return "hi-browser";
      case agent.indexOf("maxthon") > -1: 
        return "maxthon";
      case agent.indexOf("soul") > -1: 
        return "soul";
      case agent.indexOf("kakaotalk") > -1: 
        return "kakaotalk";
      case agent.indexOf("yabrowser") > -1: 
        return "yandex";
      case agent.indexOf("cake") > -1: 
        return "cake";
      case agent.indexOf("stargon") > -1: 
        return "stargon";
      case agent.indexOf("naver") > -1: 
        return "naver";
      case agent.indexOf("daum") > -1: 
        return "daum";
      case agent.indexOf("wechat") > -1: 
        return "wechat";
      case agent.indexOf("weixin") > -1: 
        return "weixin";
      case agent.indexOf("firefox") > -1: 
        return "firefox";
      case agent.indexOf("fxios") > -1: 
        return "firefox-ios";
      case agent.indexOf("mozilla/5.0 (macintosh; intel mac os x 10_15_4) applewebkit/605.1.15 (khtml, like gecko) version/13.1 safari/605.1.15") > -1: 
        return "firefox-ipad";
      case agent.indexOf("focus") > -1: 
        return "focus";
      case agent.indexOf("chrome") > -1 && !!window.chrome: 
        return "chrome";
      case agent.indexOf("crios") > -1: 
        return "chrome-ios";
      case agent.indexOf("safari") > -1 && agent.indexOf("chrome") == -1: 
        return "safari";
      default: 
        return "other";
    }
}

/* 
  compare to two browser version
  a = new version
  b = base version
  e.g. compareVersions('98.0.454.34','88')
  return: 1   = bigger
          0   = same
          -1  = lower
*/
function compareVersions(a, b) {
    if (a === b) {
       return 0;
    }

    var a_components = a.split(".");
    var b_components = b.split(".");

    var len = Math.min(a_components.length, b_components.length);

    // loop while the components are equal
    for (var i = 0; i < len; i++) {
        // A bigger than B
        if (parseInt(a_components[i]) > parseInt(b_components[i])) {
            return 1;
        }

        // B bigger than A
        if (parseInt(a_components[i]) < parseInt(b_components[i])) {
            return -1;
        }
    }

    // If one's a prefix of the other, the longer one is greater.
    if (a_components.length > b_components.length) {
        return 1;
    }

    if (a_components.length < b_components.length) {
        return -1;
    }

    // Otherwise they are the same.
    return 0;
}

function getBrowserVersion(name){
  userAgent = window.navigator.userAgent.toLowerCase()
  if(name == 'safari'){
    /* 
      safari mac doesn't support lookbehind '?<='. so instead
      of lookbehind we're using Non-capturing group '?:'. And then
      spliting the string by '/'
    */
    version = userAgent.match(/(?:version\/)\d+(?:\.\d+)+/)
    version = version?version[0]:null;
    version = version?version.split('/'):null;
    version = version?version[1]:null
    return version?version:null
  } else if(name == 'chrome'){
    version = userAgent.match(/(?:chrome\/)\d+(?:\.\d+)+/)
    version = version?version[0]:null;
    version = version?version.split('/'):null;
    version = version?version[1]:null
    return version?version:null
  }  else if(name == 'chrome-ios'){
    version = userAgent.match(/(?:crios\/)\d+(?:\.\d+)+/)
    version = version?version[0]:null;
    version = version?version.split('/'):null;
    version = version?version[1]:null
    return version?version:null
  } else {
    return null;
  }
}

const checkBrowser =  () => {
  // let messageDom = document.createElement('div')
  // messageDom.style.display = "flex"
  // messageDom.style.justifyContent = "center"
  // messageDom.style.alignItems = "center"
  // messageDom.style.textAlign = "center"
  // messageDom.style.flexWrap = "wrap"
  // messageDom.style.width = "100vw"
  // messageDom.style.height = "100vh"
  // messageDom.style.position = "fixed"
  // messageDom.style.left = "0"
  // messageDom.style.top = "0"
  // messageDom.style.background = "#000"
  // messageDom.style.color = "#fff"
  // messageDom.style.fontSize = "25px"
  // messageDom.style.padding = "20px"
  // messageDom.style.zIndex = "99999999"
  // messageDom.innerHTML = "Your safari browser version need to be >= 14, please upgrade the browser."
  activeLang = "kr"

  if(location.pathname.indexOf('worldpremiere/us') > -1){
    activeLang = "us"
  } else if(location.pathname.indexOf('worldpremiere/en') > -1){
    activeLang = "en"
  } else if(location.pathname.indexOf('worldpremiere/eu') > -1){
    activeLang = "eu"
  }

  messageText  = {
    "en" : "Update your browser or switch to a different browser for the best experience.<br>This site supports Google Chrome, Safari.",
    "eu" : "Update your browser or switch to a different browser for the best experience.<br>This site supports Google Chrome, Safari.",
    "kr" : "최상의 환경을 구현하려면 사파리를 업데이트하거나 <br>크롬 브라우저를 이용해 주세요.",
    "us" : "Update your browser or switch to a different browser for the best experience.<br>This site supports Google Chrome, Safari.",
  }
  buttonText  = {
    "en" : {
      "init": "Copy the link.",
      "copied": "The link has been copied.",
    },
    "eu" : {
      "init": "Copy the link.",
      "copied": "The link has been copied.",
    },
    "kr" : {
      "init": "복사하기",
      "copied": "링크가 복사되었습니다.",
    },
    "us" : {
      "init": "Copy the link.",
      "copied": "The link has been copied.",
    },
  }

  const messageHtml = `
    <style>
        .update_wrap {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
        }

        .update_wrap>div img {
            max-width: 100%;
            display: block;
            margin: 0 auto;
        }

        .update_wrap>div p {
            font-family: "hh_m";
            font-size: 24px;
            line-height: 1.38;
            text-align: center;
            color: #000;
            margin: 0;
            margin: 35px 0;
        }

        .update_wrap>div button {
      cursor: pointer; margin:0 auto;
            display: block;
            width: 320px;
            line-height: 50px;
            border: none;
            background-color: #002c5f;
            font-family: "hh_r";
            font-size: 20px;
            color: #fff;
        }

        @media(max-width:1200px) {
      .update_wrap>div img { width:70px; }
            .update_wrap>div p {
                margin: 18px 0 24px 0;
                font-size: 15px;
            }

            .update_wrap>div button {
                width: 200px;
                line-height: 38px;
                font-size: 15px;
            }
        }
    </style>
    <div class="update_wrap">
        <div>
            <img src="/worldpremiere/asset/img/common/img-browser.svg" alt="browser update">
            <p>${messageText[activeLang]}</p>
            <button type="button">${buttonText[activeLang]['init']}</button>
        </div>
    </div>`;

  let { userAgent } = navigator
  
  userAgent = userAgent.toLowerCase()

  const browserName = getBrowser();

  
  if(browserName == "safari" && compareVersions(getBrowserVersion("safari"),'14') == -1){
    let bodyInterval = setInterval(()=>{
      if(document.querySelector("body")){
          document.querySelector("body").innerHTML = ""

          setTimeout(()=>{
            document.querySelector("body").innerHTML = messageHtml

            document.querySelector('.update_wrap button').addEventListener("click", (e)=>{
              var tempInput = document.createElement("input");
              var text = location.href;

              document.body.appendChild(tempInput);
              tempInput.value = text;
              tempInput.select();
              document.execCommand("copy");
              document.body.removeChild(tempInput);

              e.target.innerText = buttonText[activeLang]['copied']
              setTimeout(()=>{
                e.target.innerText = buttonText[activeLang]['init']
              },2000)
            })

            clearInterval(bodyInterval)
          },1000)
      }
    }, 10)
  }
}
checkBrowser()