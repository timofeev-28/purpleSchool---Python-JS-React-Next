import styles from './button.module.css';
import { ButtonProps } from './Button.props';


export default function Button({ text, isLogined }: ButtonProps) {
  return (
    <button className={styles.btn} type='submit' disabled={isLogined}>
      {text}
    </button>
  );
}
