"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

var processEntries = function() {
    var investment = parseFloat($("investment").value);
    var rate = parseFloat($("rate").value);
    var years = parseFloat($("years").value);
    var errorMessage = "";

    if (isNaN(investment)  || investment <= 0 || investment == ""  || investment > 100000) {
        errorMessage = "Investment must be numeric, greater than zero, and 100,000 or less";
        $("investment").focus();
    }

    else  if (isNaN(rate)  || rate <= 0 || rate == "" || rate > 15) {
        errorMessage = "Rate must be numeric, greater than zero, and 15% or less";
        $("rate").focus();
    }

    else  if (isNaN(years)  || years <= 0 || years == "" || years  > 50) {
        errorMessage = "Years must be numeric, greater than zero, and 50 or less";
        $("years").focus();
    }

    if (errorMessage == "") {
        $("future_value").value = calculateFV(rate, years, investment);
    }
    
      else { 
          alert(errorMessage);
    }
}

 
var calculateFV = function(rate, years, investment) {
    for (var i = 1; i <= years; i++ ){
        var investment =  investment * ( 1 + rate/100);	
    };
    var future_value = investment.toFixed(2);
    return future_value; 
};

window.onload = function() {
$("calculate").onclick = processEntries;    
$("investment").focus();
};