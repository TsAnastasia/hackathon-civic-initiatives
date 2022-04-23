import cl from "classnames";
import { FC, InputHTMLAttributes } from "react";
import styles from "./appCheckbox.module.scss";

const AppCheckbox: FC<
  InputHTMLAttributes<HTMLInputElement> & { label?: string }
> = ({ className, label, ...props }) => {
  return (
    <div className={cl(className, styles.root)}>
      <span className={styles.label}>{label}</span>
      <label>
        <input type="checkbox" {...props} className={styles.input} />
        <span className={cl(styles.box, props.checked && styles.box_checked)} />
      </label>
    </div>
  );
};

export default AppCheckbox;
