function reset(){
	$("#one").removeClass($('#one').attr('class')).addClass("number btn btn-info");
	$("#two").removeClass($('#two').attr('class')).addClass("number btn btn-info");
	$("#three").removeClass($('#three').attr('class')).addClass("number btn btn-info");
	$("#four").removeClass($('#four').attr('class')).addClass("number btn btn-info");
	$("#five").removeClass($('#five').attr('class')).addClass("number btn btn-info");
}

function changeButton(id){
	id = "#"+id;
	$(id).removeClass($(id).attr('class').split(/\s+/)[2]).addClass("btn-danger");
}

function initialize(n){
	var data=[]

	for (var i = 0; i < n; i++) {
		var o={
			"id": i,
			"class": "btn-info",
		}
		data.push(o);
	}
}