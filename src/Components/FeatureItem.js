/* ================= MY OLD CODE ================== 

import React from "react";
import "./FeatureItem.css";
import slugify from "slugify";

export default class FeatureItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const USCurrencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });

    const options = this.props.options.map((option, idx) => {
      const itemHash = slugify(JSON.stringify(option.name));
      const selectedOption = this.props.selected[option.name];

      console.log("==Options==");
      console.log(options);
      console.log("== featureName: ==");
      console.log(this.props.featureName);
      console.log("== option.name ==");
      console.log(option.name);
      console.log("== option.checked ==");
      console.log(option.checked);
      console.log("== selectedOption ==");
      console.log(selectedOption);

      return (
        <div key={this.props.idx} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature_option"
            name={this.props.featureName}
            checked={option.name === selectedOption}
            onChange={e => this.updateFeature}
          ></input>
          <label htmlFor={itemHash} className="feature__label">
            {option.name} ({USCurrencyFormat.format(option.cost)})
          </label>
        </div>
      );
    });

    return (
      <div>
        <fieldset className="feature" key={this.props.idx}>
          <legend className="feature__name">
            <h3>{this.props.featureName}</h3>
          </legend>
        </fieldset>
        {options}
      </div>
    );

  }
}
*/
