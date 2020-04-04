$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});


$("ul").on("click","span",function(){
	$(this).parent().remove();
	event.stopPropagation();
});

$("input[type=text]").keypress(function(event){
	if(event.which===13){
		var newtoDo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ newtoDo +"</li>");
	}
});

$("h1").on("click",function(){
	let newtoDo1 = $("input[type=text]").val();
		$("input[type=text]").val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ newtoDo1 +"</li>");
});
