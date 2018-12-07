define(function(){
	var url = location.search;
	var params = {};
	
	if(url.indexOf('?') != -1){
		url = url.substr(1);
		var bArr = url.split('&');
		bArr.forEach((i)=>{
			var sArr = i.split('=')   //[id,10]
			
			params[sArr[0]] = sArr[1];
			
		})
	}
	return params
	
})