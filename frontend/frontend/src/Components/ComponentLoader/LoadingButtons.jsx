import React from "react";
import Button from "./Button";

function LoadingButtons(props) {
  return (
    <div>
      <Button value="ADD" loader={props.loader} />
      <Button value="DETAILS" loader={props.loader} />
      <Button value="EDIT" loader={props.loader} />
      <Button value="DELETE" loader={props.loader} />
    </div>
  );
}

export default LoadingButtons;
