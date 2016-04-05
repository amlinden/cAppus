function MyLocation(myLocationDiv, map) {
        myLocationDiv.style.padding = '5px';

        var myLocation = document.createElement('div');
          myLocation.style.backgroundColor = 'white';
          myLocation.style.borderStyle = 'solid';
          myLocation.style.borderRadius = '10px';
          myLocation.style.borderColor = 'gray';
          myLocation.style.borderWidth = '1px';
          myLocation.style.cursor = 'pointer';
          myLocation.style.textAlign = 'center';
          myLocation.style.width = '32px'; 
          myLocationDiv.appendChild(myLocation);

        // Set CSS for the UP control interior.
        var myLocationText = document.createElement('div');
        myLocationText.style.color = 'rgb(25,25,25)';
        myLocationText.style.fontFamily = 'Roboto,Arial,sans-serif';
        myLocationText.style.fontSize = '15px';
        myLocationText.lineHeight = 'automatic';
        myLocationText.style.paddingLeft = '5px';
        myLocationText.style.paddingRight = '5px';
        myLocationText.style.marginBottom = '5px';
        myLocationText.innerHTML = '&#x1f518';
        myLocation.appendChild(myLocationText);        
		
		// Setup the click event listener
        myLocationText.addEventListener("click", function() {
         
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
          } 
        

        function showPosition(position) {
            var mylat = position.coords.latitude;
            var mylng = position.coords.longitude;
           
            var myLocation1 = {lat: mylat, lng:  mylng};
            map.setCenter(myLocation1);

            var marker = new google.maps.Marker({
            position: myLocation1,
            map: map,
            title: 'My current location'
            });

            var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">My current position</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Latitude: </b>' + mylat +
            '<p><b>Longitude: </b>'+ mylng +
            '</div>'+
            '</div>';

              var infowindow = new google.maps.InfoWindow({
                 content: contentString
              });
              marker.addListener('click', function() {
                  infowindow.open(map, marker);
              });
            }
       });
}
