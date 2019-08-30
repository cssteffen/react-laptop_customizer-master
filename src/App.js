import React, { Component } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
//import Cart from "./Components/Cart";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
//import slugify from "slugify";

import "./App.css";
//import Features from "./Components/FeatureItem";
//import Summary from "./Components/Summary";
import { features } from "./Components/Store";
//import Total from "./Components/Total";

// This object will allow us to
// easily convert numbers into US dollar values
// const USCurrencyFormat = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD"
// });

class App extends Component {
  /* ===== Interactivity - Update =======  */
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  render() {
    /* ====== BASE APP ======= */
    return (
      <div className="App">
        <Header />
        <main>
          <Form
            features={features}
            selected={this.state.selected}
            handleUpdate={this.updateFeature}
          />
          <section className="main__summary">
            {/* <Cart features={this.state.selected} /> */}
            <br />
            {/*<Total features={this.state.selected} />*/}
          </section>
        </main>
      </div>
    );
  }
}

export default App;

/*

    /* ===== Interactivity - Update ======= 
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

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

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.state.selected[feature];

      /* ====== SUMMARY OPTION ======= 
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

    /* ====== BASE APP ======= 
    return (
      <div className="App">
        {/* <header> =======HEADER=======
          <h1>ELF Computing | Laptops</h1>
        </header> }
        <Header />
        <main>
          <Form features={FEATURES} />
          {/* ======FORM=======
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {/*features */
/* array: made up of Option, FeatureItem }
          </form>
            }

          <section className="main__summary">
            <h2>Your cart</h2>
            {/*summary summary array }
            <Summary />
            {/*
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {/*USCurrencyFormat.format(total)*}
              </div>
            </div> }
          </section>
        </main>
      </div>
    );
  }
}

export default App;
*/
