import cl from "classnames";
import { FC, InputHTMLAttributes } from "react";

const TextField: FC<
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string | undefined;
  }
> = ({ className, label, type = "string", error, ...props }) => {
  return (
    <label className={cl(className)}>
      {label && <span>{label}</span>}
      <input type={type} autoComplete="off" {...props} />
      <span>{error}</span>
    </label>
  );
};

export default TextField;
