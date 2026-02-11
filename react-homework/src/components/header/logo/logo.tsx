import { Link, useLocation } from 'react-router-dom';
import styles from "./logo.module.css";


export default function Logo() {
    const location = useLocation();

    const linkComponent = <img src='/icons/logo.svg' width={49} height={40} alt='Логотип сайта' />;

    return (
      <>
          {location.pathname === '/' &&
              <Link className={styles.header__logo} to=''>
                {linkComponent}
              </Link>
          }
          {location.pathname !== '/' &&
              <Link className={styles.header__logo} to='/'>
                  {linkComponent}
              </Link>
          }
      </>
    );
}
