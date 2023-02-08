import React from "react";

function SelectOne(props) {
  return (
    <input
      type="checkbox"
      name={props.id}
      checked={props.checked === props.id ? true : false}
      onChange={props.checkedChangeHandler}
    />
  );
}

export default SelectOne;
