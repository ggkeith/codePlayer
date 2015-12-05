	var windowHeight = $(window).height();
	var menuBarHeight = $("#menuBar").height();
	var codeContainerHeight = windowHeight - menuBarHeight;

	
	$(".codeContainer").height(codeContainerHeight + "px");