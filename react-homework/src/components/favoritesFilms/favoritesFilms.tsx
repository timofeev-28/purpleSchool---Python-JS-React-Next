import cn from 'classnames';
import styles from './favoritesFilms.module.css';
import Title from '../ui/title/title';
import CardFilm from '../mainContent/listFilms/cardFilm/cardFilm';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


export default function FavoritesFilms() {
    const { favorites } = useSelector((s: RootState) => s.user);
    
    return (
        <section className={cn(styles.favorites, 'container')}>
            <Title text='Избранное' />
            <div className={styles.favorites__wrap}>
                {favorites && favorites.length > 0 &&
                    favorites.map((film) => (
                        <CardFilm
                            key={film.id}
                            id={film.id}
                            title={film.title}
                            image={film.image}
                            rating={film.rating}
                        />
                ))}
                {(favorites && favorites.length === 0) && (
                <p className={styles.favorites__text}>Здесь пока ничего нет, выберите любимые фильмы!!</p>
                )}
            </div>
        </section>
    )
}
