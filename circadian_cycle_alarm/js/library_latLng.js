var latLng = {
           $.getJSON(locUrl, function(data1) {
              
                        
                        $("#locdata").append(
                            "lat: " + data1.results[0].geometry.location.lat + "<br>" +
                            "lng: " + data1.results[0].geometry.location.lng + "<br>"    
                        );
                latLng =  "lat=" + data1.results[0].geometry.location.lat + "&lng=" + data1.results[0].geometry.location.lng;  
                
            });	//getjason
        }