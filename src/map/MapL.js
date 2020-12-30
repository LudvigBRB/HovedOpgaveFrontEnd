import React, { useState } from "react";
import L from "leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
//import leafletImage from "leaflet-image";
import easyPrint from "leaflet-easyprint";
import apiFacade from "./ApiFacade";
import styled from "styled-components";

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

    place.width = 100;
    setPlace({ ...place });
    //console.log(place.width);
  };

  const changeTileSizeDown = (evt) => {
    evt.preventDefault();

    console.log("changetilesizedown");

    place.width = 50;
    setPlace({ ...place });
    //console.log(place.width);
  };

  const printSome = (evt) => {
    //evt.preventDefault();
    console.log("hej med dig");
    apiFacade.getDownload();
  };

  const initialState = {
    xAxis: 55.972998,
    yAxis: 12.568337,
    zoom: 12,
    maxZoom: 18,
    position: "",
    width: 100,
    height: 100,
  };

  const [place, setPlace] = useState(initialState);

  const StyledDiv = styled.div({
    width: place.width + "%",
  });

  React.useEffect(() => {
    var map = L.map("map").setView([place.xAxis, place.yAxis], place.zoom);

    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        'Map tiles &copy;  <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      width: 112,
    }).addTo(map);

    map.addControl(searchControl);

    L.easyPrint({
      title: "My awesome print button",
      position: "bottomright",
      sizeModes: ["A4Portrait", "A4Landscape"],
      exportOnly: true,
    }).addTo(map);
  }, []);

  //tMap.addControl(searchControl);

  return (
    <StyledDiv>
      <button onClick={changeTileSizeUp}>Small Map</button>
      <button onClick={changeTileSizeDown}>Large Map</button>
      <br></br>
      <br></br>
      <button onClick={printSome}>Download</button>
      <div id="map"></div>
    </StyledDiv>
  );
}

export default Map;

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
