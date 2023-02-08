import React from "react";
import SelectOne from "./SelectOne";
import TableDatas from "./TableDatas";

function DataRow(props) {
  const { id, firstname, lastname, phone, batchcode, subject } = props.values;
  return (
    <tr>
      <td>
        <SelectOne
          id={id}
          checked={props.checked}
          checkedChangeHandler={props.checkedChangeHandler}
        />
      </td>
      <TableDatas key={0} value={id} />
      <TableDatas key={1} value={firstname} />
      <TableDatas key={2} value={lastname} />
      <TableDatas key={3} value={phone} />
      <TableDatas key={4} value={batchcode} />
      <TableDatas key={5} value={subject} />
    </tr>
  );
}

export default DataRow;
