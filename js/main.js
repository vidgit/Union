var numberOfTerms = 5;
var data = [];
function reset(){
	$('#workArea').empty();
	$("#numberOfTerms").val("");
	$("#numberOfTerms").prop("disabled",false);
	$("#numberOfTermsLbl").prop("disabled",false);
}

function changeButton(id){
	id = "#"+id;
	if($(id).attr('class').split(/\s+/).length == 3 )
		$(id).removeClass($(id).attr('class').split(/\s+/)[2]).addClass("btn-danger");
	else
		$(id).addClass("btn-danger");
}

function initialize(){
	
	for(var i = 1; i<=numberOfTerms; i++)
	{
		$("#workArea").append('<div id="'+i+'" class="number btn" onclick="changeButton(this.id)">'+i+'</div>');
		$("#"+i).removeClass($("#"+i).attr('class')).addClass("number btn");
		$("#"+i).addClass("btn-info");
	}
}

function setNumberOfTerms(){
	numberOfTerms = $("#numberOfTerms").val();
	$("#numberOfTerms").prop("disabled",true);
	$("#numberOfTermsLbl").prop("disabled",true);
	initialize();
}