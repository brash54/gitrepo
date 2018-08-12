
                
                
               var  apiGM = { 
                   
                getlatlng: $.getJSON(locURL, function(data) {
                   var lat = data.results[0].geometry.location.lat;
                   var lng = data.results[0].geometry.location.lng;
                    return   latLng = "lat=" + lat + "&lng=" + lng
                              
                }),
                 
                };

                    //get URL for Google Maps API
                    var gmURL = {
                        
                        isValid: function(zipcode) {
                            if ( zipcode === "" || ! /^\d{5}/.test(zipcode)) {
                                return false;
                            } else return true;
                        },
                         //build URL for Google Maps Api to get latitude and longitude
                       getlatlngURL: function(zipcode) {
                       return "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyBBRAiapQxnydUukcB3NA296Mu6UNLICC8"
                        
                       }        

                    }; //api

                    return "lat=" + data1.results[0].geometry.location.lat + "&lng=" + data1.results[0].geometry.location.lng;};
                    "Your latitude is: " + data1.results[0].geometry.location.lat + "<br>" +
                        "Your longitude is: " + data1.results[0].geometry.location.lng + "<br>"
                        $("#locdata").append(

                            latLng = "lat=" + data1.results[0].geometry.location.lat + "&lng=" + data1.results[0].geometry.location.lng;
                            var sunUrl1 = "https://api.sunrise-sunset.org/json?";
        
                            var sunUrl = sunUrl1 + latLng + "&date=" + apiDate;






                            var  apiGM = {
                                locURL: "",
                               getlatlng: function(locURL) { 
                                        $.getJSON(locURL, function(data) {
                                            alert(data)
                                            alert(data.results[0].geometry.location.lat)
                                    return "lat=" + data.results[0].geometry.location.lat + "&lng=" +  data.results[0].geometry.location.lng;
                                },       
                                    )
                               }
                                };// apiGM