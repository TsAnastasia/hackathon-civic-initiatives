import cl from "classnames";
import { FC, InputHTMLAttributes } from "react";
import scss from "./checkbox.module.scss";

const Checkbox: FC<
  InputHTMLAttributes<HTMLInputElement> & { label?: string }
> = ({ className, label, ...props }) => {
  return (
    <div className={cl(className, scss.root)}>
      <span className={scss.label}>{label}</span>
      <label>
        <input type="checkbox" {...props} className={scss.input} />
        <span className={cl(scss.box, props.checked && scss.box_checked)} />
      </label>
    </div>
  );
};

export default Checkbox;
