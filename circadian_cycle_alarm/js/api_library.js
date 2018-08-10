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