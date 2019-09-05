import React from "react";
import Feature from "./Feature";

/* ================= FORM ================== */

export default class FORM extends React.Component {
  render() {
    console.log(this.props.features);
    console.log(this.props.selected);
    console.log(this.props.handleUpdate);

    console.log(this.props);

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Feature
          features={this.props.features}
          selected={this.props.selected}
          handleUpdate={this.props.handleUpdate}
        />
      </form>
    );
  }
}
