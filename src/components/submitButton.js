import React, { Component } from 'react';

export default class SubmitButton extends Component {

  renderSubmit() {
    return (
      <div>
        <select>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
    );
  }

  render() {
    return(
      <div>
        <button onClick={this.renderSubmit()}>Rate It!</button>
      </div>
    );
  }
}
