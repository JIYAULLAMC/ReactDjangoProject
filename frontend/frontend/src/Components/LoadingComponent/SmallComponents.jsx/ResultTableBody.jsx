import React from "react";
import ResultDataRow from "./ResultDataRow";

function ResultTableBody(props) {
  const {
    id,
    firstname,
    lastname,
    phone,
    covid,
    batchcode,
    dateofjoining,
    subject,
    assessment1,
    assessment2,
    assessment3,
  } = props.resultData;
  const total =
    parseFloat(assessment1) + parseFloat(assessment2) + parseFloat(assessment3);

  const percet = ((total / 300) * 100).toFixed(2);
  return (
    <tbody>
      <ResultDataRow name="id" value={id} />
      <ResultDataRow name="firstname" value={firstname} />
      <ResultDataRow name="lastname" value={lastname} />
      <ResultDataRow name="phone" value={phone} />
      <ResultDataRow name="covid" value={covid ? "positive" : "negative"} />
      <ResultDataRow name="batchcode" value={batchcode} />
      <ResultDataRow name="dateodjoining" value={dateofjoining} />
      <ResultDataRow name="subject" value={subject} />
      <ResultDataRow name="assessment1" value={assessment1} />
      <ResultDataRow name="assessment2" value={assessment2} />
      <ResultDataRow name="assessment3" value={assessment3} />
      <ResultDataRow name="Total" value={total} />
      <ResultDataRow
        name="Percentage"
        value={percet}
        bgcolor={
          percet > 85
            ? "green"
            : percet > 65
            ? "blue"
            : percet > 35
            ? "yellow"
            : "red"
        }
      />
      <ResultDataRow
        name="Class"
        value={
          percet > 85
            ? "Distiction"
            : percet > 65
            ? "First Class"
            : percet > 35
            ? "Second Class"
            : "Fail"
        }
      />
    </tbody>
  );
}

export default ResultTableBody;
