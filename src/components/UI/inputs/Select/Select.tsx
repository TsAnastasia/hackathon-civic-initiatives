import cl from "classnames";
import { FC, SelectHTMLAttributes } from "react";
import scss from "./select.module.scss";

const Select: FC<
  SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    error?: string | undefined;
    options: { value: string; name: string }[];
  }
> = ({ className, options, error, label, ...props }) => {
  return (
    <label className={cl(scss.root, className)}>
      {label && <span className={cl(scss.label)}>{label}</span>}
      <span className={scss.field}>
        <select
          className={cl(scss.input, error && scss.input_error)}
          {...props}
        >
          {options.map(({ value, name }) => (
            <option key={value} value={value} className={scss.option}>
              {name}
            </option>
          ))}
        </select>

        <span className={scss.error}>{error}</span>
      </span>
    </label>
  );
};

export default Select;
