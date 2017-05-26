
$(function(){
//放大镜
	(function(){
		$(".bigGlass").hover(function(){
		$(".smallCursor").stop().fadeIn();
		$(".bigCursor").stop().fadeIn();

		$(this).mousemove(function(ev){
			var l=ev.pageX - 160;
			var t=ev.pageY - 270;
			if(l<0){
				l=0;
			
			}else if(l>$(".bigGlass").width()-$(".smallCursor").width()){
				l=$(".bigGlass").width()-$(".smallCursor").width();
			}

			if(t<0){
				t=0;
			}else if(t>$(".bigGlass").height()-$(".smallCursor").height()){
				t=$(".bigGlass").height()-$(".smallCursor").height();
			}

			$(".smallCursor").css("left",l);
			$(".smallCursor").css("top",t);

			var sx=l/($(".bigGlass").width()-$(".smallCursor").width());
			var sy=t/($(".bigGlass").height()-$(".smallCursor").height());
			var bigW=sx*($(".bigImg").width()-$(".bigCursor").width());
			var bigH=sy*($(".bigImg").height()-$(".bigCursor").height());

			$(".bigImg").css("left",-bigW);
			$(".bigImg").css("top",-bigH);

		});

	},function(){

		$(".smallCursor").stop().fadeOut();
		$(".bigCursor").stop().fadeOut();
	});
})();
//物品数量增加/减少
	(function(){
		var num=$(".numberAdd").html();
		$(".add").click(function(){
			
			num++;
			$(".numberAdd").html(num);
		});
		$(".subtract").click(function(){
			if(num>1){
				num--;
			}else{
				num=1;
			}
			$(".numberAdd").html(num);
		})
	})();
//商品数量和价钱改变
	(function(){
		$(".putInShopCar").click(function(){
			$(".append").fadeIn();
			$(".havenumber").html($(".numberAdd").html());
			//console.log($(".pricenow").html());
			$(".everthing").html($(".pricenow").html()*$(".numberAdd").html());
		});
		
	})();

//加入购物车cookie
	(function(){
		$(".putInShopCar").click(function(){
			//var $haveNum=$(".havenumber").html($(".numberAdd").html());
			var $gp=$(".everthing").html(parseInt($(".pricenow").html())*parseInt($(".numberAdd").html()));
			//console.log($gp.html())
			var $goodsname=$(".ftI a").html();
			var $goodssize=$(".sizeNum").html();
			var $goodsnumber=$(".numberAdd").html();
			var $goodsprice=$gp.html();
			var $nowPrice=$(".pricenow").html();
			var goodsInfo={
				"goodsprice":$goodsprice,
				"goodsnumber":$goodsnumber,
				"goodssize":$goodssize,
				"pricenow":$nowPrice,
			
			}
			
			goodsInfo = JSON.stringify(goodsInfo);
			//console.log(goodsInfo+","+$goodsname)
			oCookie.addCookie($goodsname,goodsInfo,30);

		});
	})();

	(function(){
		var $goodsCoo=$(".goodsContent");
		var $demo=$(".goodsContent li").eq(0);
		if(document.cookie){
			var cookies = document.cookie.replace(/\s+/g,"").split(";");
			var reg=/goodsnumber/;

			for(var i=0;i<cookies.length;i++){
				//console.log(cookies[i]);
				if(reg.test(cookies[i])){
					//console.log(cookies[i]);
					cookies[i].split("=");
					//console.log(cookies[i].split("="));
					var $right=JSON.parse(cookies[i].split("=")[1]);
					var $number=$right.goodsnumber;
					var $price=$right.goodsprice;
					var $size=$right.goodssize;
					var $name=(cookies[i].split("=")[0]);
					var $prin=$right.pricenow;
					//console.log(JSON.parse(cookies[i].split("=")[1]));
					//console.log(oCookie.getCookie($right));
					//console.log($(".goodsContent li").eq(1).html());
					//console.log($right.goodsname)
					var str='<ul><li class="total"> <input type="checkBox"/> <a href="##" title="" class="goodsphoto"><img src="images/dog.jpg" alt=""></a></li><li class="goodsNmae">'+$name+'</li><li class="attribute">'+$size+'</li><li class="coupon">'+$prin+'</li><li class="shopNumber"><i class="subtract">ㅡ</i> <span class="numberAdd">'+$number+'</span> <i class="add">+<i></li><li class="activeIn">暂无</li><li class="subtotal">'+$price+'</li><li class="operate"><a href="##">删除</a></li></ul>';
				
					$(".goodsContent").append(str);
					//var oClone=$demo.cloneNode(true);
					//oClone.$(".goodsContent li").eq(1).html()="police";
				}
			}
		}
	})();	
})