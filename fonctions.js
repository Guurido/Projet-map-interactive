async function getText(file)
{
    const arrayNumber = fetch(file)
    .then((response) => response.text())
    .then((data) => {
        const obj = JSON.parse(data);  

        function Coordonnées(item, index) {
          let marker = new L.Marker([obj[index].lat, obj[index].lon]);
          marker.bindPopup().openPopup();

            marker.bindPopup("Etablissement : " 
                                    + obj[index].APP_Libelle_etablissement + "<br>" + "Adresse : " + 
                                      obj[index].Adresse_2_UA + "<br>" + "Code postale : " + 
                                      obj[index].Code_postal + "<br>" + "Libelle : " + 
                                      obj[index].Libelle_commune + "<br>" + "Numéro : " + 
                                      obj[index].Numero_inspection + "<br>" + "Date_inspection : " + 
                                      obj[index].Date_inspection + "<br>").openPopup()

          

        
          marker.addTo(map); 
        }
        obj.forEach(Coordonnées);
    });     
}

getText("geo-alimconfiance_idf_oise.json");








//   console.log(obj[0].nom);
     //  console.log(obj[0].longitude);
     //   console.log(obj[0].latitude);

