function ZoomControl (controlDiv, map){

	controlDiv.style.padding = '5px';

  // Set CSS for the control wrapper
  var controlWrapper = document.createElement('div');
  controlWrapper.style.backgroundColor = 'white';
  controlWrapper.style.borderStyle = 'solid';
  controlWrapper.style.borderRadius = '10px';
  controlWrapper.style.borderColor = 'gray';
  controlWrapper.style.borderWidth = '1px';
  controlWrapper.style.cursor = 'pointer';
  controlWrapper.style.textAlign = 'center';
  controlWrapper.style.width = '32px'; 
  controlWrapper.style.height = '60px';
  controlDiv.appendChild(controlWrapper);

  var zoomInButton = document.createElement('div');
        zoomInButton.style.color = 'rgb(25,25,25)';
        zoomInButton.style.fontFamily = 'Roboto,Arial,sans-serif';
        zoomInButton.style.fontSize = '20px';
        zoomInButton.style.lineHeight = 'automatic';
        zoomInButton.style.paddingLeft = '5px';
        zoomInButton.style.paddingRight = '5px';
        zoomInButton.innerHTML = '+';
        controlWrapper.appendChild(zoomInButton);
   var zoomOutButton = document.createElement('div');
        zoomOutButton.style.color = 'rgb(25,25,25)';
        zoomOutButton.style.fontFamily = 'Roboto,Arial,sans-serif';
        zoomOutButton.style.fontSize = '20px';
        zoomOutButton.style.lineHeight = 'automatic';
        zoomOutButton.style.paddingLeft = '5px';
        zoomOutButton.style.paddingRight = '5px';
        zoomOutButton.innerHTML = '_';
        controlWrapper.appendChild(zoomOutButton);
     // Setup the click event listener - zoomIn
  google.maps.event.addDomListener(zoomInButton, 'click', function() {
    map.setZoom(map.getZoom() + 1);
  });

  // Setup the click event listener - zoomOut
  google.maps.event.addDomListener(zoomOutButton, 'click', function() {
    map.setZoom(map.getZoom() - 1);
  });  
}
