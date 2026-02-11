import { JSX } from 'react';
import styles from './postInfo.module.css';
import { Likes } from '@/src/components/ui/likes/likes';
import { declinationMinutes } from '@/src/utils/declensionMinutes';

interface PostInfoProps {
    title: string;
    likes: number;
    datePublic: string;
    readingTime: number;
}

export default function PostInfo({ title, likes, datePublic, readingTime }: PostInfoProps): JSX.Element {
    return (
        <div className={styles.info}>
            <span className={styles.info__direction}>
                <span className="visually-hidden">Тематический раздел</span>
                {title}
            </span>
            <span className={styles.info__dot}>.</span>{'\u00A0'}<span>
                <span className="visually-hidden">Дата публикации</span>
                {datePublic}
            </span>
            <span className={styles.info__dot}>
                <span className="visually-hidden">Время чтения</span>
                .</span>{'\u00A0'}<span>
                {`${readingTime} ${declinationMinutes(readingTime)}`}
            </span>
            <span className={styles.info__dot}>.</span>{'\u00A0'}<Likes>{likes}</Likes>
        </div>
    )
}
