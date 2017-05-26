$(function(){
	//物品数量增加/减少
	(function(){
		var num=$(".numberAdd").html();
		$(".add").click(function(){
			
			num++;
			$(".numberAdd").html(num);
			//$(".coupon").html()*$(".numberAdd").html();
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

	(function(){
		$(".priceNumber").html($(".numberAdd").html()*1316)
		
	})();
})







