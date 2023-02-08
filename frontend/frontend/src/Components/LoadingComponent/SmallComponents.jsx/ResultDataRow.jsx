import React from "react";
import propsTypes from "prop-types";

function ResultDataRow({ bgcolor, name, value }) {
  return (
    <tr style={{ backgroundColor: bgcolor }}>
      <td>{name.toUpperCase()}</td>
      <td>{value}</td>
    </tr>
  );
}
ResultDataRow.defaultProps = {
  bgcolor: "white",
  name: "",
  value: "",
};
ResultDataRow.propsTypes = {
  bgcolor: propsTypes.string,
  name: propsTypes.string,
  value: propsTypes.string,
};

export default ResultDataRow;
