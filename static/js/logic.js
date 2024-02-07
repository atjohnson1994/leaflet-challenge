// Creating the map object
let myMap = L.map("map", {
    center: [34.0522, -118.2437],
    zoom: 4
  });
  
// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

let url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'



function chooseColor(borough) {
    console.log(borough)
    if (borough == (-10,11)) return "green";
    else if (borough == "Bronx") return "yellow/green";
    else if (borough == "Manhattan") return "yellow";
    else if (borough == "Queens") return "yellow/orange";
    else if (borough == "Staten Island") return "orange";
    else return "red";
  }

d3.json(url).then(function(data) {
    L.geoJson(data, {
        style: function(feature) {
            return {
                color: 'red',
                fillOpacity: 0.5,
                weight: 1.5
            };
        },
    }).addTo(myMap);
    console.log(data['features'][0]['geometry']['type'])
});


// const geojsonlayer = L.geoJSON(data, {
//     style: function (feature) {
//       return {
//         color: feature.geometry.color || "red",
//         weight: 7,
//         opacity: 1,
//         fillOpacity: 0.7,
//       };
//     },
//     pointToLayer: (feature, latlng) => {
//       if (feature.geometry.type === "Point") {
//         return new L.circleMarker(latlng, {
//           radius: 20,
//         });
//       }
//     },
//     onEachFeature: function (feature, layer) {},
//   });