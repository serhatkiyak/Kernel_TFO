//weibo
function author_weibo(s) {
	var tempStr = split_author_weibo(s);
	var authorStr = document.getElementById("authorStr");
	if(authorStr != null){
		authorStr.innerHTML = tempStr;
	}
}

function split_author_weibo(s) {
	var reg = /[,，;； 　]/;    //用正则表达式，指定分隔符为逗号或 分号 或空格
	var ss = new Array();
	var temp = new Array();
	var str = "";
	var strImg = "<img src='http://www.luxtarget.com/r/cms/www/target/img/logo/sina.png'/>";
	
	ss = s.split(reg);
	for(i=0; i<ss.length; i++) {
		temp = ss[i].split(" ");
		
		for (j=0; j<temp.length; j++) {
			switch (temp[j]) {
	　		case "许群": str = str_weibo(str, strImg, 1664325643, temp[j]);break;
	　		case "张小波": str = str_weibo(str, strImg, 1881113641, temp[j]);break;
	　		case "曲虹": str = str_weibo(str, strImg, 1621744057, temp[j]);break;
	　		case "赵芸": str = str_weibo(str, strImg, 1704764971, temp[j]);break;
	　		case "苏臻": str = str_weibo(str, strImg, 1792998692, temp[j]);break;
	 		case "13D": str = str_weibo(str, strImg, 1704764971, temp[j]);break;
	　		case "苏晗": str = str_weibo(str, strImg, 1681766557, temp[j]);break;
	　		case "刘铮": str = str_weibo(str, strImg, 1668416240, temp[j]);break;
	　		case "李沛伦": str = str_weibo(str, strImg, 1254371894, temp[j]);break;
	　		case "杜子越": str = str_weibo(str, strImg, 1681377793, temp[j]);break;
	　		case "乔薪如": str = str_weibo(str, strImg, 1278761297, temp[j]);break;
	　		case "王玮": str = str_weibo(str, strImg, 1877206421, temp[j]);break;
	　		case "王云龙": str = str_weibo(str, strImg, 2211250571, temp[j]);break;
	　		case "温宏伟": str = str_weibo(str, strImg, 2110432257, temp[j]);break;
	　		case "李达": str = str_weibo(str, strImg, 2153608701, temp[j]); break;
	　		case "陈鹏飞": str = str_weibo(str, strImg, 1748034470, temp[j]);break;
	　		case "张紫薇": str = str_weibo(str, strImg, 1749764123, temp[j]);break;
	　		case "娄元铮": str = str_weibo(str, strImg, 1568857487, temp[j]);break;
	　		case "莫娇": str = str_weibo(str, strImg, 1788705427, temp[j]);break;
	　		case "金鑫": str = str_weibo(str, strImg, 1574015702, temp[j]);break;
	　		case "希": str = str_weibo(str, strImg, 1215221782, temp[j]);break;
	　		case "小文": str = str_weibo(str, strImg, 1839881137, temp[j]);break;
	　		case "雷": str = str_weibo(str, strImg, 1713807421, temp[j]); break;
	　		case "GiGi": str = str_weibo(str, strImg, 1863198251, temp[j]);break;
	　		case "Masa": str = str_weibo(str, strImg, 1574015702, temp[j]);break;
	　		case "唐雯艳": str = str_weibo(str, strImg, 1831339902, temp[j]);break;
	　		case "冯莹莹": str = str_weibo(str, strImg, 1912378567, temp[j]);break;
	　		case "刘新新": str = str_weibo(str, strImg, 1654968597, temp[j]);break;
	　		case "胖土豆快跑": str = str_weibo(str, strImg, 1912378567, temp[j]);break;
	　		case "鹿宇": str = str_weibo(str, strImg, 1227101535, temp[j]);break;
	　		case "莹": str = str_weibo(str, strImg, 1794844562, temp[j]);break;
	　		case "Chloe": str = str_weibo(str, strImg, 1988910425, temp[j]);break;
	　		case "Lian": str = str_weibo(str, strImg, 1841595621, temp[j]);break;
	　		case "石勐": str = str_weibo(str, strImg, 3897492603, temp[j]);break;
	　		case "杨帆": str = str_weibo(str, strImg, 538589012, temp[j]);break;
	　		case "Rachel": str = str_weibo(str, strImg, 2608331591, temp[j]);break;
		　　		default: str = str + temp[j]+"&nbsp;&nbsp;";
		　　 } 
		}
	}
	return str;
}

function str_weibo(str, strImg, key, j)
{
	str2 = str + strImg + "<a id='wb_user_id' wb_user_id='"+key+"' href='http://weibo.com/"+key+"' target='_blank'><font color='#016BBB'>"+j+"</font></a>&nbsp;&nbsp;";
	return str2;
}

// get url pams
function requestPam(key)
{
    var url=window.document.location.href;
    var pos=url.indexOf("?");
    var allValues=url.substr(pos + 1);

    var tmpValues = allValues.split("&");
    for(var i = 0; i < tmpValues.length; i++)
    {
        var tmpValue = tmpValues[i].split("=");
        if(tmpValue[0].toUpperCase()==key.toUpperCase()) 
            return tmpValue[1];
    }
    return "";
}

// filter enter
function filterEnter(temp)
{
	temp = temp.replace(/\r\n/g, "");
    return temp;
}

// menu show
function MM_swapImgRestore() { //v3.0
	var i, x, a = document.MM_sr;
	for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++)
		x.src = x.oSrc;
}
function MM_preloadImages() { //v3.0
	var d = document;
	if (d.images) {
		if (!d.MM_p)
			d.MM_p = new Array();
		var i, j = d.MM_p.length, a = MM_preloadImages.arguments;
		for (i = 0; i < a.length; i++)
			if (a[i].indexOf("#") != 0) {
				d.MM_p[j] = new Image;
				d.MM_p[j++].src = a[i];
			}
	}
}
function MM_findObj(n, d) { //v4.01
	var p, i, x;
	if (!d)
		d = document;
	if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
		d = parent.frames[n.substring(p + 1)].document;
		n = n.substring(0, p);
	}
	if (!(x = d[n]) && d.all)
		x = d.all[n];
	for (i = 0; !x && i < d.forms.length; i++)
		x = d.forms[i][n];
	for (i = 0; !x && d.layers && i < d.layers.length; i++)
		x = MM_findObj(n, d.layers[i].document);
	if (!x && d.getElementById)
		x = d.getElementById(n);
	return x;
}
function MM_swapImage() { //v3.0
	var i, j = 0, x, a = MM_swapImage.arguments;
	document.MM_sr = new Array;
	for (i = 0; i < (a.length - 2); i += 3)
		if ((x = MM_findObj(a[i])) != null) {
			document.MM_sr[j++] = x;
			if (!x.oSrc)
				x.oSrc = x.src;
			x.src = a[i + 2];
		}
}

//分享到微信
function openWeixinShare(url){
	window.open (url, "newwindow", "height=575, width=656, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
}