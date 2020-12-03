import React, { useState } from "react";
//import logo from "./logo.svg";
import { MapContainer, TileLayer } from "react-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import "./App.css";

function App() {
  const initialState = {
    xAxis: 55.676098,
    yAxis: 12.568337,
    zoom: 12,
    maxZoom: 18,
    position: "",
  };

  console.log("qiefwnewfin");

  const [place, setPlace] = useState(initialState);

  //const handleInput = (evt) => {};

  const handleSubmit = (evt) => {
    const target = evt.target;
    const id = target.id;
    const value = target.value;

    console.log(value);
    console.log("hej1");

    const provider = new OpenStreetMapProvider();
    const results = provider.search({ query: "virum" });

    place.xAxis = results.x;
    place.yAxis = results.y;

    console.log("x-koordinat" + results.x);

    place[id] = value;
    setPlace({ ...place });
  };

  var marker = L.marker([51.5, -0.09]).addTo(mymap);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin=""
      />
      <script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""
      ></script>

      <div id="mapid">
        <MapContainer
          className="markercluster-map"
          center={[place.xAxis, place.yAxis]}
          zoom={initialState.zoom}
          maxZoom={initialState.maxZoom}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            //attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>

        <div style={{ marginTop: 25 }}>
          <form onSubmit={handleSubmit}>
            <input id="position" type="text" value={place.position} />
            <br />

            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
function App() {
  return (
    <MapContainer
      className="markercluster-map"
      center={[55.676098, 12.568337]}
      zoom={12}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default App;

/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/
