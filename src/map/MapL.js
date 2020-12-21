import React from "react";
import L from "leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

const provider = new OpenStreetMapProvider();

const searchControl = new GeoSearchControl({
  provider: provider,
});

//const map = new L.Map("map");
//map.addControl(searchControl);

function Map() {
  React.useEffect(() => {
    // create map
    L.map("map", {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });
  }, []);
  return <div id="map"></div>;
}

export default Map;
