/* jshint asi: true */
jQuery( document ).ready(function() {
	'use strict'
	
	//window.document.designMode = "On";
	
	$('#button-holder').draggable()
	
	$('form').click( function(e){
	
		var newPosition = $(e.target).position()
		newPosition.left = newPosition.left + $('form').outerWidth() + 5
		if ( newPosition.left > 0 ) {
			$('#button-holder').animate( newPosition )
		}
		
	})
	
	$('.btn').click(function(){
		document.execCommand($(this).attr('id'), false, null )
	})
})

