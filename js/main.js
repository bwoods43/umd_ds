(function ($) {
   "use strict"; 
  $(window).on('load', function(){
   
		/* https://www.w3schools.com/howto/howto_js_accordion.asp */ 
  	var acc = document.getElementsByClassName("accordion-headline");
		var i;

		for (i = 0; i < acc.length; i++) {
  		acc[i].addEventListener("click", function() {
    		/* Toggle between adding and removing the "active" class,
    		to highlight the button that controls the panel */
    		this.classList.toggle("active");

    		/* Toggle between hiding and showing the active panel */
    		var panel = this.nextElementSibling;
    		console.log(this.nextElementSibling);
    		console.log(panel.style.display);
    		if (panel.style.display === "block") {
      		panel.style.display = "none";
      		panel.style.height = "0";
    		} else {
      		panel.style.display = "block";
      		panel.style.height = "auto";
    		}
  		});
		}
  
		/* basic play button for name pronunciation */
		// Get references to the HTML elements
		const playButton = document.getElementById('playButton');
		const playLink = document.getElementById('playLink');
		const myAudio = document.getElementById('myAudio');

		if (playButton) {
			// Add an event listener to the button
			playButton.addEventListener('click', () => {
    		// Play the audio when the button is clicked
    		myAudio.play();
			});  

			// Add an event listener to the link
			playLink.addEventListener('click', () => {
    		// Play the audio when the button is clicked
    		myAudio.play();
			}); 				
		}

  });
})(jQuery);


/* search functionality */
document.querySelectorAll('.search-region .icon').forEach(icon => {
  icon.addEventListener('click', function(e) {
    const parentElement = this.parentNode;
    parentElement.classList.toggle('show');
  	e.stopPropagation();
	});
}); 