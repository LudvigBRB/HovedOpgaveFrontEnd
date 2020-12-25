import React, { useState } from "react";
import L from "leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
//import leafletImage from "leaflet-image";
import easyPrint from "leaflet-easyprint";
import apiFacade from "./ApiFacade";

const provider = new OpenStreetMapProvider();

const searchControl = new GeoSearchControl({
  provider: provider,
});

//const map = new L.Map("map");
//map.addControl(searchControl);

function Map() {
  const changeTileSizeUp = (evt) => {
    //const target = evt.target;
    //const id = target.id;
    //const value = target.value;
    evt.preventDefault();

    place.width = 500;
    setPlace({ ...place });
    //console.log(place.width);
  };

  const changeTileSizeDown = (evt) => {
    evt.preventDefault();

    place.width = 1000;
    setPlace({ ...place });
    //console.log(place.width);
  };

  const printSome = (evt) => {
    //console.log("hej med dig");
    apiFacade.getDownload();
  };

  const initialState = {
    xAxis: 55.972998,
    yAxis: 12.568337,
    zoom: 12,
    maxZoom: 18,
    position: "",
    width: 1000,
    height: 10000,
  };

  const [place, setPlace] = useState(initialState);

  React.useEffect(() => {
    var map = L.map("map").setView([place.xAxis, place.yAxis], place.zoom);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        'Map tiles &copy;  <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    map.addControl(searchControl);

    L.easyPrint({
      title: "My awesome print button",
      position: "bottomright",
      sizeModes: ["A4Portrait", "A4Landscape"],
      exportOnly: true,
    }).addTo(map);

    // create map
    /*
    const tMap = L.map("map", {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });

    tMap.addControl(searchControl);

    L.easyPrint({
      title: "My awesome print button",
      position: "bottomright",
      sizeModes: ["A4Portrait", "A4Landscape"],
      exportOnly: true,
    }).addTo(tMap);

    /*leafletImage(tMap, function (err, canvas) {
      // now you have canvas
      // example thing to do with that canvas:

      const x = 500;
      const y = 600;

      var img = document.createElement("img");
      var dimensions = tMap.getSize();
      img.width = dimensions.x;
      img.height = dimensions.y;
      img.src = canvas.toDataURL();
      document.getElementById("images").innerHTML = "";
      document.getElementById("images").appendChild(img);
    });*/
  }, []);

  //tMap.addControl(searchControl);

  return (
    <div>
      <button onClick={changeTileSizeUp}>Small Map</button>
      <button onClick={changeTileSizeDown}>Large Map</button>
      <br></br>
      <br></br>
      <button onClick={printSome}>Download</button>
      <div id="map"></div>
    </div>
  );
}

export default Map;
