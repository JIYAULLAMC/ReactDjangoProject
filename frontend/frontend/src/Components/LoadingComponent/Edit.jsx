import React, { useState } from "react";
import InputChoice from "./SmallComponents.jsx/InputChoice";
import InputDate from "./SmallComponents.jsx/InputDate";
import InputNumber from "./SmallComponents.jsx/InputNumber";
import InputSubmit from "./SmallComponents.jsx/InputSubmit";
import InputText from "./SmallComponents.jsx/InputText";
import axios from "axios";

function Edit(props) {
  const [FormData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    phone: "",
    covid: false,
    batchcode: "",
    dateofjoining: "",
    subject: "",
    assessment1: "",
    assessment2: "",
    assessment3: "",
  });
  const [errorName, setErrorName] = useState("");

  React.useEffect(() => {
    props.id &&
      axios
        .get("http://127.0.0.1:8000/api/" + props.id + "/")
        .then((response) => setFormData(response.data));
  }, [props.id]);
  const changeHandler = (event) => {
    const { name, value, type } = event.target;
    return setFormData((preVal) => {
      return {
        ...preVal,
        [name]: type === "radio" ? !preVal.covid : value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (FormData.firstname.length < 3 || FormData.firstname.length > 32) {
      return setErrorName("First name should be of Length 3 - 31");
    } else if (FormData.lastname.length < 1 || FormData.lastname.length > 32) {
      return setErrorName("Last name should be of Length 1 - 31");
    } else if (FormData.phone.toString().length !== 10) {
      return setErrorName("Phone number should be of Length 10");
    } else if (
      parseInt(FormData.dateofjoining.slice(0, 4)) < 2004 ||
      parseInt(FormData.dateofjoining.slice(0, 4)) > new Date().getFullYear() ||
      FormData.dateofjoining === ""
    ) {
      return setErrorName("Year should be between 2004 and currect year");
    } else if (FormData.batchcode.length !== 5) {
      return setErrorName("Batch Code should be of Length 5");
    } else if (FormData.subject.length >= 32 || FormData.subject.length === 0) {
      return setErrorName("Subject length should be of Length 1 - 64");
    } else if (
      FormData.assessment1 === "" ||
      FormData.assessment1 < 0 ||
      FormData.assessment1 > 100
    ) {
      return setErrorName("Assessment1 marks should be between 0 - 100");
    } else if (
      FormData.assessment2 === "" ||
      FormData.assessment2 < 0 ||
      FormData.assessment2 > 100
    ) {
      return setErrorName("Assessment2 marks should be between 0 - 100");
    } else if (
      FormData.assessment3 === "" ||
      FormData.assessment3 < 0 ||
      FormData.assessment3 > 100
    ) {
      return setErrorName("Assessment3 marks should be between 0 - 100");
    } else {
      errorName !== "" && setErrorName("");
    }

      axios
        .put("http://127.0.0.1:8000/api/" + props.id + "/", FormData)
        .then((r) => window.location.reload(false))
        .catch((error) => console.log(error));
  };

  return props.id > 0 ? (
    <form onSubmit={submitHandler}>
      <h1>Create Record</h1>
      {errorName !== "" && <h4>{errorName}</h4>}

      <InputText
        name="firstname"
        value={FormData.firstname}
        onChange={changeHandler}
      />
      <InputText
        name="lastname"
        value={FormData.lastname}
        onChange={changeHandler}
      />
      <InputNumber
        name="phone"
        value={FormData.phone}
        onChange={changeHandler}
      />
      <InputChoice
        name="covid"
        choices={["positive", "negative"]}
        value={FormData.covid}
        onChange={changeHandler}
      />
      <InputDate
        name="dateofjoining"
        value={FormData.dateofjoining}
        onChange={changeHandler}
      />
      <InputText
        name="batchcode"
        value={FormData.batchcode}
        onChange={changeHandler}
      />
      <InputText
        name="subject"
        value={FormData.subject}
        onChange={changeHandler}
      />
      <InputNumber
        name="assessment1"
        value={FormData.assessment1}
        onChange={changeHandler}
      />
      <InputNumber
        name="assessment2"
        value={FormData.assessment2}
        onChange={changeHandler}
      />
      <InputNumber
        name="assessment3"
        value={FormData.assessment3}
        onChange={changeHandler}
      />
      <InputSubmit name="update" />
    </form>
  ) : (
    <h3>Select Record</h3>
  );
}

export default Edit;
