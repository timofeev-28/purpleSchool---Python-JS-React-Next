import { Link } from 'react-router-dom';
import styles from './cardFilm.module.css';
import { CardFilmProps } from './cardFilm.props';
import ButtonFavorites from '../../../ui/buttonFavorites/buttonFavorites';


export default function CardFilm({id, title, image, rating }: CardFilmProps) {
    return (
        <div className={styles.card} key={id}>
            <span className={styles.card__rating}>{rating}</span>
            <Link className={styles.card__img_link} to={`/movie/${id}`}>
                <img
                    className={styles.card__image}
                    src={image}
                    alt={title}
                />
            </Link>
            <h2 className={styles.card__title}>{title}</h2>
            <ButtonFavorites id={id} title={title} image={image} rating={rating} />
        </div>
    );
}
