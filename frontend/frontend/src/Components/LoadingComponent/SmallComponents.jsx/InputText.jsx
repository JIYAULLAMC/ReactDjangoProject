import React from "react";

function InputText(props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.name.toUpperCase()} : </label>
      <input
        style={{ marginBottom: "5px" }}
        id={props.name}
        type="text"
        name={props.name}
        placeholder={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default InputText;
