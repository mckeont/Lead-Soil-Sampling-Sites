var myStyle = function(feature) {
  // return {fillColor: 'red'};
switch(feature.properties.CODE) {
  case '19131': return {color: "MidnightBlue", fillOpacity: 0.3, weight: 3};
  case '19151': return {color: "MidnightBlue", fillOpacity: 0.3, weight: 3};
  case '19139': return {color: "MidnightBlue", fillOpacity: 0.3, weight: 3};
  case '19104': return {color: "MidnightBlue", fillOpacity: 0.3, weight: 3};
  default: return {
    color:"MidnightBlue",
    fillOpacity: 0.3,
    weight: 1
  };
}
};
//Highlighting Feature
function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#f6ea18',
        dashArray: '',
        fillOpacity: 0.3
    });
  }
function resetHighlight(e) {
      geojson.resetStyle(e.target);
  }
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
    });
}

  //new icon parameters

// $(document).ready(function() {

var pennLogo = L.icon({
      iconUrl: 'images/pennLogo.png', //source, online search
      iconSize: [64, 64],
      iconAnchor: [0, 0],
      popupAnchor: [-1, -5],
});
console.log(pennLogo);
//
//


 var geojson = L.geoJson(zip, {
  style: myStyle,
  onEachFeature: onEachFeature
}).bindPopup(function (layer) {
    return layer.feature.properties.CODE;
}).addTo(map);

L.geoJson(lancaster,{
onEachFeature: onEachFeature
}).addTo(map);





L.geoJson(leadSample, {
  pointToLayer: function(feature, latlng) {
               var pennLogo = new L.Icon({
                     iconUrl: 'images/pennLogo.png', //source, online search
                     iconSize: [25, 25],
                     iconAnchor: [12, 25],
                     popupAnchor: [0, -25]
               });
               return L.marker(latlng, {icon: pennLogo});
           },
}).bindPopup(function (layer) {
    return (layer.feature.properties.Date +
    "<dd>" + "Sample A:" + " " + layer.feature.properties.Lead_A + "ppm"+ "</dd>"+
   "<dd>" + "Sample B:" + " " + layer.feature.properties.Lead_B + "ppm"+ "</dd>" +
  "<dd>" + "Sample C:" + " " + layer.feature.properties.Lead_C + "ppm"+ "</dd>"+
 "<dd>" + "Sample D:" + " " + layer.feature.properties.Lead_D + "ppm"+ "</dd>"+
"<dd>" + "Sample E:" + " " + layer.feature.properties.Lead_E + "ppm"+ "</dd>"
   );
  }).addTo(map);

  //testing out console.log

  console.log("Can you find the easter egg? It's a red circle, hidden somewhere in the world");

  if (window.console && window.console.log) {
  // console is available
}


//buttons
$(document).ready(function() {
 //Button Zoom
  $("#lanc").click(function(){
     map.setView([40.044437, -76.306229]);
     map.setZoom(10);
  });

  $("#philly").click(function(){
     map.setView([39.987614, -75.163913]);
     map.setZoom(10);
  });
});









  // Creating circles
  var circle = L.circle([32.715736, -117.161087], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);


// });

// .bindPopup(function (layer) {
//     return (layer.feature.properties.title);
//   })
