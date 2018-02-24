(function() {
	'use strict';

	var templatesEl = document.querySelector('.templates'),
		templateEls = document.querySelectorAll('.template'),
		templatesData = [
			{
				'image': "../Templates/Atul's Photography/Screenshot.png",
				'view': "../Templates/Atul's Photography/index.html"
			},
			{
				'image': "../Templates/Template 1/Screenshot.png",
				'view': "../Templates/Template 1/index.html"
			},
			{
				'image': "../Templates/Shopping Site/Screenshot.png",
				'view': "../Templates/Shopping Site/index.html"
			}
		];

	function addTemplate(data) {
		let template = `
			<div class="template">
				<img src="${data.image}" alt="Template">
				<div class="btns">
					<a href="${data.view}" id="view-btn" class="btn">View</a>
				</div>
			</div>`;

		templatesEl.insertAdjacentHTML('beforeend', template);
	}

	for(let i in templatesData) {
		addTemplate(templatesData[i]);
	}


	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('../service-worker.js')
			.then(function(registration) {
				// Registration was successful    
				console.log('ServiceWorker registration successful with scope: ',    registration.scope);  
			}).catch(function(err) {    
				// registration failed : (    
				console.log('ServiceWorker registration failed: ', err);  
			}); 
	}

})();