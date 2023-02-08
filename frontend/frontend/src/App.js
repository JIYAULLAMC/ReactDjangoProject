import { useState } from "react";
import LoadingButtons from "./Components/ComponentLoader/LoadingButtons";
import Create from "./Components/LoadingComponent/Create";
import Delete from "./Components/LoadingComponent/Delete";
import Details from "./Components/LoadingComponent/Details";
import Edit from "./Components/LoadingComponent/Edit";
import TableList from "./Components/TableListComponent/TableList";

function App() {
  const [Checked, setChecked] = useState(0);
  const [load, setLoad] = useState("");

  const checkedChangeHandler = (event) =>
    setChecked((preVal) => {
      return preVal === parseInt(event.target.name)
        ? 0
        : parseInt(event.target.name);
    });

  const Loader = (event) =>
    setLoad((preVal) => {
      return preVal === event.target.name ? "" : event.target.name;
    });

  return (
    <div>
      <TableList
        checked={Checked}
        checkedChangeHandler={checkedChangeHandler}
      />
      <LoadingButtons loader={Loader} />

      {load === "ADD" && <Create id={Checked} />}
      {load === "DELETE" && <Delete id={Checked} />}
      {load === "DETAILS" && <Details id={Checked} />}
      {load === "EDIT" && <Edit id={Checked} />}
    </div>
  );
}

export default App;
