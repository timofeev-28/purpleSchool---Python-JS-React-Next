import cn from "classnames";
import styles from "./navItem.module.css";
import { LinkProps } from './navItem.props';
import { NavLink } from 'react-router-dom';


export default function NavItem({link, text, appearance, isLogined, countFavorites, onClick}: LinkProps) {
  return (
    <li>
      <NavLink
        className={({ isActive }) => cn(styles.nav__link, {
          [styles.link_entrance]: appearance === "icon-entrance",
          [styles.link_user]: appearance === "icon-user",
          [styles.active]: isActive
        })}
        to={link}
        onClick={onClick}
      >
        {text}
        {countFavorites !== undefined && isLogined && (
          <span className={styles.nav__count}>{countFavorites}</span>
        )}
      </NavLink>
    </li>
  );
}
