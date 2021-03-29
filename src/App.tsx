import React, { useState } from "react";
import { InputBlock } from "./components/InputBlock";
import "./App.css";
import { Column } from "./components/Column";

const App = () => {
  const [columns, setColumns] = useState<string[]>([]);

  const handleOnNewColumn = (name: string) => {
    setColumns((columns) => [...columns, name]);
  };

  const handleOnRemoveColumn = (index: number) => {
    setColumns((columns) => columns.filter((_, i) => index !== i));
  };

  return (
    <div className="App">
      <InputBlock
        onClickAction={handleOnNewColumn}
        placeholder="Enter Column Name"
        actionText="+ Column"
      />
      <div className={"column-container"}>
        {columns.map((column, index) => (
          <Column
            index={index}
            columnName={column}
            onRemoveColumn={handleOnRemoveColumn}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
