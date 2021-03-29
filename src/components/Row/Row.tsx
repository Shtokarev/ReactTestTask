import React from "react";
import { Button } from "../Button";

import styles from "./Row.module.scss";

interface RowProps {
  rowText: string;
  index: number;
  onRemoveRow: (index: number) => void;
}

export const Row: React.FC<RowProps> = (props) => {
  const { rowText, index, onRemoveRow } = props;

  const handleOnDeleteRow = () => onRemoveRow(index);

  return (
    <div key={index} className={styles.row}>
      <div>
        {index + 1}. {rowText}
      </div>

      <Button
        className={styles.deleteRowButton}
        onClick={handleOnDeleteRow}
        closeButton
      />
    </div>
  );
};
