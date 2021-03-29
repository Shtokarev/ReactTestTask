import React, { useState } from "react";
import { InputBlock } from "../InputBlock";
import { Button } from "../Button";
import { Row } from "../Row";

import styles from "./Column.module.scss";

interface ColumnProps {
  columnName: string;
  index: number;
  onRemoveColumn: (index: number) => void;
}

export const Column: React.FC<ColumnProps> = (props) => {
  const { columnName, index, onRemoveColumn } = props;

  const [rows, setRows] = useState<string[]>([]);

  const addNewRow = (name: string) => {
    setRows((rows) => [...rows, name]);
  };

  const handleOnRemoveColumn = () => onRemoveColumn(index);

  const handleOnRemoveRow = (index: number) => {
    setRows((rows) => rows.filter((_, i) => index !== i));
  };

  return (
    <div className={styles.block}>
      <Button
        className={styles.deleteColumnButton}
        onClick={handleOnRemoveColumn}
        closeButton
      />

      <div className={styles.title}>{columnName}</div>

      <div className={styles.rowContainer}>
        {rows.map((text, index) => (
          <Row index={index} rowText={text} onRemoveRow={handleOnRemoveRow} />
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
