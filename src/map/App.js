import React, { useState } from "react";
//import logo from "./logo.svg";
import { MapContainer, TileLayer, Rectangle } from "react-leaflet";
//import L from "leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
//import Search from "./Search";
import "./App.css";

function App() {
  //var zoom = 2;

  const initialState = {
    xAxis: 55.672098,
    yAxis: 12.568337,
    zoom: 12,
    maxZoom: 18,
    position: "",
    width: 1000,
    height: 10000,
  };

  const [place, setPlace] = useState(initialState);

  console.log(place.zoom);

  //const handleInput = (evt) => {};

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log("from handleSubmit");

    const target = evt.target;
    const id = target.id;
    const value = target.value;

    const provider = new OpenStreetMapProvider();
    const results = provider.search({ query: "Virum" });

    console.log("x-koordinat" + results.x);
    console.log("y-koordinat" + results.y);

    place.xAxis = results.x;
    place.yAxis = results.y;

    place[id] = value;
    setPlace({ ...place });

    /*
    const target = evt.target;
    const id = target.id;
    const value = target.value;*/
    //console.log(value);
    console.log("hej1");

    //console.log("x-koordinat" + results.x);
    //console.log("x-koordinat" + results.y);
  };

  const handleInput = (evt) => {
    evt.preventDefault();

    console.log("from handleInput");

    const target = evt.target;
    const id = target.id;
    const value = target.value;

    //console.log(results);

    //place.xAxis = results.x;
    //place.yAxis = results.y;

    place[id] = value;
    setPlace({ ...place });
  };

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

  //var marker = L.marker([51.5, -0.09]).addTo(mymap);

  //var L = window.L;
  //var mymap = L.map("mapid").setView([51.505, -0.09], 13);

  const rectangle1 = [
    [55.667, 12.59],
    [55.679, 12.568336],
  ];
  const rectangle2 = [
    [55.697, 12.6],
    [55.699, 12.568736],
  ];
  const rectangle3 = [
    [55.767, 12.59],
    [55.979, 12.568336],
  ];
  const rectangle4 = [
    [55.627, 12.59],
    [55.639, 12.568336],
  ];
  const purpleOptions = { color: "purple" };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />

      <script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossOrigin=""
      ></script>

      <div>
        <button onClick={changeTileSizeUp}>Small map</button>

        <button onClick={changeTileSizeDown}>Large map</button>
      </div>

      <div className="map-container">
        <MapContainer
          className="markercluster-map"
          center={[place.xAxis, place.yAxis]}
          zoom={place.zoom}
          maxZoom={place.maxZoom}
          style={({ height: place.height }, { width: place.width })}
          //style={({ height: 1000 }, { width: 1000 })}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            //attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          <Rectangle bounds={rectangle1} pathOptions={purpleOptions} />
          <Rectangle bounds={rectangle2} pathOptions={purpleOptions} />
          <Rectangle bounds={rectangle3} pathOptions={purpleOptions} />
          <Rectangle bounds={rectangle4} pathOptions={purpleOptions} />
        </MapContainer>

      <div style={{ marginTop: 25 }}>
        <form onSubmit={handleSubmit} onChange={handleInput}>
          <input id="position" type="text" value={place.position} />
          <br />
          <button>Submit</button>
        </form>
      </div>

      </div>
      );
}

export default App;
