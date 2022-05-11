import cl from "classnames";
import { FC, TextareaHTMLAttributes } from "react";
import scss from "./textFieldMultiline.module.scss";

const TextFieldMultiline: FC<
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    error?: string | undefined;
  }
> = ({ className, label, error, ...props }) => {
  return (
    <label className={cl(scss.root, className)}>
      {label && <span className={cl(scss.label)}>{label}</span>}
      <span className={scss.field}>
        <textarea
          className={cl(scss.input, error && scss.input_error)}
          autoComplete="off"
          {...props}
        />
        <span className={scss.error}>{error}</span>
      </span>
    </label>
  );
};

export default TextFieldMultiline;
