import styles from './userProfile.module.css';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


export default function userProfile() {
    const { name } = useSelector((s: RootState) => s.user);

    return (
        <div className={cn(styles.user, 'container')}>
            <h1 className={styles.user__title}>Профиль пользователя</h1>
            <p className={styles.user__name}>Имя пользователя: {name}</p>
        </div>
    )
}
