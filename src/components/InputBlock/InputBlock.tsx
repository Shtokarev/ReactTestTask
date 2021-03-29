import React, { useState, ChangeEvent } from "react";
import { Button } from "../Button";
import styles from "./InputBlock.module.scss";

interface InputBlockProps {
  placeholder: string;
  actionText: string;
  onClickAction: (name: string) => void;
}

export const InputBlock: React.FC<InputBlockProps> = (props) => {
  const { onClickAction, placeholder, actionText } = props;
  const [inputText, setInputText] = useState("");

  const handleOnChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleOnClick = () => {
    onClickAction(inputText);
    setInputText("");
  };

  return (
    <div className={styles.container}>
      <input
        name="inputText"
        type="text"
        onChange={handleOnChangeInput}
        placeholder={placeholder}
        value={inputText}
        className={styles.textInput}
      />
      <Button
        title={actionText}
        onClick={handleOnClick}
        disabled={!inputText.length}
      />
    </div>
  );
};
