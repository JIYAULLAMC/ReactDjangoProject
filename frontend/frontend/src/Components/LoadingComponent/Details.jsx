import axios from "axios";
import React, { useEffect, useState } from "react";
import ResultTableBody from "./SmallComponents.jsx/ResultTableBody";

function Details(props) {
  const [SingleData, setSingleData] = useState({
    id: "",
    firstname: "",
    lastname: "",
    phone: "",
    covid: "",
    batchcode: "",
    dateofjoining: "",
    subject: "",
    assessment1: "",
    assessment2: "",
    assessment3: "",
  });
  useEffect(() => {
    props.id &&
      axios
        .get("http://127.0.0.1:8000/api/" + props.id + "/")
        .then((response) => setSingleData(response.data));
  }, [props.id]);
  return (
    SingleData.id === props.id ? (
      <div>
        <h1>Details</h1>
        <table>
          <ResultTableBody resultData={SingleData} />
        </table>
      </div>
    ):<h3>Select Record</h3>
  );
}

export default Details;
