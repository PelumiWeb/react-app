import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Person.js] getDerivedStateFromProps");

  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("[Person.js]  componentWillReceiveProps", props);
  // }

  // componentWillUnmount() {
  //   console.log("[Persons.js] componentWillUnmount");
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   if (
  //     (nextProps.persons !== this.props.persons || nextProps.changed !== this,
  //     this.props.changed || nextProps.clicked !== this,
  //     this.props.clicked)
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }

  getSnapshotBeforeUpdate(prevState, nextState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapShot);
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
          isAuth={this.props.isAunthenticated}
        />
      );
    });
  }
}

export default Persons;
