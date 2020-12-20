import L from "leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

const SearchBar = () => {
  const { map } = useLeaflet();
  console.log(map);

  const provider = new OpenStreetMapProvider();

  const searchControl = new GeoSearchControl({
    provider: provider,
  });

  const map = new L.Map("map");
  map.addControl(searchControl);
};
