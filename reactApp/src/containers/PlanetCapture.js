import React, { Component } from 'react';

class PlanetCapture extends Component {
  render() {
    return (
      <div>
        Please select the planet you want to travel to
        <br /><br />
        <form>
          <select name="planets">
            <option value="mercury">Mercury</option>
            <option value="venus">Venus</option>
            <option value="earth">Earth</option>
            <option value="mars">Mars</option>
            <option value="jupiter">Jupiter</option>
          </select>
          <br /><br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default PlanetCapture;