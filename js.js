/* setting start marker/set view */
var mymap = L.map('map').setView([
    50.26300965209187, 19.023685455322266], 15);

/* set my location */
    mymap.locate({
        setView: true, maxZoom: 15
    });

/* thunderforest cycle map tile layer */
var Thunderforest_OpenCycleMap = L.tileLayer('https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=4fbca27dba3f450787b52b350d86ddaf', {
attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
apikey: '<4fbca27dba3f450787b52b350d86ddaf>',
maxZoom: 22
}).addTo(mymap);

/*allow location */
function onLocationFound(e) {
var radius = e.accuracy;
L.marker(e.latlng).addTo(mymap)
  .bindPopup("Your location based on your current position. You cant hide:)").openPopup();
L.circle(e.latlng, radius).addTo(mymap);
}
mymap.on('locationfound', onLocationFound);

/*deny location */
function onLocationError(e) {
alert("You're not sharing your location with us. We can not show you bike trails in the area. Sad :((")
}
mymap.on('locationerror', onLocationError);
