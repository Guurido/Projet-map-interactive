let mapOptions = {
    minZoom: 9,

    center:[49.4619993,2.3666405],
    zoom:7
}


let map = new L.map('map' , mapOptions);

let layer = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
