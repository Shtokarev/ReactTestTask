import React, { useState } from "react";
import { InputBlock } from "../InputBlock";
import styles from "./Column.module.scss";

interface ColumnProps {
  columnName: string;
}

export const Column: React.FC<ColumnProps> = (props) => {
  const { columnName } = props;

  const [rows, setRows] = useState<string[]>([]);

  const addNewRow = (name: string) => {
    setRows((rows) => [...rows, name]);
  };

  return (
    <div className={styles.block}>
      <div className={styles.title}>{columnName}</div>
      <div className={styles.rowContainer}>
        {rows.map((row, index) => (
          <span>
            {index + 1}. {row}
          </span>
        ))}
      </div>
      <InputBlock
        onClickAction={addNewRow}
        placeholder="Enter Row Text"
        actionText="+ Row"
      />
    </div>
  );
};
