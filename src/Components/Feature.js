import React from "react";
//import Options from "./Options";
//import FEATURES from "./Store";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default function Feature(props) {
  //render() {
  //console.log(props.features.options.onChange);
  console.log(props);
  //handleUpdate={selected => this.updateFeature(selected)}

  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === props.selected[feature].name}
            onChange={e => props.handleUpdate(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({USCurrencyFormat.format(item.cost)})
          </label>
        </div>
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });
  // }
  return features;
}

/* ================= MY OLD CODE ================== 

import React from "react";
import "./Feature.css";

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
*/
