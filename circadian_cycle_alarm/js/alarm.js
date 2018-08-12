$(document).ready(function () {
    var clock = $('.clock').FlipClock({
        clockFace: 'TwelveHourClock'
    });

    $("#datepicker").datepicker({
        minDate: new Date(),
        maxDate: 30
    });

    $("#datepicker").prop('readonly', true);

    $("#info").button();
    $("#info").click(function(){
        $("#dialog").dialog({
            modal: true
        });
    });



    $("#set_alarm").click(function () {
        $("span").text("");


        var zipcode = $("#zip_code").val();

        if (gmURL.isValid(zipcode)) {
            var locURL = gmURL.getlatlngURL(zipcode);
        } else {
            $("#zip_code").next().text("Please enter a valid zip code.")
        }

        // var latlng = apiGM.getlatlng(locURL);



        $.getJSON(locURL, function (data1) {


            $("#locdata").append(
                "Your latitude is: " + data1.results[0].geometry.location.lat + "<br>" +
                "Your longitude is: " + data1.results[0].geometry.location.lng + "<br>"
            );
            latLng = "lat=" + data1.results[0].geometry.location.lat + "&lng=" + data1.results[0].geometry.location.lng;
            var sunUrl1 = "https://api.sunrise-sunset.org/json?";

            var sunUrl = sunUrl1 + latLng + "&date=" + apiDate;

            $.getJSON(sunUrl, function (data) {



                var utcSunrise = alarmDate + " " + data.results.sunrise + " UTC";

                var localSunrise = new Date("'" + utcSunrise + "'");

                var utcSunset = alarmDate + " " + data.results.sunset + " UTC";

                var utcSunset = utcSunset.replace("AM", "PM");
                var localSunset = new Date("'" + utcSunset + "'");

                $("#sundata").append(
                    "Sunrise: " + localSunrise + "<br>" +
                    "Sunset: " + localSunset + "<br>"
                );


                setInterval(function () {
                    var nowTime = new Date();
                    var nowTime = nowTime.getHours() + ":" + nowTime.getMinutes();
                    var alarmTime = new Date();

                    /* localSunrise is 12 hour clock while alarmTime is 24 hour clock. Will be equal once per day
                    Testing can be carried out by setting local time on PC to a few minutes before a sunrise time. Time should be AM. */
                    var alarmTime = localSunrise.getHours() + ":" + localSunrise.getMinutes();
                    if (nowTime == alarmTime) {
                        // alert(nowTime); 
                        $("#siren").trigger('play');
                    }

                }, 500);
            }); //getjason
        }); //getjason








        var alarmDate = new Date;

        alarmDate = $("#datepicker").val();
        alert(alarmDate);

        if (chkDate.isValid(alarmDate)) {
            var alarmYear = alarmDate.substring(6);

            var alarmDay = alarmDate.substring(3, 5);

            var alarmMonth = alarmDate.substring(0, 2);
            console.log(alarmMonth);

            var apiDate = alarmYear + "-" + alarmMonth + "-" + alarmDay;
        } else {
            $("#date_chk").text("Please enter an alarm date.")
        }


        /*   var alarmYear = alarmDate.substring(6);

          var alarmDay = alarmDate.substring(3, 5);

          var alarmMonth = alarmDate.substring(0, 2);
          console.log(alarmMonth);

          var apiDate = alarmYear + "-" + alarmMonth + "-" + alarmDay;
          console.log(apiDate); */



        setInterval(function () {
            var nowTime = new Date();
            var nowTime = nowTime.getHours() + ":" + nowTime.getMinutes();
            var alarmTime = new Date();

            /* localSunrise is 12 hour clock while alarmTime is 24 hour clock. Will be equal once per day
            Testing can be carried out by setting local time on PC to a few minutes before a sunrise time. Time should be AM. */
            var alarmTime = localSunrise.getHours() + ":" + localSunrise.getMinutes();
            if (nowTime == alarmTime) {
                // alert(nowTime); 
                $("#siren").trigger('play');
            }

        }, 500);


    }); //setAlarm

$("#reset").click(function(){
    $("#siren").trigger('pause');
    location.reload();
})

}); //end ready
