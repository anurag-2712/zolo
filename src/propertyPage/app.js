import React from "react";
import ReactDOM from "react-dom";
import PropertyData from "./propertyData";
require("../stylesheet/propertyPage.scss");

const app = document.getElementById("app");

ReactDOM.render(
    <PropertyData />, app
);