import React, { Component } from "react";

import classes from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import withClass from "../hoc/WithClass";
import Aux from "../hoc/au";
import Authcontext from "../context/auth-context";
import PelumiInput from "../Components/PelumiInput";

// import Radium, { StyleRoot } from "radium";

// import UserInput from "./UserInput/UserInput";
// import UserOutput from "./UserOutput/UserOutput";
// import Validation from "./validationComponent/Validation";
// import Char from "./Char/Char";

class App extends Component {
  // state = {
  //   userInput: "",
  // };

  // inputChangedHandler = (event) => {
  //   this.setState({ userInput: event.target.value });
  // };

  // deleteCharHandler = (index) => {
  //   const text = this.state.userInput.split("");
  //   text.splice(index, 1);
  //   const updatedText = text.join("");
  //   this.setState({ userInput: updatedText });
  // };
  // render() {
  //   const charList = this.state.userInput.split("").map((char, index) => {
  //     return (
  //       <Char
  //         character={char}
  //         key={index}
  //         clicked={() => this.deleteCharHandler(index)}
  //       />
  //     );
  //   });

  //   return (
  //     <div className="App">
  //       <input
  //         type="text"
  //         onChange={this.inputChangedHandler}
  //         value={this.state.userInput}
  //       />
  //       <p>{this.state.userInput}</p>
  //       <Validation inputLength={this.state.userInput.length} />
  //       {charList}
  //     </div>
  //   );
  // }

  // state = {
  //   username: "superPelumi",
  // };
  // inputChangeHandler = (event) => {
  //   this.setState({ username: event.target.value });
  // };
  // render() {
  //   return (
  //     <div className="App">
  //       <UserInput
  //         changed={this.inputChangeHandler}
  //         currentName={this.state.username}
  //       />
  //       <UserOutput userName={this.state.username} />
  //       <UserOutput userName={this.state.username} />
  //       <UserOutput userName={this.state.username} />
  //     </div>
  //   );
  // }

  constructor(props) {
    super(props);
    console.log("[App,js] constructor");
    this.state;
  }

  state = {
    persons: [
      { id: "asfa1", name: "Max", age: 28 },
      { id: "vasfd1", name: "Manu", age: 28 },
      { id: "asdf1", name: "Stephaine", age: 28 },
      { id: "asdf2", name: "Pelumi", age: 21 },
    ],
    otherState: "Some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authentication: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("App,js getDerivedStateFromProps", props);
    return state;
  }

  componentWillMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentDidUpdate");
    return true;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  switchNameHandler = () => {
    // console.log("was clicked");
    this.setState({
      persons: [
        { name: "Maxmillian", age: "28" },
        { name: "Manu", age: 28 },
        { name: "Stephaine", age: 27 },
        { name: "Pelumi", age: 21 },
      ],
    });
  };
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return { persons, changeCounter: prevState.changeCounter + 1 };
    });
  };
  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  loginHandler = () => {
    this.setState({ authentication: true });
  };

  showHobbies = () => {};

  render() {
    console.log("App.js render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.nameChangedHandler}
          isAunthenticated={this.state.authentication}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <Authcontext.Provider
          value={{
            aunthenticated: this.state.authentication,
            login: this.loginHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
          <PelumiInput Clicked={this.showHobbies} />
        </Authcontext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
