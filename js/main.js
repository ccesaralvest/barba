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

		// Efeito no background
		// $('.section-inicial').css("background-size","100%");
		// $('.section-inicial').animate({"background-size":"150%"}, 900, "linear");
		
		$('.section-inicial').mouseenter(function(){
			//$(this).css("background-size","100%");
			//$(this).animate({"background-size":"150%"}, 6000, "linear");
		});
	}
	

});
