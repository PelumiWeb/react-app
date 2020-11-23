import React from "react";

const authContext = React.createContext({
  aunthemticated: false,
  login: () => {},
});

export default authContext;
