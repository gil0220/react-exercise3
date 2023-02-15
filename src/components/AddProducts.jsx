import React, { Component } from "react";

import AddProduct from "./AddProduct";
export default class AddProducts extends Component {
  render() {
    const { addProduct, counter } = this.props;
    return (
      <div className="m-4">
        <AddProduct addProduct={addProduct} counter={counter} />
      </div>
    );
  }
}
