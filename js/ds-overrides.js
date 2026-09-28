(function ($) {
   "use strict"; 
  Drupal.behaviors.myDSLoadedBehavior = { 
    attach: function (context, settings) {      

			/* individual selector example */
			/* hero component - currently does no processing */
      const element_hero = document.querySelector('umd-element-hero');
      if (element_hero) {
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

			/* multiple selector example */
			/* news component - keep image styles instead of converting to tiny mobile images */
      const element_accordion = document.querySelectorAll('umd-element-article');
      if (element_accordion) {
     		// named tag, but ensure it's rendered to do processing
     		customElements.whenDefined('umd-element-article').then(() => {
     			// named DS tag
  				const hostElements = document.querySelectorAll('umd-element-article');
  				// target class within the DS tag
  				hostElements.forEach((hostElement) => {
  					const targetElement = hostElement.shadowRoot.querySelector('.layout-block-stacked-image');
						targetElement.style.width = 'initial';  
						targetElement.style.marginLeft = 'initial'; 
					}); 				
  			});
  		}
    }
  };  
})(jQuery);