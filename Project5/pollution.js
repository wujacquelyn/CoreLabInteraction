$(document).ready(function(){
//Delhi ---- INDIA
var airquality //real-time airquality info
    $.ajax({
        url: "https://api.waqi.info/feed/@10707/?token=90fb658a0fa37a229e2826c2c35a20bdbdc890f8",
        dataType: 'jsonp',
        success: function(results){
            airquality = results.data.aqi;
            delhiWeather();
            delhiAnimate();
        }
    });
    function delhiWeather(){
        $('#delhiAPI').append(' aqi: ' + airquality);
      }

    function delhiAnimate(){
      var dot1 = document.querySelector('#delhiAPI')
      dot1.animate([
        {transform: 'translateY('+airquality/10+'vw)'},
        {transform: 'translateY(0vw)'},
        {transform: 'translateY('+airquality/10+'vw)'}
      ],{
        duration:6000,
        easing: 'ease-in-out',
        delay: 400,
        iterations: Infinity,
        direction: 'normal'
      })
    }

//Cedart, Mexico]---South America
var airquality2 //real-time airquality info
  $.ajax({
      url: "https://api.waqi.info/feed/@10162/?token=90fb658a0fa37a229e2826c2c35a20bdbdc890f8",
      dataType: 'jsonp',
      success: function(results){
          airquality2 = results.data.aqi;
          cedWeather();
          cedAnimate();
        }
      });
    function cedWeather(){
     $('#cedAPI').append(' aqi: ' + airquality2);
  }
      function cedAnimate(){
        var dot2 = document.querySelector('#cedAPI')
        dot2.animate([
          {transform: 'translateY('+airquality2/10+'vw)'},
          {transform: 'translateY(0vw)'},
          {transform: 'translateY('+airquality2/10+'vw)'}
        ],{
          duration:6000,
          easing: 'ease-in-out',
          delay: 400,
          iterations: Infinity,
          direction: 'normal'
        })
      }
//Jabavu, Johannesburg Metro, -----South Africa
var airquality3 //real-time airquality info
$.ajax({
    url: "https://api.waqi.info/feed/@10784/?token=90fb658a0fa37a229e2826c2c35a20bdbdc890f8",
    success: function(results){
      airquality3 = results.data.aqi;
      jabWeather();
      jabAnimate();
      }
    });
function jabWeather(){
  $('#jabAPI').append(' aqi: ' + airquality3);
  }

function jabAnimate(){
    var dot3 = document.querySelector('#jabAPI')
    dot3.animate([
      {transform: 'translateY('+airquality3/10+'vw)'},
      {transform: 'translateY(0vw)'},
      {transform: 'translateY('+airquality3/10+'vw)'}
    ],{
      duration:6000,
      easing: 'ease-in-out',
      delay: 400,
      iterations: Infinity,
      direction: 'normal'
    })
  }
//Jiyuan,China----Asia
var airquality4 //real-time airquality info
  $.ajax({
    url: "https://api.waqi.info/feed/@5824/?token=90fb658a0fa37a229e2826c2c35a20bdbdc890f8",
    dataType: 'jsonp',
    success: function(results){
      airquality4 = results.data.aqi;
        jiyWeather();
        jiyAnimate();
    }
  })
  function jiyWeather(){
    $('#jiyAPI').append(' aqi: ' + airquality4);
  }

  function jiyAnimate(){
    var dot4 = document.querySelector('#jiyAPI')
    dot4.animate([
      {transform: 'translateY('+airquality4/10+'vw)'},
      {transform: 'translateY(0vw)'},
      {transform: 'translateY('+airquality4/10+'vw)'}
    ],{
      duration:6000,
      easing: 'ease-in-out',
      delay: 400,
      iterations: Infinity,
      direction: 'normal'
    })
  }
//highest pm25 [Queens College NYC]----North America
var airquality5 //real-time airquality info
$.ajax({
  url: "https://api.waqi.info/feed/@6905/?token=90fb658a0fa37a229e2826c2c35a20bdbdc890f8",
  dataType: 'jsonp',
  success: function(results){
    airquality5 = results.data.aqi;
      queensWeather();
      queensAnimate();
  }
})
function queensWeather(){
  $('#qnyAPI').append(' aqi: ' + airquality5);
}
function queensAnimate(){
  var dot5 = document.querySelector('#qnyAPI')
  dot5.animate([
    {transform: 'translateY('+airquality5/10+'vw)'},
    {transform: 'translateY(0vw)'},
    {transform: 'translateY('+airquality5/10+'vw)'}
  ],{
    duration:6000,
    easing: 'ease-in-out',
    delay: 400,
    iterations: Infinity,
    direction: 'normal'
  })
}
//Sakarya Hendek OSB, Turkey]
var airquality6 //real-time airquality info
$.ajax({
  url: "https://api.waqi.info/feed/@10675/?token=90fb658a0fa37a229e2826c2c35a20bdbdc890f8",
  dataType: 'jsonp',
  success: function(results){
    airquality6= results.data.aqi;
      sakWeather();
      sakAnimate();
  }
})
function sakWeather(){
  $('#sakAPI').append(' aqi: ' + airquality6);
}
function sakAnimate(){
  var dot6 = document.querySelector('#sakAPI')
  dot6.animate([
    {transform: 'translateY('+airquality6/10+'vw)'},
    {transform: 'translateY(0vw)'},
    {transform: 'translateY('+airquality6/10+'vw)'}
  ],{
    duration:6000,
    easing: 'ease-in-out',
    delay: 400,
    iterations: Infinity,
    direction: 'normal'
  })
}
})
//Scrolling
/*Scroll to top when arrow up clicked BEGIN*/
$(document).ready(function() {
    $("h1").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 1000 }, "slow");
        return false;
    });

});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 800) {
        $('#arrow').fadeIn();
    } else {
        $('#arrow').fadeOut();
    }
});
$(document).ready(function() {
    $("#arrow").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
