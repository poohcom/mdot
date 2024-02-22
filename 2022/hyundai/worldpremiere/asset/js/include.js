var url = location.href;

document.write('\
<link rel="stylesheet" type="text/css" href="/worldpremiere/asset/css/reset.css" />\
<link rel="stylesheet" type="text/css" href="/worldpremiere/asset/css/font/fonts.css" />\
<link rel="stylesheet" type="text/css" href="/worldpremiere/asset/css/gdpr.css" />\
<script src="/worldpremiere/asset/js/site.js"></script>\
<script src="/worldpremiere/asset/js/ff_util.js"></script>\
<script src="/worldpremiere/asset/js/app.js"></script>\
<script src="/worldpremiere/asset/js/layout.js"></script>\
<script src="/worldpremiere/asset/js/gdpr.js"></script>\
<script src="/worldpremiere/asset/js/common.js"></script>\
<script src="/worldpremiere/asset/js/googleTag.js"></script>\
');

if(url.search("/m/") > 0) {
  document.write('\
  <link rel="stylesheet" type="text/css" href="/worldpremiere/asset/m/css/layout.css" />\
  <link rel="stylesheet" type="text/css" href="/worldpremiere/asset/m/css/common.css" />\
  ');
} else {
  document.write('\
  <link rel="stylesheet" type="text/css" href="/worldpremiere/asset/css/layout.css" />\
  <link rel="stylesheet" type="text/css" href="/worldpremiere/asset/css/common.css" />\
  ');
}
