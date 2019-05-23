$( document ).ready(function() {
    console.log( "ready!" );
	
	$( document).on( "keydown", function( event ) {
   console.log (  event.which );
   
  if (event.keyCode == 38){
	   console.log("haut");
	    $("#cool").animate({ marginTop: '-=50px', opacity: 0.5 }, 1000);
  }
  if (event.keyCode == 37)	{
	   console.log("gauche");
	    $("#cool").animate({ marginLeft: '-=50px', opacity: 0.5 }, 1000);

	 
  }
  if (event.keyCode == 39){
	  console.log("droit");
	   $("#cool").animate({ marginLeft: '+=50px', opacity: 0.5 }, 1000);
  }
  if (event.keyCode == 40){
	   console.log("bas");
	    $("#cool").animate({ marginTop: '+=50px', opacity: 0.5 }, 1000);
	   
  }
	
	  
	 
	
	
});
});