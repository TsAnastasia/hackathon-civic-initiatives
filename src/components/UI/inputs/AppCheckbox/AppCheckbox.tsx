import cl from "classnames";
import { FC, InputHTMLAttributes } from "react";

const AppCheckbox: FC<
  InputHTMLAttributes<HTMLInputElement> & { label?: string }
> = ({ className, label, ...props }) => {
  return (
    <div className={cl(className)}>
      <span>{label}</span>
      <input type="checkbox" {...props} />
    </div>
  );
};

export default AppCheckbox;
