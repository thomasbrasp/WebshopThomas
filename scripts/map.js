var map = L.map('map').setView([51.38917, 4.59060], 16
);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var myIcon = L.icon({
    iconUrl: 'css/images/KeirsenTransparent2.png',
    iconSize: [38, 38],
    iconAnchor: [22, 22],
    popupAnchor: [-3, -76],

});
var marker = L.marker([51.388950883889464, 4.587603384739132], {icon: myIcon}).addTo(map);


function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

var polygon = L.polygon([
    [51.388467, 4.586858],
    [51.388413, 4.587341],
    [51.38832, 4.587228]
]).addTo(map);

polygon.bindPopup ("Hier kan je gratis parkeren.");
