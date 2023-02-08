import React from "react";
import TableHeadings from "./TableHeadings";

export function TableHeading() {
  return (
    <thead>
      <tr>
        {[
          "Select",
          "ID",
          "First Name",
          "Last Name",
          "Phone",
          "Batch Code",
          "Subject",
        ].map((val, index) => (
          <TableHeadings key={index} value={val} />
        ))}
      </tr>
    </thead>
  );
}
