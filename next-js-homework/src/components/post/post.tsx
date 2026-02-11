'use client';

import { JSX } from 'react';
import styles from './post.module.css';
import cn from 'classnames';
import { PostItemProps } from '@/src/interface/postItem.props';
import Image from 'next/image';
import Like from '@/src/components/like/like';
import { changeLikes } from '@/src/utils/changeLikes';
import { DataCardsProps } from '@/src/interface/dataCards.props';
import PostInfo from './postInfo/postInfo';
import PostComments from './postComments/postComments';
import { PostCommentsProps } from '@/src/interface/postCommentsProps';
import CreateComment from './createComment/createComment';

interface PostProps{
    data: PostItemProps;
    dataCard: DataCardsProps;
    comments: PostCommentsProps[] | null;
}

export default function Post({ data, dataCard, comments }: PostProps): JSX.Element {
    const { title, likes, datePublic, src, readingTime } = dataCard;

    return (
        <div className={cn('container', styles.post)}>
            <h1>{data?.title}</h1>
            <PostInfo title={title} likes={likes} datePublic={datePublic} readingTime={readingTime} />
            <div className={styles.post__image_wrap}>
                <Image
                    className={styles.post__image}
                    src={src}
                    width={687}
                    height={440}
                    alt='Изображение из блога'
                />
            </div>
            <p>{data?.body}</p>
            <Like onClick={changeLikes} />
            <PostComments comments={comments} />
            <CreateComment />
        </div>
    );
}
