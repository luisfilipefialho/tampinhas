import j from './config.json' assert { type: 'json' };

let map = L.map('map', {
    center: j.mapData[0].cds,
    zoom: 16,
    scrollWheelZoom: false
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let markers = []
for (let i = 0; i <= 2; i++) {
    markers.push(L.marker(j.mapData[i].cds).bindPopup(j.mapData[i].address),);
    markers[0].openPopup()
    markers[i].addTo(map)
};

let mapIndex = 0
$('#map-arrow-left').click(() => {
    (mapIndex > -1 && mapIndex < 2) ? mapIndex++ : mapIndex = 0;
    fly(mapIndex)
});

$('#map-arrow-rigth').click(() => {
    mapIndex == 0 ? mapIndex = 2 : mapIndex--;
    fly(mapIndex)
});

function fly(mapI) {
    $('#map-location').text(j.mapData[mapI].name);
    map.flyTo(j.mapData[mapI].cds);
    markers[mapI].openPopup()
}

