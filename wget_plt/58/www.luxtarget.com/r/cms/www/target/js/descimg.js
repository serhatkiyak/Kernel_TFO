imgLoad();
window.onscroll = function(){imgLoad();}

function pageTop()
{
	return document.documentElement.clientHeight + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}

function getPosition(e)
{
   var top = 0;
   while (e.offsetParent)
   {
     top += e.offsetTop;
     e = e.offsetParent;
   }
   top += e.offsetTop;
   return top;
}

function imgLoad()
{
	var img = document.images;
	for(var i=0; i< img.length; i++)
	{
		var o = img[i];
		var vtop = getPosition(o);
		var src2 = o.src2;
		src2 = o.getAttribute('src2');
		var src = o.src;
		src = o.getAttribute('src');
		if (vtop <= pageTop())
		{
			if(!src)
			{
				o.src = src2;
				o.setAttribute('src', src2);
			}
		}
	}
}