$(document).ready(function(){
	var largura = $(window).width();

	if (largura > 720){
		// Mostrar e sumir o menu lateral
		$('#seta').mouseenter(function(){
			$('.navbar').fadeIn();
		});	
		$('.navbar').mouseleave(function(){
			$('.navbar').fadeOut();
		});	
	}
	
});
