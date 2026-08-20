(function ($) {
   "use strict"; 
  Drupal.behaviors.myDSLoadedBehavior = { 
    attach: function (context, settings) { 
    	// unique name for once-called function, then include parent div class of DS tag    
      once('my-class-once', '.paragraph--type--hero', context).forEach(function (element) {
     		// named tag, but ensure it's rendered to do processing
     		customElements.whenDefined('umd-element-hero').then(() => {
     			// named DS tag
  				const hostElement = document.querySelector('umd-element-hero');
  				// target class within the DS tag
  				const targetElement = hostElement.shadowRoot.querySelector('.umd-campaign-extralarge');
  				// make style edits
					//targetElement.style.color = 'blue';  
					// confirm that targetElement is being populated
  				//console.log('target element', targetElement);
  			});
     	} 
    )}
  };  
})(jQuery);