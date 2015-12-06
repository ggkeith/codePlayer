	var windowHeight = $(window).height();
	var menuBarHeight = $("#menuBar").height();
	var codeContainerHeight = windowHeight - menuBarHeight;


	$(".codeContainer").height(codeContainerHeight + "px");

	$(".toggle").click(function() {

		$(this).toggleClass("selected");

		var activeDiv = $(this).html();

		$("#" + activeDiv + "Container").toggle();

		var showingDivs = $(".codeContainer").filter(function() {
			return($(this).css("display") != "none");
		}).length;

		var width = 100/showingDivs;

		$(".codeContainer").width(width + "%");
	});

	var cssCode = $("#cssCode").val();
	var htmlCode = $("#htmlCode").val();

	$("#runButton").click(function() {
		$("iframe").contents().find("html").html('<style>' + cssCode + '</style>') + htmlCode;


	eval("#jsCode").val();

	});