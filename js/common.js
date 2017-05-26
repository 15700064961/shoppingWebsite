$(function() {


	//ajax

	$.ajax("header.json")
		.done(function(data) {
			a(data);
			$(".listpic1").hover(function() {
				var $index = $(this).index();
				$(this).find("span").animate({
					"height": 250
				}, 80).animate({
					"top": 200
				}, 150)
			}, function() {
				$(this).find("span").animate({
					"top": 270
				}, 200);
			});
		})
		.fail(function(err) {
			alert(err.status);
		})
		//最顶上的查看详情部分
	var $oT = $(".outTime");
	$oT.click(function() {
		$(this).find(".topSide").show();
	});
	$(".topSide span").click(function() {

		$('.topSide').hide();
		return false;
	});

	//登录 注册部分
	var $down = $(".header .header-right .my");
	$down.hover(function() {

		$(this).find("span").eq(0).css("background", "url(images/share2.png) no-repeat -243px -465px");
		$(this).css("background", "  url(images/share2.png) no-repeat -243px -465px");
		$(this).find("#header-js").eq(0).show();
	}, function() {
		$(this).find("span").eq(0).css("background", "url(images/share2.png) no-repeat -233px -299px");
		$(this).css("background", "none");
		$(this).find("#header-js").eq(0).hide();
	});

	var $downPhone = $(".header .header-right .phone");
	$downPhone.hover(function() {
		$(this).find("span").eq(0).css("background", "url(images/share2.png) no-repeat -287px -412px");
		$(this).find(".phone-js").eq(0).show();
	}, function() {
		$(this).find("span").eq(0).css("background", "url(images/share2.png) no-repeat -285px -376px");
		$(this).find(".phone-js").eq(0).hide();
	});

	var $sP = $("dl");
	$sP.hover(function() {
		$("dl > .shopCar-js").stop().slideDown("fast");
		//$("dl > dt").css("border-bottom","10px");
	}, function() {
		$("dl > .shopCar-js").stop().slideUp("fast");

	});
	//导航部分
	$(".list2").hover(function() {
		$(this).find("i").eq(0).css("background", "url(images/share.png) no-repeat -366px -259px");
	}, function() {
		$("i").css("background", "url(images/share.png) no-repeat -57px -176px");
	});
	//导航右边

	var $sP1 = $(".nav-right li");
	$sP1.hover(function() {
		var $index = $(this).index();
		var i = 80;
		$(this).stop().animate({
			"left": -i + ($index * 29),
			"width": "115"
		}, "slow").css("z-index", 99);
		//$(".span1 + b").eq(0).animate({"left":"-20","width":"20"},"slow").css("z-index",999);
		//$(this).find("b").eq(0).html().stop().animate({"left":"-100","width":"100"},"slow").css("z-index",999);

	}, function() {
		var $index = $(this).index();
		$(this).stop().animate({
			"width": 29,
			"left": 29 * $index
		}, "slow");


		//$(".span1 + p").stop().eq(0).animate({left:""},"slow").hide();
	});


	//nav部分
	$(".list1").hover(function() {
		$(".list1 > .goodsClassifyBox").eq(0).show();



		$(".goodsClassOne").hover(function() {

			$(".goodsClassOne > .goodsClassRight").eq(0).show().css("opacity", 0.85);
			$(".goodsClassOne").css("background", "gray");
			$(".goodsClassOne > span").eq(0).css("background", "url(images/nav.png) no-repeat -20px -11px");
		}, function() {
			$(".goodsClassOne > .goodsClassRight").eq(0).hide();
			$(".goodsClassOne").css("background", "none");
			$(".goodsClassOne > span").eq(0).css("background", "url(images/nav2.png) no-repeat -20px -11px");
		});



	}, function() {
		$(".list1 > .goodsClassifyBox").eq(0).hide();
	});

	$(".goodsClassTwo").hover(function() {
		$(".goodsClassTwo > .goodsClassRight2").eq(0).show();
		$(".goodsClassTwo").css("background", "gray");

		$(".goodsClassTwo > span").eq(0).css("background", "url(images/nav.png) no-repeat -20px -43px");
		$(".goodsClassTwo > span").eq(1).show();
	}, function() {
		$(".goodsClassTwo > .goodsClassRight2").eq(0).hide();
		$(".goodsClassTwo").css("background", "none");
		$(".goodsClassTwo > span").eq(0).css("background", "url(images/nav2.png) no-repeat -20px -43px");
		$(".goodsClassTwo > span").eq(1).hide();
	})
	var $gco = $(".goodsClassOne > span");
	$(".goodsClassOne").hover(function() {
		$gco.eq(1).show();
	}, function() {
		$gco.eq(1).hide();
	});

	//品牌旗舰部分
	function a(data) {
		for (var i = 0; i < 5; i++) {
			var ul = '<li class="listpic1"><a href="goodsInformation.html"><img src="' + data[i].src1 + '" alt=""><span class="picone"><img src="' + data[i].src2 + '" alt=""/><p>' + data[i].p1 + '</p><p>' + data[i].p2 + '</p></span></a></li>';
			$(".piclist").append(ul);
		}
	}



	//热门旗舰部分

	$(".hotStoreBox span").hover(function() {
		$(this).find("#hotStoreChange").stop().fadeIn("fast");


		$(this).find("#hotStoreChange").css("border", "1px solid #000");

		$(".headerT").hover(function() {
			$(this).find("a").stop().css("color", "#bc8e62");
		}, function() {
			$(this).find("a").stop().css("color", "#000");
		})
	}, function() {
		$(this).find("#hotStoreChange").stop().fadeOut("fast");
	});

	//主题活动部分
	/*			var $uli = $(".bottom-left li");
				var $oli = $(".bottom-right li");
				$oli.addClass("hide");
				$oli[0].className = "show";
				
				$uli[0].className = "hover";
	$uli.hover(function(){
		var index = $(this).index();
		$uli.find("img").eq(index).css("border","1px solid #000");
		

		$oli.removeClass().addClass("hide");
		$oli.eq(index).removeClass().addClass("show");

		
	},function(){
		$uli.find("img").css("border","1px solid #cccccc");
	});*/

	//轮播图部分
	var timer = null;
	var $index = 0;
	var $preindex = 0;
	$(".btn li").mouseover(function() {
		scrollPlay();
		clearInterval(timer);
		$index = $(this).index();

		$preindex = $index;

	}).mouseout(function() {
		autoPlay();
	});

	$(".btnleft").click(function() {
		$index++;

		if ($index < 0) {
			$index = 6;
			$preindex = 0;
		}
		scrollPlay();
		$preindex = $index;
		clearInterval(timer);
		autoPlay();
	});

	$(".btnright").click(function() {
		$index++;
		if ($index > 6) {
			$index = 0;
			$preindex = 6;
		}
		scrollPlay();
		$preindex = $index;
		clearInterval(timer);
		autoPlay();
	});


	autoPlay();

	function autoPlay() {
		timer = setInterval(function() {
			$index++;
			if ($index > 6) {
				$index = 0;
				$preindex = 6;
			}
			scrollPlay();
			$preindex = $index;
		}, 1000)
	}


	function scrollPlay() {
		$(".btn li").eq($index).addClass("hover").siblings().removeClass("hover");
		if ($index == 0 && $preindex == 6) {
			//console.log($preindex);
			//console.log($index);
			$(".bannerBox li").eq($preindex).stop(true, true).animate({
				"left": "-1440px"
			});

			$(".bannerBox li").eq($index).css("left", "1440px").stop(true, true).animate({
				"left": "0"
			});

		} else if ($index == 6 && $preindex == 0) {
			$(".bannerBox li").eq($preindex).stop(true, true).animate({
				"left": "1440px"
			});
			$(".bannerBox li").eq($index).css("left", "-1440px").stop(true, true).animate({
				"left": "0"
			});

		} else if ($index > $preindex) {
			$(".bannerBox li").eq($preindex).stop(true, true).animate({
				"left": "-1440px"
			});
			$(".bannerBox li").eq($index).css("left", "1440px").stop(true, true).animate({
				"left": "0"
			});
		} else if ($index < $preindex) {
			$(".bannerBox li").eq($preindex).stop(true, true).animate({
				"left": "1440px"
			});
			$(".bannerBox li").eq($index).css("left", "-1440px").stop(true, true).animate({
				"left": "0"
			});

		}
	}


	//轮播图左右按钮
	$("#banner").hover(function() {
		$(".btnright").stop().fadeIn(500);
		$(".btnleft").stop().fadeIn(500);
	}, function() {
		$(".btnleft").stop().fadeOut(500);
		$(".btnright").stop().fadeIn(500);
	});

	//商场同款部分

	(function() {
		$(".title li").hover(function() {
			var $index = $(this).index();

			$(".title li").eq($index).css("background", "#000");


		}, function() {
			$(".title li").css("background", "#999999");
		})
	})();
	(function() {
		$(".box1-right dl").hover(function() {
			var $index = $(this).index();
			$(".box1-right dd").eq($index).animate({
				"left": "-10px"
			});
		}, function() {})

	})();



	//Pop

	(function() {
		$(".draw-right").click(function() {
			$(".draw-right >.draw-box").eq(0).show();
		})
		$(".stop").click(function() {
			$(".stop ").parent(".draw-box").hide();
		})
	})();

	(function() {
		$(".backTop").mouseover(function() {
			$(".backTop > .backTopT").eq(0).show();

		});
		$(".backTop").mouseout(function() {
			$(".backTop > .backTopT").eq(0).hide();
			$(".backTop").click(function() {
				var speed = 200;
				$("body,html").stop().animate({
					"scrollTop": "0"
				}, speed);
				return false;
			});
		});
	})();
	(function() {
		$(".weixin").hover(function() {
			$(".weixin .weixinma").stop().fadeIn();
		}, function() {
			$(".weixin .weixinma").stop().fadeOut();
		})
	})();

	(function() {
		$(".bottomPop span").click(function() {
			$(".bottomPop").hide();
		})
	})();
	//热门旗舰
	(function() {
		var $index = $(this).index();
		$("#hotStore i").click(function() {
			//console.log($("#hotStore ul").position().left);
			$(".hotStoreBox ul").animate({
				left: "-1275px"
			});
			$(".hotStoreBox .hsb2").show();

			$("#hotStore a").click(function() {
				$(".hotStoreBox ul").animate({
					left: "0px"
				});
				$(".hotStoreBox .hsb2").fadeOut();
			})
		})
	})();

});