import React, { Component } from 'react';

class CustomerInfo extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="text" placeholder="Planet"></input>
      </div>
    );
  }
};

export default CustomerInfo;
