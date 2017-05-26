
	
$(function(){
	
	(function(){

//手机号验证
		$(".phoneNum").focus(function(){
			$(".phoneNum ~ .focus").fadeIn();
			setInterval(function(){
				$(".phoneNum ~ .focus").fadeOut();
			},2000)
		

		$(".phoneNum").blur(function(){
			var reg=/^1[3|5|6|8]\w{9}$/;
			var p=$(".phoneNum").val();
			if(!reg.test(p)){
				$(".phoneNum ~ .erro").fadeIn();

			} else{
				$(".phoneNum ~ .erro").html("输入正确!").fadeIn().css("color","green");
			}
		})
	});

})();

//密码验证
	(function(){
		$(".pws").focus(function(){
			$(".pws ~ .pwfocus").html("请输入密码！").fadeIn().css("color","green");
			setInterval(function(){
				$(".pws ~ .pwfocus").fadeOut();
			},3000)

		$(".pws").blur(function(){
			var pws=$(".pws").val();
			if(pws==""){
				$(".pws ~ .pwfocus").html("密码不能为空!").fadeIn().css("color","red");
				$(".safe > li").css("background","white");
			}
		});
			$(".pws").keydown(function(){
				var reg=/[#\.\$\%\*\~\@\!\^\&\_\-\?]/;//高
				var reg1=/[0-9]/;//低
				var reg2=/[a-z]/;//低
				
				var pws=$(".pws").val();
				var a=0;
				var b=0;
				var c=0;
				if(pws==""){
					$(".safe > li").css("background","white");
				}
				if(reg1.test(pws)){
					a=1;
					//$(".safe > .pw").css("background","red");
				}
				 if(reg2.test(pws)){
					b=1;
					//$(".safe > .pw").css("background","red");
				}
				if(reg.test(pws)){
					c=1;
					//$(".safe > .pw3").css("background","green");
				}

				if(a+b+c == 3){
					$(".safe > .pw3").css("background","green");
				}
				if(a+b+c == 2){
					$(".safe > .pw2").css("background","yellow");
				}
				if(a+b+c == 1){
					$(".safe > .pw").css("background","red");
				}

			});
		});

		$(".confrim").focus(function(){
			$(".confrimT").fadeIn();
			setInterval(function(){
				$(".confrimT").fadeOut();
			},3000)
		//var pws=$(".pws").val();
		//var con=$(".confrimT").val();
//密码验证确认
		$(".confrim").blur(function(){

			if($(".confrim").val() == $(".pws").val()){
				$(".pwSame").fadeIn();
				$(".pwErro").fadeOut();
			}else{
				$(".pwErro").fadeIn();
				$(".pwSame").fadeOut();
			}
		

			if($(".confrim").val()== ""){
				$(".pwSame").fadeIn().html("密码不能为空").css("color","red");
			}
		})
			
			
		})

	})();

//验证码
	(function(){
		$(".picCode").html(function(){
			$(".picCode").html(number(1000,9999));
		})
		function number(a,b){
			return Math.floor(Math.random()*(b-a))+a;
		}
		number(1000,9999)

		$(".change").click(function(){
			$(".picCode").html(number(1000,9999));
		})

		$(".phoneT").focus(function(){
			$(".testCode").fadeIn();
			
				setInterval(function(){
				$(".testCode").fadeOut();

			},3000)
		

			$(".phoneT").blur(function(){console.log($(".picCode").val())
				if($(".phoneT").val() == $(".picCode").html()){
					$(".successCode").fadeIn();
					
				}else{
					$(".successCode").fadeIn().html("重新输入");
				}
				setInterval(function(){
					$(".successCode").fadeOut();
				},2000)

			})
		})
	})();

//点击注册按钮
	(function(){
		$(".submit").click(function(){
		
		var $userPhone=$(".phoneNum").val();
		var $userPassWord=$(".confrim").val();
		oCookie.addCookie($userPhone,$userPassWord,30);
		
		})
	})();
})