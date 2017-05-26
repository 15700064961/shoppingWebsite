
	$(function(){
		var $uli = $(".bottom-left li");
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
	});
	})