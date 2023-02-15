import React, { Component } from "react";
import Counter from "./Counter"; 

export default class Counters extends Component {
  render() {
    const { counters, addToCart, onDelete } = this.props;
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            counter={counter}
            onDelete={onDelete}
            addToCart={addToCart}
            key={counter.id}
          />
        ))}
      </div>
    );
  }
}
