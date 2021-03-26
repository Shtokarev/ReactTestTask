import React, { useState } from "react";
import { InputBlock } from "./components/InputBlock";
import "./App.css";
import { Column } from "./components/Column";

const App = () => {
  const [columns, setColumns] = useState<string[]>([]);

  const addNewColumn = (name: string) => {
    setColumns((columns) => [...columns, name]);
  };

  return (
    <div className="App">
      <InputBlock
        onClickAction={addNewColumn}
        placeholder="Enter Column Name"
        actionText="+ Column"
      />
      <div className={"column-container"}>
        {columns.map((column) => (
          <Column columnName={column} />
        ))}
      </div>
    </div>
  );
};

export default App;
