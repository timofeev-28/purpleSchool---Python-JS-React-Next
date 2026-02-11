import { JSX } from 'react';
import styles from './postComments.module.css';
import { PostCommentsProps } from '@/src/interface/postCommentsProps';
import { P } from '@/src/components/ui/p/P';
import { HTag } from '@/src/components/ui/hTag/HTag';

export default function PostComments({ comments }: {comments: PostCommentsProps[] | null}): JSX.Element {
    const isLoadingError = !comments;
    const isEmpty = comments && comments.length === 0;
    const isData = comments && comments.length > 0;

    return (
        <div className={styles.comments}>
            <HTag tag={'h2'}>Комментарии</HTag>
            {isLoadingError && <P>Не удалось загрузить данные...</P>}
            {isEmpty && <P>Здесь пока ничего нет...</P>}

            {isData &&
                <ul>
                    {comments?.map(comment => (
                        <li key={comment?.id} className={styles.comments__comment}>
                            <div className={styles.comments__email_wrap}>
                                <span className={styles.comments__name}>{comment?.name}</span>
                                <span className={styles.comments__email}>{comment?.email}</span>
                            </div>
                            <p>
                                <span className="visually-hidden">Текст комментария</span>
                                {comment?.body}</p>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}
