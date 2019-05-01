var airquality //real-time airquality info
var carbon //
var ozone//
var nitrodio
var pm10 //particle matter VALUES
var pm25 //particle matter values
var so2
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
        $('#delhiSO2').append(' so2: ' + so2);
    }
      console.log(carbon,nitrodio,ozone,pm10,pm25,so2);
var pollutants = [{"header" : "","captions" : [
      "CO",
      "NO2",
      "O3",
      "PM10",
      "PM25",
      "SO2"
    ],
    "values" : [
      carbon/100,
      ozone/100,
      nitrodio/100,
      pm10/100,
      pm25/100,
      so2/100
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

for (var s in pollutants) {
  $(".content").append('<div class="hexagon" id="interests"><canvas class="pentCanvas"/></div>');
  hue[s] = (hueOffset + s * 255/pollutants.length) % 255;
}

$(".hexagon").each(function Hex(index){
  width = $(this).width();
  height = $(this).height();
  var ctx = $(this).find('canvas')[0].getContext('2d');
  ctx.canvas.width = width;
  ctx.canvas.height = height;
  ctx.textAlign="center";

  /*** LABEL ***/
  color = "#4295C9";
  ctx.fillStyle = color;
  ctx.font="1em Avenir";
  ctx.font.weight="bold"

  /*** PENTAGON BACKGROUND ***/
  for (var i = 0; i < sides; i++) {
    // For each side, draw two segments: the side, and the radius
    ctx.beginPath();
    xy = getXY(i, 0.3);
    colorJitter = 220 + theta*i*2;
    color = "#4295C9";
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.moveTo(0.5*width, 0.5*height); //center
    ctx.lineTo(xy.x, xy.y);
    xy = getXY(i+1, 0.3);
    ctx.lineTo(xy.x, xy.y);
    xy = getXY(i, 0.37);
    console.log();
    ctx.fillText(pollutants[ hexagonIndex].captions[valueIndex],xy.x, xy.y +5);
    valueIndex++;
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  valueIndex = 0;
  ctx.beginPath();
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
  ctx.lineWidth = 5;
  var value = pollutants[hexagonIndex].values[valueIndex];
  xy = getXY(i, value * 0.3);
  ctx.moveTo(xy.x,xy.y);
  /*** SKILL GRAPH ***/
  for (var i = 0; i < sides; i++) {
    xy = getXY(i, value * 0.3);
    ctx.lineTo(xy.x,xy.y);
    valueIndex++;
    value = pollutants[hexagonIndex].values[valueIndex];
  }
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  valueIndex = 0;
  hexagonIndex++;
    })
  });
