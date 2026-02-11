import { ForwardedRef, forwardRef } from "react";
import cn from "classnames";
import styles from "./input.module.css";
import { InputProps } from './input.props';


const Input = forwardRef(function Input(
  { placeholder, name, type, value, onChange, appearance, isValid = true, isLogined }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const pl = placeholder ? placeholder : "";

  return (
    <input
      className={cn(styles.input, {
        [styles.input__icon]: appearance === "icon",
        [styles.invalid]: !isValid,
      })}
      name={name}
      disabled={isLogined}
      ref={ref}
      type={type}
      placeholder={pl}
      value={value}
      onChange={onChange}
    />
  );
});

export default Input;
