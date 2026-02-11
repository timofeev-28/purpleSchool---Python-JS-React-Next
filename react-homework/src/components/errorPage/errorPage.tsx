import cn from 'classnames';
import styles from './errorPage.module.css';

export default function ErrorPage() {
    return (
        <p className={cn(styles.error, 'container')}>Запрашиваемая страница не существует :(</p>
    )
}
