import { JSX } from 'react';
import styles from './cardsBlog.module.css';
import { CardMini } from '@/src/components/cardMini/cardMini';
import GetPosts from '@/src/utils/getPosts';
import { SUM_POSTS } from '@/src/helpers/sumPosts';
import { dataCards } from '@/src/helpers/dataCards';

export default async function CardsBlog(): Promise<JSX.Element> {
    const posts = await GetPosts();

    const isLoadingError = !posts;
    const isEmpty = posts && posts.length === 0;
    const isData = posts && posts.length > 0;

    return (
        <div className="container">
            <ul className={styles.cards_blog} aria-label='Список статей блога'>
                {isLoadingError && <li>Не удалось загрузить данные...</li>}
                {isEmpty && <li>Здесь пока ничего нет...</li>}

                {isData && (
                    posts?.slice(0, SUM_POSTS)?.map((post, i) => (
                        <CardMini key={post?.id} data={post} dataCard={dataCards?.cards[i]} index={i} />
                    ))
                )}
            </ul>
        </div>
    );
}
