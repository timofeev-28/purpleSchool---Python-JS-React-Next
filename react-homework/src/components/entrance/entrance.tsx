import Title from '../ui/title/title';
import EntranceForm from './entranceForm/entranceForm';
import styles from './entrance.module.css';
import cn from 'classnames';


export default function Entrance() {
  return (
    <section className={cn(styles.entrance, 'container')}>
      <Title text="Вход" />
      <EntranceForm />
    </section>
  );
}
