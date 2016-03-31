function PanningControl(panningControlDiv1,panningControlDiv2, panningControlDiv3,panningControlDiv4, map) {

        // Set CSS for the UP control border.
        var controlUp = document.createElement('div');
        controlUp.style.backgroundColor = '#fff';
        controlUp.style.border = '2px solid #fff';
        controlUp.style.borderRadius = '3px';
        controlUp.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUp.style.cursor = 'pointer';
        controlUp.style.marginBottom = '22px';
        controlUp.style.textAlign = 'center';
        panningControlDiv1.appendChild(controlUp);

        // Set CSS for the UP control interior.
        var controlTextUp = document.createElement('div');
        controlTextUp.style.color = 'rgb(25,25,25)';
        controlTextUp.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlTextUp.style.fontSize = '20px';
        controlTextUp.style.lineHeight = 'automatic';
        controlTextUp.style.paddingLeft = '5px';
        controlTextUp.style.paddingRight = '5px';
        controlTextUp.innerHTML = 'Λ';
        controlUp.appendChild(controlTextUp);

        // Set CSS for the DOWN control border.
        var controlDown = document.createElement('div');
        controlDown.style.backgroundColor = '#fff';
        controlDown.style.border = '2px solid #fff';
        controlDown.style.borderRadius = '3px';
        controlDown.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlDown.style.cursor = 'pointer';
        controlDown.style.marginBottom = '22px';
        controlDown.style.textAlign = 'center';
        panningControlDiv2.appendChild(controlDown);

        // Set CSS for the DOWN control interior.
        var controlTextDown = document.createElement('div');
        controlTextDown.style.color = 'rgb(25,25,25)';
        controlTextDown.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlTextDown.style.fontSize = '20px';
        controlTextDown.style.lineHeight = 'automatic';
        controlTextDown.style.paddingLeft = '5px';
        controlTextDown.style.paddingRight = '5px';
        controlTextDown.innerHTML = 'V';
        controlDown.appendChild(controlTextDown);

        // Set CSS for the LEFT control border.
        var controlLeft = document.createElement('div');
        controlLeft.style.backgroundColor = '#fff';
        controlLeft.style.border = '2px solid #fff';
        controlLeft.style.borderRadius = '3px';
        controlLeft.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlLeft.style.cursor = 'pointer';
        controlLeft.style.marginBottom = '22px';
        controlLeft.style.textAlign = 'center';
        panningControlDiv3.appendChild(controlLeft);

        // Set CSS for the LEFT control interior.
        var controlTextLeft = document.createElement('div');
        controlTextLeft.style.color = 'rgb(25,25,25)';
        controlTextLeft.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlTextLeft.style.fontSize = '20px';
        controlTextLeft.style.lineHeight = 'automatic';
        controlTextLeft.style.paddingLeft = '5px';
        controlTextLeft.style.paddingRight = '5px';
        controlTextLeft.innerHTML = '<';
        controlLeft.appendChild(controlTextLeft);

        // Set CSS for the UP control border.
        var controlRight = document.createElement('div');
        controlRight.style.backgroundColor = '#fff';
        controlRight.style.border = '2px solid #fff';
        controlRight.style.borderRadius = '3px';
        controlRight.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlRight.style.cursor = 'pointer';
        controlRight.style.marginBottom = '22px';
        controlRight.style.textAlign = 'center';
        panningControlDiv4.appendChild(controlRight);

        // Set CSS for the UP control interior.
        var controlTextRight = document.createElement('div');
        controlTextRight.style.color = 'rgb(25,25,25)';
        controlTextRight.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlTextRight.style.fontSize = '20px';
        controlTextRight.style.lineHeight = 'automatic';
        controlTextRight.style.paddingLeft = '5px';
        controlTextRight.style.paddingRight = '5px';
        controlTextRight.innerHTML = '>';
        controlRight.appendChild(controlTextRight);

        // Setup the click event listeners: pan up.
        controlUp.addEventListener('click', function() {
         var center = map.getCenter(); 
         var New_center = new google.maps.LatLng(center.lat() - 0.01, center.lng()); 
         map.setCenter(New_center);
         });
        // Setup the click event listeners: pan down.
        controlDown.addEventListener('click', function() {
         var center = map.getCenter(); 
         var New_center = new google.maps.LatLng(center.lat() + 0.01, center.lng()); 
         map.setCenter(New_center);
         });
        // Setup the click event listeners: pan left.
        controlLeft.addEventListener('click', function() {
         var center = map.getCenter(); 
         var New_center = new google.maps.LatLng(center.lat(), center.lng() + 0.01); 
         map.setCenter(New_center);
         });
        // Setup the click event listeners: pan right.
        controlRight.addEventListener('click', function() {
         var center = map.getCenter(); 
         var New_center = new google.maps.LatLng(center.lat(), center.lng() - 0.01); 
         map.setCenter(New_center);
         });

      }