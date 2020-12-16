import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./map/App";
//import ScreenShot from "./map/ScreenShot";
import * as serviceWorker from "./serviceWorker";
//import MapComp from "./map/MapComp";
import Search from "./map/Search";
//import Function from "./functions";
//import apiFacade from "./apiFacade";

//ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

//element eksistere i Virtual DOM
//const element = <h1> Heja dig</h1>;
//ved rendering eksistere det i DOM

//ReactDOM.render(<Map />, rootElement);

//<ScreenShot /><MapComp />

const target = document.querySelector("#root");
ReactDOM.render(
  <React.StrictMode>
    <Search />
  </React.StrictMode>,
  target
);
serviceWorker.unregister();
