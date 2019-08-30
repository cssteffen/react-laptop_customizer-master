import React from "react";
import "./Feature.css";
//import Feature from "./Feature";

function Feature(props) {
  return (
    <fieldset className="feature" key="insertFeatureHash">
      <legend className="feature__name">
        <h3>{this.props.feature}</h3>
      </legend>
    </fieldset>
  );
}

export default Feature;

/*
default props {
     selected: {
        Processor: {
          name: "17th Generation Intel Core HB (7 Core with donut spare)",
          cost: 700
        },
        "Operating System": {
          name: "Ubuntu Linux 16.04",
          cost: 200
        },
        "Video Card": {
          name: "Toyota Corolla 1.5v",
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
}
*/
