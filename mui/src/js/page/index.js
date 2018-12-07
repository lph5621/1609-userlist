require(['./js/config.js'],function(){
	require(['mui','dom'],function(mui,dom){
		mui.init();
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
		
		//查找所有数据接口
		mui.ajax("/users/api/userlist",{
			dataType:'json',
			success:function(res){
				console.log(res)
				if(res.code == 1){
					renderList(res.data)
				}
			}
		});
		//渲染列表
		function renderList(data){
			var str = '';
			data.forEach((item)=>{
				str += `<li class="mui-table-view-cell">
							<a class="mui-navigate-right" >${item.username}</a>
							<button type="button" class="mui-btn mui-btn-blue select" data-id='${item.id}'>查看</button>
							<button type="button" class="mui-btn mui-btn-danger delete" data-id='${item.id}'>删除</button>						
						</li>`
			})
			//console.log(mui(".mui-list")[0])
			//mui(".mui-list")[0].innerHTML += str;
			console.log(dom('.mui-list'))
			dom('.mui-list').innerHTML += str;
		}
		
		//点击添加
		dom('.add').addEventListener('tap',function(){
			console.log(555)
			
			location.href = './page/add.html'
			
		})
		
		//点击查看详情
		
		mui(".list").on('tap','.select',function(){
			var id = this.getAttribute('data-id');
			location.href = './page/detail.html?id='+id
		})
		
		//点击删除
		
		mui('.list').on("tap",".delete",function(){
			var id = this.getAttribute('data-id');
			var that = this;
			mui.confirm("是否确定删除？","提示",["取消","确定"],function(index){
				console.log(index)
				if(index.index == 1){
					mui.ajax('/users/api/del',{
						data:{
							id:id
						},
						success:function(res){
							console.log(res)
							if(res.code == 1){
								dom(".list").removeChild(that.parentNode)
							}
						}
					})
				}
			})
			
		})
	})
})

