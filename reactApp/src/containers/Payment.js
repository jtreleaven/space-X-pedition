import React, { Component } from 'react';

class Payment extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Street"></input>
        <input type="text" placeholder="City"></input>
        <input type="text" placeholder="State"></input>
        <input type="text" placeholder="Zip"></input>
      <div>Please choose a Payment Plan below</div>
      <select name="payment">
        <option value="Pay entire amount now">Pay entire amount now</option>
        <option value="I'd like to finance over 36mo">I'd like to finance over 36 months</option>
        <option value="I'd like to finance over 72mo">I'd like to finance over 72 months</option>
        <option value="I'd like to finance over 1200mo">I'd like to finance over 1200 months</option>
      </select>
      </div>
    )
  }
};

export default Payment;

