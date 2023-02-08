import React from "react";
import axios from "axios";
import InputSubmit from "./SmallComponents.jsx/InputSubmit";

function Delete(props) {
  const submitHandler = () => {
    axios
      .delete("http://127.0.0.1:8000/api/" + props.id + "/")
      .then(alert("Record Deleted!!!"));
  };

  return props.id > 0 ? (
    <div>
      Are you want to Delete record of id {props.id}.
      <form onSubmit={submitHandler}>
        <InputSubmit name="Yes" />
      </form>
    </div>
  ) : (
    <h3>Select Record</h3>
  );
}

export default Delete;
