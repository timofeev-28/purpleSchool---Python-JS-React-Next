import styles from "./form.module.css";
import cn from "classnames";
import { FormProps } from './formProps';


export default function Form({ children, onSubmit, appearance }: FormProps) {
  return (
    <form
      className={cn(styles.form, {
        [styles.form__entrance]: appearance === "entrance",
      })}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
