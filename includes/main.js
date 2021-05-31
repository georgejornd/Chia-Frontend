
	$("body").on('click', '[href*="#"]', function(e){
	  var fixed_offset = 0;
	  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 700);
	  e.preventDefault();
	});

	function responsive_bar()
	{
		var x = document.getElementById("responsive_header");
	    if (x.className === "header-links-container") {
	        x.className += " responsive";
	    } else {
	        x.className = "header-links-container";
	    }
	}
	