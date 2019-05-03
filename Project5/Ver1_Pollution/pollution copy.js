var airquality //real-time airquality info
var carbon //
var ozone//
var nitrodio
var pm10 //particle matter VALUES
var pm25 //particle matter values
var so2
$(document).ready(function(){
//hightest CO, INDIA
    $.ajax({
        url: "https://api.waqi.info/feed/@10707/?token=90fb658a0fa37a229e2826c2c35a20bdbdc890f8",
        dataType: 'jsonp',
        success: function(results){
            airquality = results.data.aqi;
            carbon = results.data.iaqi.co.v;
            nitrodio = results.data.iaqi.no2.v;
            ozone = results.data.iaqi.o3.v;
            pm10 = results.data.iaqi.pm10.v;
            pm25 = results.data.iaqi.pm25.v;
            so2 = results.data.iaqi.so2.v;
            delhiWeather();
        }
    });
    function delhiWeather(){
        $('#delhiAPI').append(' aqi: ' + airquality);
        $('#delhiCO').append(' carbon: ' + carbon);
        $('#delhiNO2').append(' nitrogen dioxide: ' + nitrodio);
        $('#delhiO3').append(' ozone: ' + ozone);
        $('#delhiPM10').append(' pm10: ' + pm10);
        $('#delhiPM25').append(' pm25: ' + pm25);
        $('#delhiSO2').append(' so2: ' + so2);}

//highest no2[DIF, San Luis Potosí, Mexico]
  $.ajax({
      url: "https://api.waqi.info/feed/@10159/?token=90fb658a0fa37a229e2826c2c35a20bdbdc890f8",
      dataType: 'jsonp',
      success: function(results){
          airquality2 = results.data.aqi;
          nitrodio = results.data.iaqi.no2.v;
          pm10 = results.data.iaqi.pm10.v;
          difWeather();
        }
      });
    function difWeather(){
     $('#difAPI').append(' aqi: ' + airquality);
     $('#difNO2').append(' nitrogen dioxide: ' + nitrodio);
      $('#difPM10').append(' pm10: ' + pm10);
  }
//Highest So2 [La Mantanza, Acumar, Argentina]
$.ajax({
    url: "https://api.waqi.info/feed/@10109/?token=90fb658a0fa37a229e2826c2c35a20bdbdc890f8",
    success: function(results){
      airquality = results.data.aqi;
      carbon = results.data.iaqi.co.v;
      pm10 = results.data.iaqi.pm10.v;
      pm25 = results.data.iaqi.pm25.v;
      so2 = results.data.iaqi.so2.v;
      console.log(carbon, nitrodio, ozone, pm10, pm25, so2)
        lmWeather();
      }
    });
function lmWeather(){
  $('#lmAPI').append(' aqi: ' + airquality);
  $('#lmCO2').append(' carbon: ' + carbon);
  $('#lmPM10').append(' pm10: ' + pm10);
  $('#lmPM25').append(' pm25: ' + pm25);
  $('#lmSO2').append(' so2: ' + so2);
  }
//highest o3[Secretaría de Medio Ambiente, Aguascalientes, Mexico]
  $.ajax({
    url: "https://api.waqi.info/feed/@9171/?token=90fb658a0fa37a229e2826c2c35a20bdbdc890f8",
    dataType: 'jsonp',
    success: function(results){
      airquality = results.data.aqi;
      ozone = results.data.iaqi.o3.v;
      pm10 = results.data.iaqi.pm10.v;
      pm25 = results.data.iaqi.pm25.v;
        aguaWeather();
    }
  })
  function aguaWeather(){
    $('#aguaAPI').append(' aqi: ' + airquality);
    $('#aguaO3').append(' ozone: ' + ozone);
    $('#aguaPM10').append(' pm10: ' + pm10);
    $('#aguaPM25').append(' pm25: ' + pm25);
  }

//highest pm25 [Queens College NYC]
$.ajax({
  url: "https://api.waqi.info/feed/@6905/?token=90fb658a0fa37a229e2826c2c35a20bdbdc890f8",
  dataType: 'jsonp',
  success: function(results){
    airquality = results.data.aqi;
    carbon = results.data.iaqi.co.v;
    nitrodio = results.data.iaqi.no2.v;
    ozone = results.data.iaqi.o3.v;
    pm25 = results.data.iaqi.pm25.v;
      queensWeather();
  }
})
function queensWeather(){
  $('#qnyAPI').append(' aqi: ' + airquality);
  $('#qnyCO').append(' aqi: ' + carbon);
  $('#qnyNO2').append(' nitrogen dioxide: ' + nitrodio);
  $('#qnyO3').append(' ozone: ' + ozone);
  $('#qnyPM25').append(' pm25: ' + pm25);
}
//hightest pm10[https://api.waqi.info/feed/@7243/?token=90fb658a0fa37a229e2826c2c35a20bdbdc890f8]
})

var skills = [{"header" : "","captions" : [
      "CO",
      "NO2",
      "O3",
      "PM10",
      "PM25",
      "SO2"
    ],
    "values" : [
      0.70,
      0.90,
      0.70,
      0.80,
      0.80,
      0.70
    ]
  }
];

var hexagonIndex = 0;
var valueIndex = 0;
var width = 0;
var height = 0;
var radOffset = Math.PI/2
var sides = 6; // Number of sides in the polygon
var theta = 2 * Math.PI/sides; // radians per section

function getXY(i, radius) {
  return {"x": Math.cos(radOffset +theta * i) * radius*width + width/2,
    "y": Math.sin(radOffset +theta * i) * radius*height + height/2};
}

var hue = [];
var hueOffset = 10;

for (var s in skills) {
  $(".content").append('<div class="hexagon" id="interests"><canvas class="pentCanvas"/></div>');
  hue[s] = (hueOffset + s * 255/skills.length) % 255;
}
