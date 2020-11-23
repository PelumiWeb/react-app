import React from "react";

const validation = (props) => {
  let validationMsg = "Text too long enough";

  if (props.inputLength <= 5) {
    validationMsg = "Text too short";
  }

  return (
    <div>
      <p> {validationMsg}</p>
    </div>
  );
};

export default validation;
