require(["../js/config.js"],function(){
	require(['mui','dom','params'],function(mui,dom,params){
		mui.init();
		
		var id = params.id;
		
		mui.ajax("/users/api/detail",{
			data:{
				id:id
			},
			dataType:'json',
			type:'get',
			success:function(res){
				console.log(res)
				var data = res.data[0];
				if(res.code == 1){
					dom('.name').innerHTML = data.username;
					dom('.age').innerHTML = data.age;
					dom('.tel').innerHTML = data.tel;
					dom('.address').innerHTML = data.address;
					dom('.id_card').innerHTML = data.id_card;
				}
			}
		})
		//点击修改
		dom(".mui-edit").addEventListener('tap',function(){
			location.href = './add.html?id='+id
		})
	})
})