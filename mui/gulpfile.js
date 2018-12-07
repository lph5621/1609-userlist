var gulp = require("gulp");
var server = require("gulp-webserver");

gulp.task("server",function(){
	return gulp.src("./src")
	.pipe(server({
		port:9700,
		proxies:[
			{source:"/users/api/userlist",target:"http://192.168.2.177:7000/users/api/userlist"},
			{source:"/users/api/add",target:"http://192.168.2.177:7000/users/api/add"},
			{source:"/users/api/detail",target:"http://192.168.2.177:7000/users/api/detail"},
			{source:"/users/api/update",target:"http://192.168.2.177:7000/users/api/update"},
			{source:"/users/api/del",target:"http://192.168.2.177:7000/users/api/del"}
		]
	}))
})