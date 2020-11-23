import React, { Component } from "react";

class PelumiInput extends Component {
  state = {
    Enter: "Please enter something",
    input: [],
  };

  getAndDisplay = () => {};

  render() {
    return (
      <React.Fragment>
        <div>
          <input type="text" placeholder="Enter here"></input>
          <button>enter</button>
          <p></p>
        </div>
      </React.Fragment>
    );
  }
}

export default PelumiInput;
