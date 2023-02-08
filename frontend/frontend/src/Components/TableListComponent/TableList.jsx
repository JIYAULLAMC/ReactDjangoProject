import React, { useState, useEffect } from "react";
import axios from "axios";
import { TableHeading } from "./SmallComponents/TableHeading";
import { TableBody } from "./SmallComponents/TableBody";

export default function TableList(props) {
  const [TableData, SetTableData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then((response) => SetTableData([...response.data]));
  }, []);
  return (
    <div>
      <h1>List of values</h1>
      <table>
        <TableHeading />
        <TableBody
          statevalues={TableData}
          checked={props.checked}
          checkedChangeHandler={props.checkedChangeHandler}
        />
      </table>
    </div>
  );
}
