/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Cart extends Component {
  getName() {
    return this.props.cart.name;
  }
  getClassName() {
    if (this.props.cart.value > 0) {
      return "badge bg-primary";
    }
    return "badge bg-warning text-dark";
  }

  formatText() {
    if (this.props.cart.value > 0) {
      return this.props.cart.value;
    }
    return "Zero";
  }

  componentWillUnmount() {
    console.log("unmounting...");
  }

  render() {
    const { cart, children } = this.props;
    console.log(this.props);
    return (
      <>
        <div className="m-4">
          {
            <>
              <a href={this.props.cart.image}>{this.getName()}</a>

              <br />
              <img src={this.props.cart.image} width="200"></img>
              <br />
            </>
          }
          {children}

          <button
            onClick={() => this.props.onDecrement(cart.id)}
            className="btn btn-secondary ms-1"
            disabled={cart.value === 0}
          >
            -
          </button>
          <span className={this.getClassName()}>{this.formatText()}</span>
          <button
            onClick={() => this.props.onIncrement(cart.id)}
            className="btn btn-primary "
          >
            +
          </button>
          <button
            onClick={() => this.props.onDelete(cart.id)}
            className="btn btn-danger ms-1"
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}
