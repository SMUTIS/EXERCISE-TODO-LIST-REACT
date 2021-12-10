//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import * as bootstrap from "bootstrap";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
