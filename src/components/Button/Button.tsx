import React from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  title?: string;
  closeButton?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  title,
  closeButton,
  className,
  ...rest
}) => (
  <button
    onClick={onClick}
    className={cn(styles.button, className, {
      [styles.close]: closeButton,
    })}
    {...rest}
  >
    {closeButton ? "X" : title}
  </button>
);
