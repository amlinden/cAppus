function PanningControl(controlDiv, map) {
        controlDiv.style.padding = '5px';

        var controlWrapper = document.createElement('div');
          controlWrapper.style.backgroundColor = 'white';
          controlWrapper.style.borderStyle = 'solid';
          controlWrapper.style.borderRadius = '10px';
          controlWrapper.style.borderColor = 'gray';
          controlWrapper.style.borderWidth = '1px';
          controlWrapper.style.cursor = 'pointer';
          controlWrapper.style.textAlign = 'center';
          controlWrapper.style.width = '32px'; 
          controlWrapper.style.height = '45px';
          controlDiv.appendChild(controlWrapper);

        var controlWrapper1 = document.createElement('div');
          controlWrapper1.style.backgroundColor = 'white';
          controlWrapper1.style.borderStyle = 'solid';
          controlWrapper1.style.borderRadius = '10px';
          controlWrapper1.style.borderColor = 'gray';
          controlWrapper1.style.borderWidth = '1px';
          controlWrapper1.style.cursor = 'pointer';
          controlWrapper1.style.textAlign = 'center';
          controlWrapper.style.width = '32px'; 
          controlWrapper.style.height = '45px';
          controlDiv.appendChild(controlWrapper1);
     

        // Set CSS for the UP control interior.
        var controlTextUp = document.createElement('div');
        controlTextUp.style.color = 'rgb(25,25,25)';
        controlTextUp.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlTextUp.style.fontSize = '15px';
        controlTextUp.style.paddingLeft = '5px';
        controlTextUp.style.paddingRight = '5px';
        controlTextUp.style.marginBottom = '5px';
        controlTextUp.innerHTML = 'Λ';
        controlWrapper.appendChild(controlTextUp);        

        // Set CSS for the LEFT control interior.
        var controlTextLeft = document.createElement('div');
        controlTextLeft.style.color = 'rgb(25,25,25)';
        controlTextLeft.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlTextLeft.style.fontSize = '20px';
        controlTextLeft.style.paddingLeft = '5px';
        controlTextLeft.style.paddingRight = '5px';
        controlTextLeft.innerHTML = '<';
        controlWrapper1.appendChild(controlTextLeft);     

        // Set CSS for the UP control interior.
        var controlTextRight = document.createElement('div');
        controlTextRight.style.color = 'rgb(25,25,25)';
        controlTextRight.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlTextRight.style.fontSize = '20px';
        controlTextRight.style.paddingLeft = '5px';
        controlTextRight.style.paddingRight = '5px';
        controlTextRight.innerHTML = '>';
        controlWrapper1.appendChild(controlTextRight);  

        // Set CSS for the DOWN control interior.
        var controlTextDown = document.createElement('div');
        controlTextDown.style.color = 'rgb(25,25,25)';
        controlTextDown.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlTextDown.style.fontSize = '15px';
        controlTextDown.style.paddingLeft = '5px';
        controlTextDown.style.paddingRight = '5px';
        controlTextDown.innerHTML = 'V';
        controlWrapper.appendChild(controlTextDown);

        

        

        // Setup the click event listeners: pan up.
        controlTextUp.addEventListener('click', function() {

         var center = map.getCenter(); 
         var New_center = new google.maps.LatLng(center.lat() + 0.005, center.lng()); 
         map.setCenter(New_center);
         });
        // Setup the click event listeners: pan down.
        controlTextDown.addEventListener('click', function() {
         

         var center = map.getCenter(); 
         var New_center = new google.maps.LatLng(center.lat() - 0.005, center.lng()); 
         map.setCenter(New_center);
         });
        // Setup the click event listeners: pan left.
        controlTextLeft.addEventListener('click', function() {

            var center = map.getCenter(); 
         var New_center = new google.maps.LatLng(center.lat(), center.lng() - 0.005); 
         map.setCenter(New_center);

         
         });
        // Setup the click event listeners: pan right.
        controlTextRight.addEventListener('click', function() {
         var center = map.getCenter(); 
         var New_center = new google.maps.LatLng(center.lat(), center.lng() + 0.005); 
         map.setCenter(New_center);
         });

      }







