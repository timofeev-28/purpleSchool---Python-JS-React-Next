import cn from "classnames";
import styles from "./paragraph.module.css";
import { ParagraphProps } from './paragraph.props';


export default function Paragraph({ text, appearance }: ParagraphProps) {
  return (
    <p
      className={cn(styles.descr, {
        [styles.fz20]: appearance === "fz20",
      })}
    >
      {text}
    </p>
  );
}
