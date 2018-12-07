require(["../js/config.js"],function(){
	require(['mui','dom','params'],function(mui,dom,params){
		mui.init();
		
		var id = params.id
		console.log(params)
		
		if(id){
			mui.ajax('/users/api/detail',{
				data:{
					id:id
				},
				success:function(res){
					console.log(res)
					if(res.code == 1){
						var data = res.data[0];
						dom(".username").value = data.username;
						dom(".age").value = data.age;
						dom(".tel").value = data.tel;
						dom(".address").value = data.address;
						dom(".id-card").value = data.id_card;
						
					}
				}
			})
		}
		
		
		//点击添加
		dom(".sureAdd").addEventListener('tap',function(){
			var name = dom(".username").value,
				age = dom(".age").value,
				tel = dom(".tel").value,
				address = dom(".address").value,
				idCard = dom(".id-card").value;
			console.log(name)
			if(!name || !idCard){
				alert("姓名和身份证为空！")
			}else{
				
				
				//修改后.如果有id ，则接口为修改接口 
				var url = id ?  '/users/api/update' : '/users/api/add';
				console.log(url)
				
				mui.ajax(url,{  //url  接口
					type:'post',
					data:{
						username:name,
						age:age,
						tel:tel,
						address:address,
						id_card:idCard,
						id:id
					},
					dataType:'json',
					success:function(res){
						console.log(res)
						location.href = "../index.html"
					}
				})
				console.log(555)
			}
			
		});	
			
		//点击删除
		
	})
})