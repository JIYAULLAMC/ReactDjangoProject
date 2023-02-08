import React from "react";

function InputDate(props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.name.toUpperCase()} : </label>
      <input
        style={{ marginBottom: "5px" }}
        type="date"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default InputDate;
