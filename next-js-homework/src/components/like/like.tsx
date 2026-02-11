'use client';

import { JSX, useState } from 'react';
import styles from './like.module.css';
import cn from 'classnames';
import { ButtonProps } from './like.props';

export default function Like({onClick, ...props}: ButtonProps): JSX.Element {
    const [isLikes, setIsLikes] = useState<boolean>(false);

    const btnClickHanler = () => {
        setIsLikes((state) => !state);
        onClick();
    };

    return (
        <div className={styles.like__wrap}>
            <span>Понравилось? Жми!</span>
            <button
                className={cn(styles.button, {
                    [styles.isLikes]: isLikes
                })}
                onClick={btnClickHanler}
                aria-label='Поставить лайк'
                {...props}
            >
            </button>
        </div>

    );
}
