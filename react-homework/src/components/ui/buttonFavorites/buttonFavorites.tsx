import styles from './buttonFavorites.module.css';
import cn from "classnames";
import { ButtonFavoritesProps } from './buttonFavorites.props';
import { loadState, KEY_LOCAL_STORAGE, saveState } from '../../../store/userSlice/storage';
import { userActions, UserState } from '../../../store/userSlice/user.slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';


export default function ButtonFavorites({id, title, image, rating}: ButtonFavoritesProps) {
    const { name, isLogined, favorites } = useSelector((s: RootState) => s.user);
    const dispatch = useDispatch();

    const isFavorites = favorites.some(film => film.id === id);

    const btnClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const res: UserState[] = loadState(KEY_LOCAL_STORAGE);
        const filteredRes = res.filter((el) => el.name !== name);

        if (isFavorites) {
            const filteredFavorites = favorites.filter(film => film.id !== id);
            saveState([ ...filteredRes, {name: name, isLogined:  isLogined, favorites: filteredFavorites}], KEY_LOCAL_STORAGE);
            dispatch(userActions.deleteFavorites({ name: name, favorites: filteredFavorites}));
        } else {
            const filteredFavorites = [...favorites, {id: id, title: title, image: image, rating: rating}];
            saveState([ ...filteredRes, {name: name, isLogined:  isLogined, favorites: filteredFavorites}], KEY_LOCAL_STORAGE);
            dispatch(userActions.addFavorites({ favorites: filteredFavorites }));
        }
    }

    return (
        <button
            onClick={btnClickHandler}
            className={cn(styles.btn, {
                [styles.btn__main]: !isFavorites,
                [styles.btn__fav]: isFavorites
            })}
        >
            {!isFavorites && <span>В избранное</span>}
            {isFavorites && <span>В избранном</span>}
        </button>
    )
}
