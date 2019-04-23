var cloudiness; //Cloudiness, %


$(document).ready(function(){

//Shanghai
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1796236&units=metric&APPID=739ae848e899c96754cb55b642119c6e', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            cloudiness = results.clouds.all;
            ShanghaiWeather();
        }
    });

    function ShanghaiWeather(){
        $('#sh').append('cloudiness: ' + cloudiness);
    }
//New York
$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?id=5128638&units=metric&APPID=739ae848e899c96754cb55b642119c6e', //CHANGE THE URL TO YOUR API QUERY
    dataType: 'jsonp',
    success: function(results){
        weathertext = results.weather[0].main;
        cloudiness = results.clouds.all;
        NewYorkWeather();
    }
});

function NewYorkWeather(){
    $('#ny').append('cloudiness: '+ cloudiness);
}
//London

});
