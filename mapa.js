let map = L.map('map').setView([-16.82812, -65.33732],6)

//fondo base de openstreetmaps
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change', function(e) {

  let selectedOption = e.target.options[e.target.selectedIndex];
  let coords = selectedOption.value.split(",");
  let name = selectedOption.text;
  
  map.flyTo(coords, 18);
  // Crear un marcador en la ubicación seleccionada
  L.marker(coords).addTo(map)
    .bindPopup(name)
    .openPopup();
});



