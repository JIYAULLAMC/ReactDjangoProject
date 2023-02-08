import React from "react";

function Button(props) {
  return props.loader ? (
    <button type="button" name={props.value} onClick={props.loader}>
      {props.value}
    </button>
  ) : (
    <button type="button" name={props.value}>
      {props.value}
    </button>
  );
}

export default Button;
