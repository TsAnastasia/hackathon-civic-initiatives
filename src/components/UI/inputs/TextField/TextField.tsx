import cl from "classnames";
import { FC, InputHTMLAttributes } from "react";
import styles from "./textField.module.scss";

const TextField: FC<
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string | undefined;
  }
> = ({ className, label, type = "string", error, ...props }) => {
  return (
    <label className={cl(styles.root, className)}>
      {label && <span className={cl(styles.label)}>{label}</span>}
      <span className={styles.field}>
        <input
          className={cl(styles.input, error && styles.input_error)}
          type={type}
          autoComplete="off"
          {...props}
        />
        <span className={styles.error}>{error}</span>
      </span>
    </label>
  );
};

export default TextField;
