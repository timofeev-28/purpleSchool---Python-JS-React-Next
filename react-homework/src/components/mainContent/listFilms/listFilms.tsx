import styles from './listFilms.module.css';
import CardFilm from './cardFilm/cardFilm';
import { ListFilmsProps } from './listFilms.props';


export default function ListFilms({movies, error, initialState, isLoading}: ListFilmsProps) {
    return (
        <>
            {isLoading && <p className={styles.loading}>Загружаем информацию о фильмах...</p>}

            <div className={styles.list_films}>
                {movies?.length > 0 && !error && (
                    movies.map((card) => (
                    <CardFilm
                        key={card['#IMDB_ID']}
                        id={card['#IMDB_ID']}
                        title={card['#TITLE']}
                        image={card['#IMG_POSTER']}
                        rating={card['#RANK']}
                    />
                )))}
            </div>

            {initialState && movies?.length === 0 && !error && (
                <div className={styles.error__wrap}>
                    <h2 className={styles.error__title}>Упсс... Ничего не найдено!</h2>
                    <p className={styles.error__text}>Попробуйте изменить запрос или ввести более точное название фильма</p>
                </div>
            )}

            {error && <p>Ошибка загрузки</p>}
        </>
    );
}
