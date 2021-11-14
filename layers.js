
/* creating layer of main trails */
let mainTrails = L.layerGroup();

let ironTrail = L.marker([49.9454207, 18.6101103]).bindPopup('Iron Trail').addTo(mainTrails);
let eaglesNestTrail  = L.marker([50.79646 19.12409]).bindPopup('Eagles Nests Trail').addTo(mainTrails);
let vistulaTrail  = L.marker([49.6473215, 18.867739]).bindPopup('Vistula Trail').addTo(mainTrails);


var map = L.map('map', {
    center: [49.9454207, 18.6101103],
    zoom: 10,
    layers: [mainTrails];
});

var overlayMaps = {
    "main trails": mainTrails,
};

L.control.layers(overlayMaps).addTo(mymap);


   


