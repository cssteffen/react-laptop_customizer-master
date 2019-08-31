import React from "react";
import Feature from "./Feature";

/* ================= FORM ================== */

export default class FORM extends React.Component {
  render() {
    console.log(this.props.features);
    console.log(this.props.selected);
    console.log(this.updateFeature);

    console.log(this.props);

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Feature
          features={this.props.features}
          selected={this.props.selected}
          handleUpdate={this.props.updateFeature}
        />
      </form>
    );
  }
}

/* ================= MY OLD CODE ================== 

import React from "react";
import FeatureItem from "./FeatureItem";
//import Feature from "./Feature";
import "./Form";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let keys = Object.keys(this.props.features);
    const features = keys.map((item, idx) => (
      <FeatureItem
        featureName={item}
        options={this.props.features[item]}
        idx={idx}
        selected={this.props.selected}
        handleUpdate={this.updateFeature}
      />
    ));

    return (
      <div>
        <h2>Customize your laptop</h2>
        <form className="main__form">{features}</form>
      </div>
    );
  }
}

//Form.defaultProps = {
//  features: []
//};
*/
