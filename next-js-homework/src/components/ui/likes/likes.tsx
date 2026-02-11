import { JSX } from 'react';
import styles from './likes.module.css';
import { LikesProps } from './likesProps';

export const Likes = ({ children, ...props }: LikesProps): JSX.Element => {
    return (
        <button
            className={styles.likes_button}
            {...props}
            aria-label='Количество лайков'
        >
            {children}
        </button>
    );
};
