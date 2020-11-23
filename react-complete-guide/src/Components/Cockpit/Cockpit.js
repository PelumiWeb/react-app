import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";
import authContext from "../../context/auth-context";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request

    // const timer = setTimeout(() => {
    //   alert("save data to cloud");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      clearTimeout();
      console.log("[Cockpit] clean up work Effect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd Effect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  let asignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    asignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    asignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={asignedClasses.join(" ")}>This really works</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>

      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(cockpit);
