//导航切换
function chkLanguage(){
	var languageMark = "CN";
	var arrcookie=document.cookie.split("; ");
	for(var i=0;i<arrcookie.length;i++) {
		var language=arrcookie[i].split("=");
		if(language[0]=="languageBy" && language[1] == "EN"){
			languageMark="EN";
			break;
		}
	}
	return languageMark;
}

function jeeNav(o,n){
	o.className="selected";
	var t;
	var id;
	var s;
	var pl;
	var body_width, nav_left;
	 
	for(var i=1;i<=n;i++){
		id ="nav"+i;
	   	t = document.getElementById(id);
	   	s = document.getElementById("sub"+i);
	   	body_width = window.document.body.offsetWidth;
	   
	   	if(id != o.id){
	   		//alert(t);
	   		if (t != null){
	   			t.className="hide";
	   		}
	   		if (s != null){
	   			s.style.display = "none";
	   		}
	   	} else {
	   		nav_left = document.getElementById("nav"+i);
	   		nav_left.style.position = "relative";   // 兼容IE6、7
	   		pl = (body_width/2 - nav_left.offsetLeft);
		   
	   		if(chkLanguage()== "EN") {
	   		   if(i==3){pl= pl + 20;}
			   else if(i==4){pl= pl + 146;}
			   else if(i==5){pl= pl + 310;}
			   else if(i==6){pl= pl + 470;}
			   else if(i==7){pl= pl + 540;}
			   else if(i==8){pl= pl + 800;}
			   else if(i==9){pl= pl + 990;}
			   else if(i==10){pl= pl + 940;}
			   else if(i==11){pl= pl + 1150;}
		   } else	 {
			   if(i==3){pl = pl;}
			   else if(i==4){pl = pl + 166;}
			   else if(i==5){pl = pl + 340;}
			   else if(i==6){pl = pl + 470;}
			   else if(i==7){pl = pl + 590;}
			   else if(i==8){pl = pl + 770;}
			   else if(i==9){pl = pl + 880;}
			   else if(i==10){pl = pl + 946;}
			   else if(i==11){pl = pl + 1132;}
		   }
	   		if (s != null){
			   s.style.paddingLeft = pl +"px";
			   s.style.top = "226px";
			   s.style.lineHeight = "27px";
			   s.style.position="absolute";
			   s.style.display = "block";
	   		}
		}
	}
}

function jeeNavOut(o,n){
	 o.className="selected";
	 var t;
	 var id;
	 var s;
	 for(var i=1;i<=n;i++){
	   id ="nav"+i;
	   t = document.getElementById(id);
	   //s = document.getElementById("sub"+i);
	   if (t != null){
		   t.className="hide";
	   }
	   //s.style.display = "none";
	 }
}

//语言切换
var languageMark = "CN";
var arrcookie=document.cookie.split("; ");
for(var i=0;i<arrcookie.length;i++) {
	var language=arrcookie[i].split("=");
	if(language[0]=="languageBy" && language[1] == "EN"){
		languageMark="EN";
		break;
	}
}

function changeLanguage(){
	if (languageMark == "EN") {
		setcookie('languageBy', 'CN', 0);
		window.location.reload(); 
	} else {
		setcookie('languageBy', 'EN', 0);
		window.location.reload(); 
	}
}

function setcookie(name,value,expireHours){
	var cookieString=name+"="+escape(value);
	if(expireHours>0){
		var date=new Date();
		date.setTime(date.getTime+expireHours*3600*1000);
		cookieString=cookieString+"; expire="+date.toGMTString();
	}
	cookieString=cookieString+"; path=/; domain=.luxtarget.com";
	document.cookie=cookieString;
}

function showTxt(CN_txt, EN_txt){
	var txt = CN_txt;
	if (languageMark == "EN") {
		txt = EN_txt;
	}
	document.write(txt);
}


//投票验证
function check_votes(allowCount) {
var voteItems=document.getElementsByName('itemIds');
  var count = 0;
  for(var i=0;i<voteItems.length;i++)
  {
   if(voteItems[i].checked){
     count++;
   }
  }
  if(count==allowCount&&allowCount>1){
   for(var i=0;i<voteItems.length;i++){
     if(!voteItems[i].checked){
       voteItems[i].disabled = true;
     }
   }
   return true;
  }
  else{
    for(var i=0;i<voteItems.length;i++){
       voteItems[i].disabled = false;
    }
  }
  if(count==0){
	  alert("对不起，请至少选择一个投票项！");
	  return false;0
  }
  return true;
}