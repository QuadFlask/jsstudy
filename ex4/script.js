 window.onload = function(){
	$.ajax({
		url: "http://127.0.0.1:8080/jsontest.photo?name=flask2&age=12",
		method: "POST",
		dataType: "json",
		data: {}
	}).done(function (data) {
		log(data);
		console.log(data);
	});
	 
	$.getJSON("http://localhost:8080/jsontest.photo?name=flask2&age=12", function(data){
		log(data);
		console.log(data);
	});
}