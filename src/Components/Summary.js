import React from "react";
import "./Summary.css";

export default class Summary extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = prop[this.props.selected];
      const total = Object.keys(this.state.selected).reduce(
        (acc, curr) => acc + this.state.selected[curr].cost,
        0
      );
    });
    /* ====== SUMMARY OPTION ======= */
    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature}</div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {/*USCurrencyFormat.format(selectedOption.cost)*/}
        </div>
      </div>
    );
  }
}
