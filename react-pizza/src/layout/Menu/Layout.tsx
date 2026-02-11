import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { getProfile, userActions } from '../../store/user.slice';
import { useEffect } from 'react';

export function Layout() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispath>();
    // подписываемся на получение профиля
    const profile = useSelector((s: RootState) => s.user.profile);
    const items = useSelector((s: RootState) => s.cart.items);
 
    // вызываем получение профиля
    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);

    const logout = () => {
        dispatch(userActions.logout());
        navigate('/auth/login');
    };

    return (
        <div className={styles['layout']}>
            <div className={styles['sidebar']}>
                <div className={styles['user']}>
                    <img className={styles['avatar']} src="/avatar.png" alt="Аватарка пользователя" />
                    <div className={styles['name']}>{profile?.name}</div>
                    <div className={styles['email']}>{profile?.email}</div>
                </div>
                <div className={styles['menu']}>
                    <NavLink className={({ isActive }) => cn(styles['link'], {
                        [styles.active]: isActive
                    })} to="/">
                        <img src="/menu-icon.svg" alt="Иконка меню" />
                        Menu
                    </NavLink>
                    <NavLink className={({ isActive }) => cn(styles['link'], {
                        [styles.active]: isActive
                    })} to="/cart">
                        <img src="/cart-icon.svg" alt="Иконка корзины" />
                        Корзина<span className={styles['cart-count']}>{items.reduce((acc, item) => acc += item.count, 0)}</span>
                    </NavLink>

                </div>
                <Button className={styles['exit']} onClick={logout}>
                    <img src="/exit-icon.svg" alt="Иконка выхода" />
                    Выйти
                </Button>
            </div>

             {/* ЗДЕСЬ ПЕРЕКЛЮЧАЕМЫЕ СТРАНИЦЫ */}
            <div className={styles['content']}>
                <Outlet />
            </div>
        </div>
    );
}
