import React from "react";

function InputChoice(props) {
  let value = props.value ? "positive" : "negative";
  return (
    <div>
      <fieldset>
        <legend>{props.name.toUpperCase()}</legend>
        {props.choices.map((choice, index) => (
          <label key={index}>
            {choice}
            <input
              name={props.name}
              style={{ marginBottom: "5px" }}
              checked={value === choice}
              type="radio"
              onChange={props.onChange}
            />
          </label>
        ))}
      </fieldset>
    </div>
  );
}

export default InputChoice;
