document.body.setAttribute("data-spm","102"),function(a){var b=parseFloat(a.version),c=!~location.host.indexOf("daily.taobao.net");b>1.1&&(a.config({packages:[{name:"tbc",path:c?"http://g.tbcdn.cn/tbc/":"http://g.assets.daily.taobao.net/tbc/",ignorePackageNameInUri:!0}]}),1.2===b&&a.config({map:[[/(\/tbc\/)tbc\//g,"$1"]]}))}(KISSY),TreeJS.config("1111",{sqydTpl:{type:"html",def:{type:"dom",name:"TemplateSqyd"},scope:"prototype"},thdpTpl:{type:"html",def:{type:"dom",name:"TemplateThdp"},scope:"prototype"},goodsTpl:{type:"html",def:{type:"dom",name:"TemplateGoods"},scope:"prototype"}}),KISSY.add("act",function(a,b,c,d,e,f,g){return{init:function(){function h(a,b){var c={type:b?a:a+"All"};b&&(c.industryId=b);var e="http://idata.etao.com/api/TopAuctionList.do";e&&new f({url:e,data:c,dataType:"jsonp",timeout:20,cache:!1,success:function(b){if(b&&(b=b.res))for(var c=d.query(".act-item",m[a]),e=d.get(".yssb-item",c[0]),f=[3,0,4,1,5,6,2],g=0;7>g;++g){var h,i,k,l,n=b[f[g]];if(n.num=f[g]+1,"cart"==a){if(i=h=n.collectNumber,h>=10)if(k=""+h,i="\u8d85\u8fc7"+k.charAt(0),1e3>h)for(l=k.length;--l>0;)i+="0";else 1e4>h?i+="\u5343":i="\u8d85\u8fc7"+parseInt(h/1e4,10)+"\u4e07";n.collectNumber=i}n.price=n.price.toFixed(2),n.reservePrice=n.reservePrice.toFixed(2),h=n.shopName,n.shopNameTruncated=h,h=n.title,n.titleTruncated=h.length>24?h.substring(0,23)+"...":h,n.typeName="cart"==a?"\u52a0\u5165\u8d2d\u7269\u8f66":"\u5df2\u8d2d\u4e70";var o=Math.ceil(g/2);e&&d.remove(d.query(".yssb-item",c[o]));var p=function(a,b){return function(e){e.set(a),e.render(c[b],b==c.length-1?"prepend":"append").then(function(){j=d.docHeight()})}}(n,o);TreeJS.get("1111:goodsTpl").then(p)}else console&&console.log("Query failed: no data returned")},error:function(a,b){console&&console.log("Query failed: "+b)}})}function i(){var c,e,f=d.scrollTop(),g=k.slice(1);g.push(d.get(".act-ad"));var h=f+d.viewportHeight();for(c=0;c<g.length;++c)if(h>=d.offset(g[c]).top){var i=d.query("img",g[c]);for(e=0;e<i.length;++e)if(!i[e].src){var m=d.attr(i[e],"data-src");m&&(i[e].src=m)}}var o=d.offset(k[0]);if(f>=o.top){if(d.css(l,{left:o.left+d.width(k[0])+2}),d.viewportWidth()<1350?d.addClass(l,"indicator-mini"):d.removeClass(l,"indicator-mini"),o.left+d.width(k[0])+2+d.outerWidth(l,!0)>d.viewportWidth()&&d.css(l,{left:d.viewportWidth()-d.outerWidth(l,!0)}),6==a.UA.ie&&d.css(l,{top:Math.min(f,j-696)}),!d.attr(l,"data-visible")){var p=new b({node:l,to:{opacity:1,autoAlpha:1},duration:.4});p.on("end",function(){d.attr(l,"data-visible","1")}),p.run()}if(!n)for(c=k.length;--c>-1;){var q=k[c];if("none"!=d.css(q,"display")&&f>=d.offset(q).top){var r=d.query(".indicator-floor",l);d.removeClass(r,"indicator-floor-selected"),d.addClass(r[c],"indicator-floor-selected");break}}}else{var p=new b({node:l,to:{opacity:0,autoAlpha:0},duration:.2});p.on("end",function(){d.attr(l,"data-visible","")}),p.run()}}var j=d.docHeight(),k=d.query(".act"),l=d.get("#Indicator");new f({url:"http://www.etao.com/api/get-api-page-jsonp.html",dataType:"jsonp",timeout:20,cache:!1,success:function(a){if(a){var b,c=a.sqyd;if(c)for(b=0;b<c.length;++b){var g=c[b];g.commentLink=g.link,g.voted="1"==g.voted?"sqyd-voted":"",g.desc.length>68&&(g.desc=g.desc.substring(0,67)+"...");var h=function(a){return function(b){b.set(a),b.render("#SqydGoods").then(function(a){j=d.docHeight(),e.on(a.getNode("vote"),"click",function(a){a.preventDefault();var b=a.currentTarget;d.hasClass(b,"sqyd-voted")||new f({url:d.attr(b,"data-vote"),dataType:"jsonp",timeout:10,cache:!1,success:function(a){if(a&&1==a.stat){var c=d.get("span",b);d.text(c,parseInt(d.text(c),10)+1),d.addClass(b,"sqyd-voted")}}})})})}}(g);TreeJS.get("1111:sqydTpl").then(h)}var c=a.thdp;if(c)for(b=0;b<c.length;++b){var g=c[b];g.desc.length>68&&(g.desc=g.desc.substring(0,67)+"...");var h=function(a){return function(b){b.set(a),b.render("#ThdpGoods").then(function(){j=d.docHeight()})}}(g);TreeJS.get("1111:thdpTpl").then(h)}}}});var m={psale:d.get(".act-content-favorites"),cart:d.get(".act-content-cart")},n=!1;h("psale"),h("cart"),e.delegate(d.get(".act-info-nav",d.get(".act-content-cart",".zrgwc")),"click",".act-info-nav-item",function(a){a.preventDefault();var b=a.currentTarget;d.removeClass(d.query(".act-info-nav-item",b.parentNode),"act-info-nav-item-selected"),d.addClass(b,"act-info-nav-item-selected"),h("cart",d.attr(b,"rel"))}),e.delegate(d.get(".act-info-nav",d.get(".act-content-favorites",".hbys")),"click",".act-info-nav-item",function(a){a.preventDefault();var b=a.currentTarget;d.removeClass(d.query(".act-info-nav-item",b.parentNode),"act-info-nav-item-selected"),d.addClass(b,"act-info-nav-item-selected"),h("psale",d.attr(b,"rel"))}),e.on(window,"scroll",i),e.on(window,"resize",i),i(),e.delegate(l,"click",".indicator-floor",function(a){a.preventDefault();var c=a.currentTarget,e=d.attr(c,"rel"),f=new b({node:g.ie||g.firefox?document.documentElement:d.get("body"),to:{scrollTop:d.offset(k[e]).top},easing:"Power2.easeIn",duration:.6});n=!0,f.on("end",function(){n=!1,d.removeClass(d.query(".indicator-floor",l),"indicator-floor-selected"),d.addClass(c,"indicator-floor-selected")}),f.run()}),e.on(d.get(".indicator-share",l),"click",function(a){a.preventDefault(),c.init({comment:"\u53cc11\u4e00\u6dd8\u5230\u5e95",type:"webpage",key:location.href,client_id:"179719"})})}}},{requires:["gallery/layer-anim/1.1/","tbc/share/1.1.5/","dom","event","io","ua","tbc/mini-login/1.4.2/"]});