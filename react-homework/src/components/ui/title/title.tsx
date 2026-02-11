import styles from "./title.module.css";
import { TitleProps } from './title.props';


export default function Title({ text }: TitleProps ) {
  return <h1 className={styles.title}>{text}</h1>;
}
