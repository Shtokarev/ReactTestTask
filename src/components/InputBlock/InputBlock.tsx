import React, { useState, ChangeEvent } from "react";
import styles from "./InputBlock.module.scss";

interface InputBlockProps {
  placeholder: string;
  actionText: string;
  onClickAction: (name: string) => void;
}

export const InputBlock: React.FC<InputBlockProps> = (props) => {
  const { onClickAction, placeholder, actionText } = props;
  const [inputText, setInputText] = useState("");

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onClickHandler = () => {
    onClickAction(inputText);
    setInputText("");
  };

  return (
    <div className={styles.container}>
      <input
        name="inputText"
        type="text"
        onChange={onChangeInputHandler}
        placeholder={placeholder}
        value={inputText}
        className={styles.textInput}
      />
      <button
        onClick={onClickHandler}
        disabled={!inputText.length}
        className={styles.button}
      >
        {actionText}
      </button>
    </div>
  );
};
