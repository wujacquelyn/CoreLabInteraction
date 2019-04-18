//THESE ARE THE VARIABLES WE WILL USE
var co1//array of objects, carbon monoxide info
var co1vol // carbon monoxide volume mixing ratio
var pressure //atmospheric pressure at the point of measurement
var precision // measurement precision


$(document).ready(function(){


    $.ajax({
        url: 'http://api.openweathermap.org/pollution/v1/co/31,121/current.json?appid=739ae848e899c96754cb55b642119c6e', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            co1 = results.data[0].precision;
            co1vol = results.value
            pressure = results.pressure
            precision = results.precision
              console.log(co1)
            myWeatherInterpretation();

        }
    });


    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS


        //JUST SEEING IF THE VALUES COME THROUGH
        $('p').append('data ' + co1);
        $('p').append('value ' + co1vol);
        $('p').append('pressure: ' + pressure);
        $('p').append('precision: ' + precision);


        //END OF MYWEATHERINTERPRETATION FUNCTION
    }


});
