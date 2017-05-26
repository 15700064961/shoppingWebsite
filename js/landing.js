$(function(){
//cookies登录
	(function(){
		$(".in").click(function(){
			if($(".name-landing").val() == ""){
				$(".nohave").show();
			}
			if($(".pw-landing").val() == ""){
				$(".nohave1").show();
			}
			if(oCookie.getCookie($(".name-landing").val()) == $(".pw-landing").val()){
				window.location.href = "index.html";
			}else{
				alert("密码与用户名不匹配，请重新输入!");
			}
				
			

		
			
		});
	})();
})