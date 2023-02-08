import React from "react";
import DataRow from "./DataRow";

export function TableBody(props) {
  return (
    <tbody>
      {props.statevalues &&
        props.statevalues.map((val, index) => {
          return (
            <DataRow
              key={index}
              values={val}
              checked={props.checked}
              checkedChangeHandler={props.checkedChangeHandler}
            />
          );
        })}
    </tbody>
  );
}
