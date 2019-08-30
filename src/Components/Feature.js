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
  //const { features, selected, featureTitle, handleUpdate } = props;

  const features = Object.keys(this.prop.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = this.props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === this.state.selected[feature].name}
            onChange={e => this.updateFeature(feature, item)}
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
