import cl from "classnames";
import { FC, InputHTMLAttributes } from "react";
import scss from "./textField.module.scss";

const TextField: FC<
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string | undefined;
  }
> = ({ className, label, type = "string", error, ...props }) => {
  return (
    <label className={cl(scss.root, className)}>
      {label && <span className={cl(scss.label)}>{label}</span>}
      <span className={scss.field}>
        <input
          className={cl(scss.input, error && scss.input_error)}
          type={type}
          autoComplete="off"
          {...props}
        />
        <span className={scss.error}>{error}</span>
      </span>
    </label>
  );
};

export default TextField;
