function FullScreen(fullScreenDiv, map) {
        fullScreenDiv.style.padding = '5px';

        var fsDiv = document.createElement('div');
          fsDiv.style.backgroundColor = 'white';
          fsDiv.style.borderStyle = 'solid';
          fsDiv.style.borderRadius = '10px';
          fsDiv.style.borderColor = 'gray';
          fsDiv.style.borderWidth = '1px';
          fsDiv.style.cursor = 'pointer';
          fsDiv.style.textAlign = 'center';
          fsDiv.style.width = '32px'; 
          fsDiv.style.height = '32px';
          fullScreenDiv.appendChild(fsDiv);

        // Set CSS for the UP control interior.
        var fs = document.createElement('div');
        fs.style.color = 'rgb(25,25,25)';
        fs.style.fontFamily = 'Roboto,Arial,sans-serif';
        fs.style.fontSize = '15px';
        fs.style.paddingLeft = '5px';
        fs.style.paddingRight = '5px';
        fs.style.marginBottom = '5px';
        fs.innerHTML = 'Fs';
        fsDiv.appendChild(fs);        
		
		// Setup the click event listener
        fs.addEventListener("click", function() {
          // detecting if browser supports fullscreen
		return document.body.mozRequestFullScreen || document.body.webkitRequestFullScreen || document.body.requestFullScreen;

		// requesting full screen on an elm
		( elm.mozRequestFullScreen && elm.mozRequestFullScreen() ) || ( elm.webkitRequestFullScreen && elm.webkitRequestFullScreen() ) || ( elm.requestFullScreen && elm.requestFullScreen() );

		//binding to full screen event
		( document.body.requestFullScreen && window.addEventListener('fullscreenchange',fullScreenEvent) ) || ( document.body.webkitRequestFullScreen && window.addEventListener('webkitfullscreenchange',fullScreenEvent ) ) || ( document.body.mozRequestFullScreen && window.addEventListener('mozfullscreenchange',fullScreenEvent) );



       });
}
