
var panelCount = 1;
$(function(){
	$("#panelTemplate").tmpl({panelNum:panelCount,url:$("#pageUrl").val()}).appendTo("#panelsContainer");
	
	$(".panelResolution").live("change", function(){
		var res = $(this).val().split("|");
		var ifrm = $(this).parent().siblings("iframe");
		ifrm.width(res[0]);
		ifrm.height(res[1]);
	});	
	$("#goButton").live("click", function(e) {
		$("iframe").attr("src",$("#pageUrl").val());
	});
	$("#addFrame").click(function(e) {
		panelCount++;
		$("#panelTemplate").tmpl({panelNum:panelCount,url:$("#pageUrl").val()}).appendTo("#panelsContainer");
	});
	$(".removeButton").live("click", function(){
		$(this).parents(".panel").remove();
	});			
});

function refreshFrames(){
	$("iframe").attr("src",$("#pageUrl").val());
}
		
