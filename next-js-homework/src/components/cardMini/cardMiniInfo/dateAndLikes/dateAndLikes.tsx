import { JSX } from 'react';
import styles from './dateAndLikes.module.css';
import { Likes } from '@/src/components/ui/likes/likes';

interface DateAndLikesProps {
    title: string;
    likes: number;
    datePublic: string;
}

export default function DateAndLikes({ title, likes, datePublic }: DateAndLikesProps): JSX.Element {
    return (
        <div className={styles.date}>
            <span className={styles.date__direction}>
                <span className="visually-hidden">{`Тематический раздел статьи`}</span>
                {title}
            </span>
            <span className={styles.date__date}>
                <span className="visually-hidden">{`Дата публикации`}</span>
                <span className={styles.date__dot}>.</span>{'\u00A0'}{datePublic}
            </span>
            <Likes>{likes}</Likes>
        </div>
    )
}
