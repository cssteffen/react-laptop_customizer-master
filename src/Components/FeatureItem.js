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
    //const features = Object.keys(this.props).map((feature, idx) => {
    //const featureHash = feature + "-" + idx;
    //const options = this.props.features[feature].map(item => {
    // const itemHash = slugify(JSON.stringify(item));
    //)}
    const options = this.props.options.map((option, idx) => {
      const itemHash = slugify(JSON.stringify(option.name));
      //console.log(onChange);

      return (
        <div key={this.props.idx} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature_option"
            name={this.props.featureName}
            checked={
              option.name === this.props.selected[this.props.option].name
            }
            //onChange={e => this.props.updateFeature(option, idx)}
          ></input>
          <label htmlFor={itemHash} className="feature__label">
            {option.name} ({USCurrencyFormat.format(option.cost)})
          </label>
        </div>
      );
    });

    //});
    return (
      /*<div key={itemHash} className="feature__item">
       <input
          type="radio"
          //id={ItemHash}
          className="feature_option"
          name={slugify(feature)}
          checked={item.name === this.props.selected[this.props.feature].name}
          onChange={e => this.updateFeature(feature, item)}
        ></input>
        <label htmlFor="insertItemHash" className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
    </div> */
      <div>
        <fieldset className="feature" key="insertFeatureHash">
          <legend className="feature__name">
            <h3>{this.props.featureName}</h3>
          </legend>
        </fieldset>
        {options}
      </div>
    );
    //});
    // });
  }
}

/*
const features = Object.keys(this.props.features).map((feature, idx) => {
  const featureHash = feature + "-" + idx;
  const options = this.props.features[feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));

    /* ====== FEATURE ITEM ======= 
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

  /* ====== FEATURE ======= 
  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
});
*/
