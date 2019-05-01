var numberOfWaves = 5;
var Wave = function (opts) {
var options = {
  maxSize: opts.maxSize || 30,
  minSize: opts.minSize || 30,
}

var radius = options.minSize + (
  Math.random() * (options.maxSize - options.minSize)
  );

var horizontalPosition = radius*2 + (Math.random() * (640-radius*4));
var verticalDisplacement = 240 + (0.5*100) - 30;
console.log(verticalDisplacement)
var elements = [];

var fall = document.createElementNS("http://www.w3.org/2000/svg", "circle");
fall.setAttribute("r", radius);
fall.setAttribute("cx", horizontalPosition);
fall.setAttribute("cy", verticalDisplacement);
fall.setAttribute("class", "wave");

var highlight = document.createElementNS("http://www.w3.org/2000/svg", "circle");
highlight.setAttribute("r", radius/1.2);
highlight.setAttribute("cx", horizontalPosition);
highlight.setAttribute("cy", verticalDisplacement);
highlight.setAttribute("class", "wave animated");


var minY = verticalDisplacement;
var maxY = verticalDisplacement - (Math.random() * radius + 20);

var highlightAnimation = document.createElementNS("http://www.w3.org/2000/svg", "animate");
highlightAnimation.setAttribute('attributeType', 'XML');
highlightAnimation.setAttribute('attributeName', 'cy');
highlightAnimation.setAttribute('from', minY);
highlightAnimation.setAttribute('to', maxY);
highlightAnimation.setAttribute('values', minY+";"+maxY+"; "+minY);
highlightAnimation.setAttribute('keyTimes', '0; 0.5; 1');
highlightAnimation.setAttribute('dur', ((Math.random() * 2)+2) + "s");
highlightAnimation.setAttribute('repeatCount', 'indefinite');

highlight.appendChild(highlightAnimation);

elements.push(highlight);
elements.push(fall);

this.svgElement = function() {
  return elements;
}

}

var Scene = function(container) {
var container = container;
var waves = [];

this.addWave = function(wave) {
  waves.push(wave);
  var waveElements = wave.svgElement();
  container.appendChild(waveElements[0]);
  container.appendChild(waveElements[1]);
}
}

function init () {
for(m=1; m<=3; m++) {
  var scene = new Scene(document.getElementById('container'+m));
  for(i = 0; i<numberOfWaves; i++){
    scene.addWave(new Wave({maxSize: 50}));
  }
}
};

window.onload = init;
