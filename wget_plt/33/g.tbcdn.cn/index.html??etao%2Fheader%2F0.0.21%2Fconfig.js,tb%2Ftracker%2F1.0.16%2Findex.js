!function(e,a){var r=a.XCake=a.XCake||{};r.headerConfig=function(a){if(!a||!a.name||!a.base||"undefined"===a.combine)throw new Error("XCake.config options error");e.config({combine:a.combine,packages:[{name:a.name,base:a.base,ignorePackageNameInUri:!0,debug:!0,combine:a.combine},{name:"ecc",path:"http://g.tbcdn.cn/",charset:"utf-8",debug:!0}],modules:{etaologin:{alias:["ecc/login/1.0.0/"]},sizzle:{alias:["node"]},datalazyload:{alias:["gallery/datalazyload/1.0/"]},switchable:{alias:["gallery/switchable/1.3.1/"]}}}),KISSY.config("modules",{"header/_0":{requires:["dom","event","cookie","ua","io"]},"header/_1":{requires:["base","dom","node","event","header/_8","header/_a","header/p/header/cloud.css"]},"header/_2":{requires:["base","node","dom","event","header/_7","header/p/header/history.css"]},"header/_3":{requires:["base","node","dom","event","header/_9"]},"header/_4":{requires:["base","dom","event","header/_9","header/p/header/hot-search.css"]},"header/_5":{requires:["node","rich-base","dom","header/_c","header/_9"]},"header/_6":{requires:["node","base","overlay","uri","ua","header/_5","header/_2","header/_d","header/_1","header/_4","header/_e","header/_3","header/_a","json","header/_0","header/p/header/index.css"]},"header/_7":{requires:["base","header/_b"]},"header/_8":{requires:["node","event"]},"header/_a":{requires:["base","cookie","event"]},"header/_b":{requires:["base"]},"header/_c":{requires:["combobox"]},"header/_d":{requires:["base","dom","event","combobox"]},"header/_e":{requires:["base","node","dom","event"]},"header/p/header/B.diaoding.source":{alias:"header/_0"},"header/p/header/cloud":{alias:"header/_1"},"header/p/header/history":{alias:"header/_2"},"header/p/header/hot-search-brand":{alias:"header/_3"},"header/p/header/hot-search":{alias:"header/_4"},"header/p/header/index":{alias:"header/_5"},"header/p/header/init":{alias:"header/_6"},"header/p/header/local-query":{alias:"header/_7"},"header/p/header/menu-anim":{alias:"header/_8"},"header/p/header/mods":{alias:"header/_9"},"header/p/header/stat":{alias:"header/_a"},"header/p/header/storage":{alias:"header/_b"},"header/p/header/suggest":{alias:"header/_c"},"header/p/header/tab":{alias:"header/_d"},"header/p/header/wanke":{alias:"header/_e"}}),e.use("node, io",function(e,a,r){r.setupConfig({xhrFields:{withCredentials:!0}})}),a.channel||(a.channel=a.page,a.page="index");var r="header/p/"+a.channel+"/"+a.page;e.importStyle(r),e.ready(function(e){e.use(r,function(e,a){new a}),e.use("node,dom",function(e,a,r){r.get(".J_WangWang")&&e.getScript("http://g.tbcdn.cn/tbc/webww/1.0.10/webww-min.js",{success:function(){window.Light&&Light.light()}})}),e.SidePannel.init({show:"all",channel:"\u5f53\u524d\u9875\u9762"})})},function(){var e=KISSY,a=function(e,a){var r=(new Date).getTime(),t=a?"":"sfrom=etao&";e=t+"t="+r+"&"+e,(window.goldlog_queue||(window.goldlog_queue=[])).push({action:"goldlog.record",arguments:["/search","etao_search",e,"H51884969"]})};a.send=function(e){if(e){var a=(new Date).getTime(),r="log_"+a,t=window[r]=new Image;t.onload=t.onerror=function(){window[r]=null},t.src=e,t=null}},a.pv=function(a,r){e.use("dom,node",function(e,a,t){var o=document.referrer?"&pre="+escape(document.referrer):"",n=n?n:"#J_PvStat";if(n){var i=t.one(n);if(!i)return;var d=i.attr("data-stat")+o;e.Stat(d,r)}})},a.orderForm=function(a,r,t){e.use("dom,node,event",function(e,o,n,i){var d=e.unparam(window.location.search.replace("?","")),s=d.pid,h=o;i.on(document,"click",function(o){var n=o.target;if("A"==n.tagName.toUpperCase()||(n=h.parent(n,"a"))){for(var i=e.trim(h.attr(n,"data-stat")),d=i,c=n.href,l=["s.etao.com","s.taobao.com","search.taobao.com","taobao.etao.com"],u=l.length,p=!1;u--;)if(c.indexOf(l[u])>-1){p=!0;break}if(i&&p){if(s){for(var f=i.split("."),m=(f.length,7),_=0;m>_;_++)f[_]||"0"===f[_]||f.push("0");f[m-1]=s,i=f.join(".")}if(i="stp="+i,-1!==c.indexOf("stp=")){var g=new RegExp("([&?])stp=[^&]*(&|$)","i");n.href=c.replace(g,"$1")}n.href=-1===n.href.indexOf("?")?n.href+"?":n.href+"&",n.href+=i}if(d&&e.Stat){var b=document.referrer?"&pre="+escape(document.referrer):"",d="click="+d+b;e.Stat(d,a,r,t)}}})})},a.init=function(e,a){KISSY.Stat.pv(e,a),KISSY.Stat.orderForm(a)},e.Stat=a}(),function(e){e.DOM,e.Event,e.UA;try{{(function(){for(var e=document.getElementsByTagName("meta"),a=[],r=0;r<e.length;r++){var t=e[r];t&&t.name&&("data-spm"==t.name||"spm-id"==t.name)&&a.push(t.content)}return document.body&&document.body.getAttribute("data-spm")&&a.push(document.body.getAttribute("data-spm")),a=a.length?a.join("."):0,a&&-1==a.indexOf(".")&&(a+=".0"),a})()}}catch(a){}var r={init:function(a){e.use("node,dom,event,ua",function(e,r,t,o,n){var i=t,d=o,s={init:function(a){var r=this,t=e.one("#J_GobalNotice"),o=/wenda\.|8\.|q\./.test(location.host);r.noticeEl=t;var s=void 0==a.show?"all":a.show,h='<a href="#" target="_self" hidefocus="true" title="\u56de\u9876\u90e8" class="back-to-top"></a>',c='<div class="service-tools"><span class="call-survey" title="\u610f\u89c1\u53cd\u9988"></span><a target="_blank" class="customer-service" title="\u667a\u80fd\u5ba2\u670d" href="http://buy.etao.com/roboter/redirect.htm"></a></div>',l=t&&!o?'<a href="#" target="_self" hidefocus="trur" title="\u6253\u5f00\u6d88\u606f" class="gobal-notice-btn" id="J_openNoticeBtn"></a>':"",u={all:157,top:40,sur:116},p={all:157,top:40,sur:116};"top"==s?(r._initHtml(h),r._backToTop()):"sur"==s?(r._initHtml(c),r._survey(a)):(r._initHtml(h+c+l),r._backToTop(),r._survey(a)),d.on(window,"scroll",function(){var a=0,t=e.one(".back-to-top"),o=i.scrollTop();if(o>=100?(t&&t.addClass("transition"),a=u[s]):10>=o&&(t&&t.removeClass("transition"),a=p[s]),6==n.ie){var d=i.viewportHeight()+o;i.css(".side-pannel","top",d-a+"px");var h=r.noticeEl;h&&h.css("top",d-h.height()+"px")}})},_hackIE6:function(){if(6==n.ie){var e=this,a=e.noticeEl;a.css("top",i.viewportHeight()+i.scrollTop()-a.height()+"px")}},_initHtml:function(e){var a=i.create('<div class="side-pannel" id="J_sidePannel"></div>');a.innerHTML=e,document.body.appendChild(a)},_backToTop:function(){(6==n.ie||"firefox"==n.shell)&&i.scrollTop()>100&&i.addClass(".back-to-top","transition")},_survey:function(){d.on(".call-survey","click",function(){window.open("http://i.etao.com/uservoice/add.html")})}};s.init(a)})}};return e.SidePannel=r,r}(KISSY)}(KISSY,this);try{(function(e){function n(){for(var e=document.getElementsByTagName("meta"),n=[],t=0;e.length>t;t++){var o=e[t];o&&o.name&&("data-spm"==o.name||"spm-id"==o.name)&&n.push(o.content)}return document.body&&document.body.getAttribute("data-spm")&&n.push(document.body.getAttribute("data-spm")),n=n.length?n.join("."):0,n&&-1==n.indexOf(".")&&(n+=".0"),n}function t(e,n){var t={};for(var o in e)t[o]=e[o];for(var o in n)t[o]=n[o];return t}function o(e){for(var n=["a.tbcdn.cn","s.tbcdn.cn","g.tbcdn.cn/tbc","g.tbcdn.cn","tbcdn.cn","www.taobao.com/go/rgn","www.taobao.com","taobao.com","gtms01.alicdn.com","gtms02.alicdn.com","gtms03.alicdn.com","gtms04.alicdn.com","atp.alicdn.com/tmse","at.alicdn.com","log.mmstat.com/1.gif","log.mmstat.com","lac.mmstat.com","gm.mmstat.com","mmstat.com","cdn.tanx.com","ecpm.tanx.com","p.tanx.com","tanx.com","i.mmcdn.cn","img.taobaocdn.com","img01.taobaocdn.com","img02.taobaocdn.com","img03.taobaocdn.com","img04.taobaocdn.com","allot.mpp.taobao.com/allot.do","/tps/i1/TB","/tps/i2/TB","/tps/i3/TB","/tps/i4/TB","tbcdn.cn/s/aplus_v2.js","XXXX","/simba/img","index.js","index.css","tb/global/","/s/kissy/gallery/","-min.js","-min.css",".png",".jpg",".gif",".css",".php","kissy",".com",".cn"],t=[],o=0;e.length>o;o++){for(var r=e[o].name,c=0;n.length>c;c++){var a=c.toString(36);1==a.length&&(a="0"+a);var i="~"+a,s=RegExp(n[c].replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),m=r.replace(s,i);m!=r&&(r=m)}r=r.replace(/\-/g,"__").replace(/\?[^\?]*$/,"").replace(/^http[s]*:\/\//,"").replace(/\//g,".."),t.push([r,(1*e[o].fs).toString(36),(1*e[o].re).toString(36)].join("-"))}return t=t.join("-")}function r(){try{if(e.performance&&e.performance.getEntriesByType)for(var n=performance.getEntriesByType("resource"),t=0,r=[];n.length>t;){r.push({name:n[t].name,fs:(100*n[t].fetchStart).toFixed(0),re:(100*n[t].responseEnd).toFixed(0)}),t++;var c=o(r);(c.length>1700||t>=n.length)&&(e.JSTracker.send({msg:c,file:"",line:0,delay:0,category:"__RS",spm:e.JSTracker._configs.spm,sampling:e.JSTracker._configs.sampling,url:location.href,ua:"",scrolltop:0,screen:screen.width+"x"+screen.height,nick:s}),r=[])}}catch(a){e.JSTracker.send({category:"error_resource_collect",url:"http://jstracker/0.1/"})}}if(!e.JSTracker){var c=n(),a=function(){function n(n,t,o,r){var c,a=e.navigator.mimeTypes;for(c in a)if(a[c][n]==t){if(void 0!==o&&r.test(a[c][o]))return!0;if(void 0===o)return!0}return!1}try{var t=n("type","application/vnd.chromium.remoting-viewer");if(t)return"";var o="track"in e.document.createElement("track"),r="scoped"in e.document.createElement("style"),c="v8Locale"in e,a=e.navigator.appVersion;return o&&!r&&!c&&/Gecko\)\s+Chrome/.test(a)?" QIHU 360 EE":o&&r&&c?" QIHU 360 SE":""}catch(i){return""}}(),i=e.g_config&&e.g_config.startTime||+new Date;e.JSTracker={_configs:{sampling:100,spm:c,debug:-1!=location.href.indexOf("jt_debug"),nick:"",url:"",ignore:[]}},("detail.tmall.com"==location.host||"www.tmall.com"==location.host||"item.taobao.com"==location.host||"item.taobao.com"==location.host)&&(e.JSTracker._configs.sampling=20);var s=function(){var n;if(""!==e.JSTracker._configs.nick)return e.JSTracker._configs.nick;try{return TB.Global.util.getNick()}catch(t){}try{if(n=/_nk_=([^;]+)/.exec(document.cookie)||/_w_tb_nick=([^;]+)/.exec(document.cookie)||/lgc=([^;]+)/.exec(document.cookie))return decodeURIComponent(n[1])}catch(t){return""}finally{return""}}();e.JSTracker.config=function(n,t){return n||t?t?(e.JSTracker._configs[n]=t,void 0):e.JSTracker._configs[n]:e.JSTracker._configs};var m=function(n){var t="jsFeImage_"+ +new Date,o=e[t]=new Image;o.onload=o.onerror=function(){e[t]=null},o.src=n,o=null},l=function(){return"https:"==location.protocol?"https://log.mmstat.com/jstracker.2?":"http://gm.mmstat.com/jstracker.2?"}();e.JSTracker.send=function(n){var o={msg:"",file:"",line:0,delay:+new Date-i,category:"",spm:e.JSTracker._configs.spm,sampling:e.JSTracker._configs.sampling,url:location.href,ua:navigator.userAgent+a,scrolltop:document.documentElement&&document.documentElement.scrollTop||document.body&&document.body.scrollTop||0,screen:screen.width+"x"+screen.height,nick:s};e.JSTracker._configs.url&&(o.url=e.JSTracker._configs.url);var r=t(o,n),c=[];r.url!=location.href&&c.push("[u"+r.url+"]"),r.delay>0&&c.push("[t"+r.delay+"]"),r.category&&c.push("[c"+r.category+"]"),r.spm&&c.push("[s"+r.spm+"]"),r.sampling&&c.push("[r"+r.sampling+"]"),r.msg&&c.push(r.msg),c=c.join("");var g=1>=Math.random()*r.sampling;try{for(var d=0;e.JSTracker._configs.ignore.length>d;d++){var u=e.JSTracker._configs.ignore[d];u.test(n.msg)&&(g=!1)}}catch(p){e.JSTracker.send({category:"error_ignore",url:"http://jstracker/0.1/"})}(g||e.JSTracker._configs.debug)&&m(l+["type=9","id=jstracker","v=1.0.15","nick="+r.nick,"msg="+encodeURIComponent(c),"file="+encodeURIComponent(r.file),"ua="+encodeURIComponent(r.ua),"line="+r.line,"scrolltop="+r.scrolltop,"screen="+screen.width+"x"+screen.height,"t="+(new Date).valueOf()].join("&")),e.JSTracker._configs.debug&&console&&console.log(r)};var g=["log","info","debug","warn","error"];for(var d in g){var u=g[d];e.JSTracker[u]=function(n){return function(){var t=Array.prototype.slice.call(arguments,0),o=t.join("");e.JSTracker.send({category:n.toUpperCase(),msg:o})}}(u)}var p=e.onerror;e.onerror=function(n,t,o){p&&p(n,t,o),e.JSTracker.send({msg:n,file:t,line:o})};var f=function(){var n={},t="";if(e.performance){var o=e.performance.timing;n.dns=o.domainLookupEnd-o.domainLookupStart,n.con=o.connectEnd-o.connectStart,n.req=o.responseStart-o.requestStart,n.res=o.responseEnd-o.responseStart,n.dcl=o.domContentLoadedEventEnd-o.domLoading,n.onload=o.loadEventStart-o.domLoading,n.type=window.performance.navigation.type;try{t=JSON.stringify(n)}catch(c){}}e.JSTracker.send({msg:t,category:"__PV"}),setTimeout(r,5e3)};window.addEventListener?(document.addEventListener("DOMContentLoaded",function(){c=n(),e.JSTracker._configs.spm=c},!1),window.addEventListener("load",f,!1)):(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.detachEvent("onreadystatechange",arguments.callee),c=n(),e.JSTracker._configs.spm=c}),window.attachEvent("onload",f))}})(window)}catch(e){}