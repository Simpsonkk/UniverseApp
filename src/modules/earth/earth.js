// import '/src/styles/style.scss';

// function initMap() {
//   const myLatlng = { lat: -25.363, lng: 131.044 };

//   const map = new google.maps.Map(document.getElementById("map")!, {
//     zoom: 4,
//     center: myLatlng,
//   });

//   // Create the initial InfoWindow.
//   let infoWindow = new google.maps.InfoWindow({
//     content: "Click the map to get Lat/Lng!",
//     position: myLatlng,
//   });

//   infoWindow.open(map);

//   // Configure the click listener.
//   map.addListener("click", (mapsMouseEvent) => {
//     // Close the current InfoWindow.
//     infoWindow.close();

//     // Create a new InfoWindow.
//     infoWindow = new google.maps.InfoWindow({
//       position: mapsMouseEvent.latLng,
//     });
//     infoWindow.setContent(
//       JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
//     );
//     infoWindow.open(map);
//   });
// }

// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }
// window.initMap = initMap;
// export {};
// import { Loader } from '@googlemaps/js-api-loader';

// const loader = new Loader({
//   apiKey: "",
//   version: "weekly",
//   libraries: ["places"]
// });

// const mapOptions = {
//   center: {
//     lat: 0,
//     lng: 0
//   },
//   zoom: 4
// };
// loader
//   .load()
//   .then((google) => {
//     new google.maps.Map(document.getElementById("map"), mapOptions);
//   })
//   .catch(e => {
//     // do something
//   });

// loader.loadCallback(e => {
//   if (e) {
//     console.log(e);
//   } else {
//     new google.maps.Map(document.getElementById("map"), mapOptions);
//   }
// });

function initMap() {
  const mapDiv = document.getElementById('map');
  const map = new google.maps.Map(mapDiv, {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644),
  });

  // We add a DOM event here to show an alert if the DIV containing the
  // map is clicked.
  google.maps.event.addDomListener(mapDiv, 'click', () => {
    window.alert('Map was clicked!');
  });
}

window.initMap = initMap;

// function initMap() {
//   const myLatlng = { lat: -25.363, lng: 131.044 };
//   const map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: myLatlng,
//   });
//   // Create the initial InfoWindow.
//   let infoWindow = new google.maps.InfoWindow({
//     content: 'Click the map to get Lat/Lng!',
//     position: myLatlng,
//   });

//   infoWindow.open(map);
//   // Configure the click listener.
//   map.addListener('click', (mapsMouseEvent) => {
//     // Close the current InfoWindow.
//     infoWindow.close();
//     // Create a new InfoWindow.
//     infoWindow = new google.maps.InfoWindow({
//       position: mapsMouseEvent.latLng,
//     });
//     infoWindow.setContent(
//       JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2),
//     );
//     infoWindow.open(map);
//   });
// }

// window.initMap = initMap;
