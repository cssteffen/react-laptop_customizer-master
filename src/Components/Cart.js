// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

/* ========== CART / SUMMARY =========== */
const summary = Object.keys(this.state.selected).map((feature, idx) => {
  const featureHash = feature + "-" + idx;
  const selectedOption = this.state.selected[feature];

  return (
    <div className="summary__option" key={featureHash}>
      <div className="summary__option__label">{feature} </div>
      <div className="summary__option__value">{selectedOption.name}</div>
      <div className="summary__option__cost">
        {USCurrencyFormat.format(selectedOption.cost)}
      </div>
    </div>
  );
});

const total = Object.keys(this.state.selected).reduce(
  (acc, curr) => acc + this.state.selected[curr].cost,
  0
);

/* ================= MY OLD CODE ================== 

import React from "react";
import Summary from "./Summary";

export default class Cart extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.selected[this.props.feature];
    });
    return (
      <div>
        <h2>Your cart</h2>
        <Summary />
      </div>
    );
  }
}
*/
