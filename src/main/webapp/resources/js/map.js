$(function(){
	var markers = [
  [60, 36.1764135, 128.567801],
  [14, 37.6178135, 126.660801],
  [12, 35.9238135, 128.769801],
  [5, 35.6341135, 126.865501],
  [22, 34.6468235, 127.811801],
  [17, 35.6760135, 127.964801],
];
function initializeMaps() {
	var mar;
  var myLatLng = {
    lat: 36.6068135,
    lng: 127.867801
  };

  var map = new google.maps.Map(document.getElementById('map_canvas'), {
    zoom: 6,
    center: myLatLng
  });

  var bounds = new google.maps.LatLngBounds();

  markers.forEach(function(point) {
    generateIcon(point[0], function(src) {
      var pos = new google.maps.LatLng(point[1], point[2]);

      bounds.extend(pos);

      mar = new google.maps.Marker({
        position: pos,
        map: map,
        icon: src
      });
      google.maps.event.addListener(mar, "click",function(){
    	  if(point[0]<20){
    		  alert(point[0]);
    	  }else{
    		  map.setZoom(9);
    		  map.setCenter(this.getPosition());
    	  }
      });
    });
  });

  map.fitBounds(bounds);
}
var generateIconCache = {};

function generateIcon(number, callback) {
  if (generateIconCache[number] !== undefined) {
    callback(generateIconCache[number]);
  }

  var fontSize = 16,
    imageWidth = imageHeight = 35;

  if (number >= 20) {
    fontSize = 10;
    imageWidth = imageHeight = 55;
  } else if (number < 40 && number > 20) {
    fontSize = 14;
    imageWidth = imageHeight = 45;
  }

  var svg = d3.select(document.createElement('div')).append('svg')
    .attr('viewBox', '0 0 54.4 54.4')
    .append('g')

  var circles = svg.append('circle')
    .attr('cx', '27.2')
    .attr('cy', '27.2')
    .attr('r', '21.2')
    .style('fill', '#2063C6');

  var path = svg.append('path')
    .attr('d', 'M27.2,0C12.2,0,0,12.2,0,27.2s12.2,27.2,27.2,27.2s27.2-12.2,27.2-27.2S42.2,0,27.2,0z M6,27.2 C6,15.5,15.5,6,27.2,6s21.2,9.5,21.2,21.2c0,11.7-9.5,21.2-21.2,21.2S6,38.9,6,27.2z')
    .attr('fill', '#FFFFFF');

  var text = svg.append('text')
    .attr('dx', 27)
    .attr('dy', 32)
    .attr('text-anchor', 'middle')
    .attr('style', 'font-size:' + fontSize + 'px; fill: #FFFFFF; font-family: Arial, Verdana; font-weight: bold')
    .text(number);

  var svgNode = svg.node().parentNode.cloneNode(true),
    image = new Image();

  d3.select(svgNode).select('clippath').remove();

  var xmlSource = (new XMLSerializer()).serializeToString(svgNode);

  image.onload = (function(imageWidth, imageHeight) {
    var canvas = document.createElement('canvas'),
      context = canvas.getContext('2d'),
      dataURL;

    d3.select(canvas)
      .attr('width', imageWidth)
      .attr('height', imageHeight);

    context.drawImage(image, 0, 0, imageWidth, imageHeight);

    dataURL = canvas.toDataURL();
    generateIconCache[number] = dataURL;

    callback(dataURL);
  }).bind(this, imageWidth, imageHeight);

  image.src = 'data:image/svg+xml;base64,' + btoa(encodeURIComponent(xmlSource).replace(/%([0-9A-F]{2})/g, function(match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}
initializeMaps();
});