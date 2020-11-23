import React, { Component } from "react";
import PropTypes from "prop-types";

import Aux from "../../../hoc/au";
import withClass from "../../../hoc/WithClass";
import classes from "./Person.css";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super();
    this.inputElementRef = React.createRef();
  }
  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.aunthenticated);
  }

  render() {
    console.log("[Person.js] rendering");
    return (
      <Aux>
        {this.context.aunthenticated ? (
          <p>Aunthenticated!</p>
        ) : (
          <p>Please aunthenticate</p>
        )}
        <p key="i1" onClick={this.props.click}>
          I'm a {this.props.name} I am {this.props.age} years old
        </p>
        <p key="i2">{this.props.children}</p>,
        <input
          key="i3"
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

// Person.PropTypes = {
//   click: PropTypes.func,
//   name: PropTypes.string,
//   age: PropTypes.number,
//   changed: PropTypes.func,
// };

export default withClass(Person, classes.Person);
