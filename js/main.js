var numberOfTerms = 5;
var data = [];
function reset(){
	/*alert("reset");*/
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
	/*alert("init");*/
	for(var i = 1; i<=numberOfTerms; i++)
	{
		$("#workArea").append('<div id="'+i+'" class="number btn" onclick="changeButton(this.id)">'+i+'</div>');
		$("#"+i).addClass("number btn btn-info");
	}
}

function setNumberOfTerms(){
	numberOfTerms = $("#numberOfTerms").val();
	$("#numberOfTerms").prop("disabled",true);
	$("#numberOfTermsLbl").prop("disabled",true);
	initialize();
}