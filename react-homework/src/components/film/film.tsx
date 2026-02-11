import cn from 'classnames';
import styles from './film.module.css';
import ButtonFavorites from '../ui/buttonFavorites/buttonFavorites';
import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { FilmProps } from './film.props';


export default function Film() {
    const data = useLoaderData() as FilmProps;

    const getDuration = (duration: string) => {
        if (!duration) {
            return;
        }

        let arr = duration.split('');
        let hours: number = 0;
        let min: number = 0;
        let sec: number = 0;

        if (arr.includes('H')) {
            hours = Number(arr.slice(2, arr.indexOf('H')).join('')) * 60;
            arr.splice(0, arr.indexOf('H') + 1);
        } else {
            arr.splice(0, 2);
        }

        if (arr.includes('M')) {
            min = Number(arr.slice(0, arr.indexOf('M')).join(''));
            arr.splice(0, arr.indexOf('M') + 1);
        }

        if (arr.includes('S')) {
            let seconds = Number(arr.slice(0, arr.indexOf('S')).join(''));
            sec = Math.round(seconds / 60);
        }

        return hours + min + sec;
    }

    return (
        <Suspense fallback={'Загрузка...'}>
            <Await resolve={data}>
            {({ short }: FilmProps) => (
                <section className={cn(styles.film, 'container')}>
                    <h1 className={styles.film__title}>
                        <span>Поиск фильмов</span>
                        {short?.name}
                    </h1>
                    <div className={styles.film__content_wrap}>
                        <div className={styles.film__image_wrap}>
                            <img src={short?.image} alt={short?.name} />
                        </div>
                        <div className={styles.film__content}>
                            <p className={styles.film__descr}>{short?.description}</p>
                            <div className={styles.film__rating_wrap}>
                                <p className={styles.film__rating}>{short?.aggregateRating?.ratingValue}</p>
                                <ButtonFavorites
                                 id={data.imdbId} 
                                 title={short?.name} 
                                 image={short?.image}
                                  rating={short?.aggregateRating?.ratingValue} 
                                  />
                            </div>
                            <p className={styles.film__text}>
                                <span className={styles.film__subtitle}>Тип</span>
                                {short['@type']}
                            </p>
                            <p className={styles.film__text}>
                                <span className={styles.film__subtitle}>Дата выхода</span>
                                {short?.datePublished}
                            </p>
                            <p className={styles.film__text}>
                                <span className={styles.film__subtitle}>Длительность трейлера</span>
                                {short?.trailer?.duration && <>{getDuration(short?.trailer?.duration)} мин</>}
                                {!short?.trailer?.duration && <>Нет данных</>}
                            </p>
                            <p className={styles.film__text}>
                                <span className={styles.film__subtitle}>Жанр</span>
                                {(short?.genre).join(', ')}
                            </p>
                        </div>
                    </div>
                    <div className={styles.film__reviews}>
                        <h2 className={styles.film__reviews_title}>Отзывы</h2>
                            <div className={styles.film__reviews_wrap}>
                                <div className={styles.film__reviews_subtitle_wrap}>
                                    <p className={styles.film__reviews_subtitle}>{short?.review?.name}</p>
                                    <p className={styles.film__reviews_date}>{short?.review?.dateCreated}</p>
                                </div>
                                <p className={styles.film__reviews_descr}>{short?.review?.reviewBody}</p>
                            </div>
                    </div>
                </section>
            )}
            </Await>
        </Suspense>
    )
}
