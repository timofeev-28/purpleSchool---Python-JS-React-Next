import styles from "./nav.module.css";
import { MouseEvent } from "react";
import NavItem from '../navItem/navItem';
import { userActions, UserState } from '../../../store/userSlice/user.slice';
import { KEY_LOCAL_STORAGE, loadState, saveState } from '../../../store/userSlice/storage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';


export default function Nav() {
    const { name, isLogined, favorites } = useSelector((s: RootState) => s.user);
    const dispatch = useDispatch();

    const saveLogOut = (name: string) => {
        const res: UserState[] = loadState(KEY_LOCAL_STORAGE);
        const userLogIn = res.find(el => el.name === name);
        const changedUserLogIn = { ...userLogIn, isLogined: false};
        const filteredRes = res.filter((el) => el.name !== name);
        saveState([...filteredRes, changedUserLogIn], KEY_LOCAL_STORAGE);
        dispatch(userActions.logOut());
    }

    const linkClickHandler = (e: MouseEvent) => {
        if (isLogined) {
            saveLogOut(name);
        }
    };

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <NavItem link='./' text='Поиск фильмов' />
                <NavItem link='./favorites' text='Мои фильмы' isLogined={isLogined} countFavorites={favorites.length} />
                {name && (
                    <NavItem link='./user' text={name} appearance='icon-user' />
                )}
                <NavItem
                    onClick={linkClickHandler}
                    link='./login'
                    text={isLogined ? "Выйти" : "Войти"}
                    appearance='icon-entrance'
                />
            </ul>
        </nav>
    );
}
