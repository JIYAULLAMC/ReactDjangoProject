import React from "react";

function InputNumber(props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.name.toUpperCase()} : </label>
      <input
        style={{ marginBottom: "5px" }}
        id={props.name}
        type="number"
        name={props.name}
        placeholder={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>  
  );
}

export default InputNumber;
