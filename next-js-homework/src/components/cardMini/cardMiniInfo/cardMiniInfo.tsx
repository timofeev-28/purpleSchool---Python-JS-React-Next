import { JSX } from 'react';
import styles from './cardMiniInfo.module.css';
import DateAndLikes from '@/src/components/cardMini/cardMiniInfo/dateAndLikes/dateAndLikes';
import { HTag } from '@/src/components/ui/hTag/HTag';
import { P } from '@/src/components/ui/p/P';
import Link from 'next/link';
import { PostItemProps } from '@/src/interface/postItem.props';
import { DataCardsProps } from '@/src/interface/dataCards.props';
import { declinationMinutes } from '@/src/utils/declensionMinutes';

interface CardMiniInfoProps {
    data: PostItemProps;
    dataCard: DataCardsProps;
}

export default function CardMiniInfo({ data, dataCard }: CardMiniInfoProps): JSX.Element {
    const { title, likes, datePublic, readingTime } = dataCard;

    return (
        <div className={styles.info}>
            <DateAndLikes title={title} likes={likes} datePublic={datePublic} />
            <HTag tag='h2'>{data?.title}</HTag>
            <P size='s'>{data?.body}</P>
            <div className={styles.info__time_wrap}>
                <span className={styles.info__time}>
                <span className="visually-hidden">{`Время чтения`}</span>
                    {`${readingTime} ${declinationMinutes(readingTime)}`}
                </span>
                <Link className={styles.info__link} href={`/post/${data?.id}`}>Читать</Link>
            </div>
        </div>
    );
}
