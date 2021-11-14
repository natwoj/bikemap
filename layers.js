

/* creating layer of main trails */
let ironTrail = L.marker([49.9454207, 18.6101103]).bindPopup('Iron Trail');
let eaglesNestTrail  = L.marker([50.79646, 19.12409]).bindPopup('Eagles Nests Trail');
let vistulaTrail  = L.marker([49.6473215, 18.867739]).bindPopup('Vistula Trail')

let mainTrails = L.layerGroup([ironTrail, eaglesNestTrail, vistulaTrail]);



