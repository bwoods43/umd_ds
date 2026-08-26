(function ($) {
   "use strict"; 
  Drupal.behaviors.myDSLoadedBehavior = { 
    attach: function (context, settings) {      

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

			/* accordion component - currently does no processing */
      const element_accordion = document.querySelectorAll('umd-element-accordion');
      if (element_accordion) {
     		// named tag, but ensure it's rendered to do processing
     		customElements.whenDefined('umd-element-accordion-item').then(() => {
     			// named DS tag
  				const hostElements = document.querySelectorAll('umd-element-accordion-item');
  				// target class within the DS tag
  				hostElements.forEach((hostElement) => {
  					const targetElement = hostElement.shadowRoot.querySelector('.accordion-headline p');
						//targetElement.style.color = 'black';  
					}); 				
  			});
  		}
    }
  };  
})(jQuery);