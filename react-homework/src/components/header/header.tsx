import cn from 'classnames';
import styles from './header.module.css';
import Logo from './logo/logo';
import Nav from './nav/nav';


export default function Header() {
  return (
    <header className={styles.header}>
        <div className={cn(styles.header__container, 'container')}>
          <Logo />
          <Nav />
        </div>
    </header>
  );
}
